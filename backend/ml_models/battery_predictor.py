import psutil
import random
import platform
import math
import subprocess
import ctypes
import os

def get_system_metrics():
    """Collect CPU, memory, and temperature safely."""
    cpu = memory = temperature = 50.0
    try:
        cpu = psutil.cpu_percent(interval=1)
    except Exception:
        cpu = 50.0

    try:
        memory = psutil.virtual_memory().percent
    except Exception:
        memory = 50.0

    try:
        temps = psutil.sensors_temperatures()
        if temps and "coretemp" in temps:
            temperature = temps["coretemp"][0].current
        elif temps:
            first_key = list(temps.keys())[0]
            temperature = temps[first_key][0].current
        else:
            temperature = 35.0
    except Exception:
        temperature = 35.0

    cpu = cpu if isinstance(cpu, (int, float)) and not math.isnan(cpu) else 50.0
    memory = memory if isinstance(memory, (int, float)) and not math.isnan(memory) else 50.0
    temperature = temperature if isinstance(temperature, (int, float)) and not math.isnan(temperature) else 35.0

    return {"cpu_usage": cpu, "memory_usage": memory, "temperature": temperature}


# -------------------- OS-SPECIFIC BATTERY FUNCTIONS --------------------

def get_windows_battery_status():
    """Windows API-based battery detection."""
    class SYSTEM_POWER_STATUS(ctypes.Structure):
        _fields_ = [
            ("ACLineStatus", ctypes.c_byte),
            ("BatteryFlag", ctypes.c_byte),
            ("BatteryLifePercent", ctypes.c_byte),
            ("Reserved1", ctypes.c_byte),
            ("BatteryLifeTime", ctypes.c_ulong),
            ("BatteryFullLifeTime", ctypes.c_ulong),
        ]

    status = SYSTEM_POWER_STATUS()
    try:
        if ctypes.windll.kernel32.GetSystemPowerStatus(ctypes.byref(status)):
            percent = status.BatteryLifePercent
            if status.ACLineStatus == 1:
                charging_status = "Charging"
            elif status.ACLineStatus == 0:
                charging_status = "Discharging"
            else:
                charging_status = "Unknown"
            percent = percent if 0 <= percent <= 100 else None
        else:
            percent, charging_status = None, "Unknown"
    except Exception:
        percent, charging_status = None, "Unknown"

    return percent, charging_status


def get_linux_battery_status():
    """Linux battery detection via /sys/class/power_supply."""
    try:
        base_path = "/sys/class/power_supply/"
        batteries = [b for b in os.listdir(base_path) if b.startswith("BAT")]
        if not batteries:
            return None, "No Battery Detected"
        bat = batteries[0]
        with open(os.path.join(base_path, bat, "capacity"), "r") as f:
            percent = int(f.read().strip())
        with open(os.path.join(base_path, bat, "status"), "r") as f:
            status_str = f.read().strip().lower()
        charging_status = "Charging" if "charging" in status_str else "Discharging"
        return percent, charging_status
    except Exception:
        return None, "Unknown"


def get_macos_battery_status():
    """macOS battery detection using pmset."""
    try:
        output = subprocess.check_output(["pmset", "-g", "batt"]).decode()
        lines = output.splitlines()
        for line in lines:
            if "%" in line:
                percent = int(line.split("%")[0].split()[-1])
                if "charging" in line.lower():
                    charging_status = "Charging"
                else:
                    charging_status = "Discharging"
                return percent, charging_status
        return None, "Unknown"
    except Exception:
        return None, "Unknown"


def get_battery_status():
    """Cross-platform battery detection."""
    current_os = platform.system()
    if current_os == "Windows":
        return get_windows_battery_status()
    elif current_os == "Linux":
        return get_linux_battery_status()
    elif current_os == "Darwin":
        return get_macos_battery_status()
    else:
        return None, "Unknown"


# -------------------- PREDICT BATTERY LIFE --------------------

def predict_battery_life(system_metrics=None):
    """Safe, cross-platform battery prediction."""
    if system_metrics is None:
        system_metrics = get_system_metrics()

    cpu = system_metrics.get("cpu_usage", 50)
    memory = system_metrics.get("memory_usage", 50)
    temp = system_metrics.get("temperature", 35)

    # Estimate battery based on system load
    try:
        predicted_battery = 100 - (cpu * 0.3 + memory * 0.2 + (temp - 25) * 0.5)
    except Exception:
        predicted_battery = 50.0

    predicted_battery = predicted_battery if isinstance(predicted_battery, (int, float)) else 50.0

    # Get actual battery and charging status
    actual_battery, charging_status = get_battery_status()

    # Blend prediction safely
    try:
        if actual_battery is not None:
            predicted_battery = (predicted_battery * 0.7) + (actual_battery * 0.3)
        else:
            predicted_battery += random.uniform(-2, 2)
    except Exception:
        predicted_battery = 50.0

    # Clamp and round
    predicted_battery = round(max(0.0, min(100.0, predicted_battery)), 2)
    if actual_battery is not None:
        actual_battery = round(max(0.0, min(100.0, actual_battery)), 2)

    return {
        "predicted_battery_life": predicted_battery,
        "actual_battery_level": actual_battery,
        "charging_status": charging_status
    }
