# import psutil
# import datetime
# import platform

# # ---------------- Core functions ----------------
# def get_cpu_usage():
#     return psutil.cpu_percent(interval=1)

# def get_memory_usage():
#     memory = psutil.virtual_memory()
#     return memory.percent

# def get_disk_usage():
#     disk = psutil.disk_usage('/')
#     return disk.percent

# def get_battery_status():
#     try:
#         battery = psutil.sensors_battery()
#         if battery:
#             return {"percent": battery.percent, "charging": battery.power_plugged}
#         else:
#             return {"percent": None, "charging": None}
#     except:
#         return {"percent": None, "charging": None}

# def get_system_uptime():
#     seconds = (datetime.datetime.now() - datetime.datetime.fromtimestamp(psutil.boot_time())).total_seconds()
#     days, remainder = divmod(seconds, 86400)
#     hours, remainder = divmod(remainder, 3600)
#     minutes, _ = divmod(remainder, 60)
#     return f"{int(days)}d {int(hours)}h {int(minutes)}m"

# # ---------------- Additional features ----------------
# def get_network_usage():
#     net_io = psutil.net_io_counters()
#     return {
#         "sent_mb": round(net_io.bytes_sent / (1024 ** 2), 2),
#         "recv_mb": round(net_io.bytes_recv / (1024 ** 2), 2)
#     }

# def get_process_count():
#     return len(psutil.pids())

# def get_drives_info():
#     drives = []
#     for partition in psutil.disk_partitions():
#         if partition.fstype:  # skip CD-ROMs or unmounted
#             try:
#                 usage = psutil.disk_usage(partition.mountpoint)
#                 drives.append({
#                     "device": partition.device,
#                     "mountpoint": partition.mountpoint,
#                     "total": round(usage.total / (1024 ** 3), 2),
#                     "used": round(usage.used / (1024 ** 3), 2),
#                     "percent": usage.percent
#                 })
#             except:
#                 continue
#     return drives

# def get_system_info():
#     ram_gb = round(psutil.virtual_memory().total / (1024 ** 3), 2)
#     return {
#         "os": platform.system() + " " + platform.release(),
#         "cpu": platform.processor(),
#         "ram": ram_gb
#     }

# def get_disk_io():
#     """Return disk read/write bytes in MB."""
#     try:
#         io_counters = psutil.disk_io_counters(perdisk=True)
#         disk_stats = {}
#         for disk, counters in io_counters.items():
#             disk_stats[disk] = {
#                 "read_mb": round(counters.read_bytes / (1024 ** 2), 2),
#                 "write_mb": round(counters.write_bytes / (1024 ** 2), 2)
#             }
#         return disk_stats
#     except Exception:
#         return {}



# # ---------------- Combined metrics ----------------
# def get_system_metrics():
#     try:
#         memory = psutil.virtual_memory()
#         disk = psutil.disk_usage('/')
#         battery = psutil.sensors_battery()

#         return {
#             "cpu_usage": get_cpu_usage(),
#             "memory": {
#                 "total": round(memory.total / (1024 ** 3), 2),
#                 "used": round(memory.used / (1024 ** 3), 2),
#                 "percent": memory.percent
#             },
#             "disk": {
#                 "total": round(disk.total / (1024 ** 3), 2),
#                 "used": round(disk.used / (1024 ** 3), 2),
#                 "percent": disk.percent
#             },
#             "battery": {
#                 "percent": battery.percent if battery else None,
#                 "charging": battery.power_plugged if battery else None
#             },
#             "uptime": get_system_uptime(),
#             "network": get_network_usage(),
#             "process_count": get_process_count(),
#             "drives": get_drives_info(),
#             "system_info": get_system_info(),
#             "disk_io": get_disk_io(),

#         }
#     except Exception as e:
#         return {"error": str(e)}

import psutil
import datetime
import platform
import random

# ---------------- Core functions ----------------
def get_cpu_usage():
    return psutil.cpu_percent(interval=1)

def get_memory_usage():
    memory = psutil.virtual_memory()
    return memory.percent

def get_disk_usage():
    disk = psutil.disk_usage('/')
    return disk.percent

def get_battery_status():
    try:
        battery = psutil.sensors_battery()
        if battery:
            return {"percent": battery.percent, "charging": battery.power_plugged}
        else:
            return {"percent": None, "charging": None}
    except:
        return {"percent": None, "charging": None}

def get_system_uptime():
    seconds = (datetime.datetime.now() - datetime.datetime.fromtimestamp(psutil.boot_time())).total_seconds()
    days, remainder = divmod(seconds, 86400)
    hours, remainder = divmod(remainder, 3600)
    minutes, _ = divmod(remainder, 60)
    return f"{int(days)}d {int(hours)}h {int(minutes)}m"

# ---------------- Additional features ----------------
def get_network_usage():
    net_io = psutil.net_io_counters()
    return {
        "sent_mb": round(net_io.bytes_sent / (1024 ** 2), 2),
        "recv_mb": round(net_io.bytes_recv / (1024 ** 2), 2)
    }

def get_process_count():
    return len(psutil.pids())

def get_drives_info():
    drives = []
    for partition in psutil.disk_partitions():
        if partition.fstype:  # skip CD-ROMs or unmounted
            try:
                usage = psutil.disk_usage(partition.mountpoint)
                drives.append({
                    "device": partition.device,
                    "mountpoint": partition.mountpoint,
                    "total": round(usage.total / (1024 ** 3), 2),
                    "used": round(usage.used / (1024 ** 3), 2),
                    "percent": usage.percent
                })
            except:
                continue
    return drives

def get_system_info():
    ram_gb = round(psutil.virtual_memory().total / (1024 ** 3), 2)
    return {
        "os": platform.system() + " " + platform.release(),
        "cpu": platform.processor(),
        "ram": ram_gb
    }

def get_disk_io():
    """Return disk read/write bytes in MB."""
    try:
        io_counters = psutil.disk_io_counters(perdisk=True)
        disk_stats = {}
        for disk, counters in io_counters.items():
            disk_stats[disk] = {
                "read_mb": round(counters.read_bytes / (1024 ** 2), 2),
                "write_mb": round(counters.write_bytes / (1024 ** 2), 2)
            }
        return disk_stats
    except Exception:
        return {}

# ---------------- Combined metrics ----------------
def get_system_metrics():
    try:
        memory = psutil.virtual_memory()
        disk = psutil.disk_usage('/')
        battery = psutil.sensors_battery()

        return {
            "cpu_usage": get_cpu_usage(),
            "memory": {
                "total": round(memory.total / (1024 ** 3), 2),
                "used": round(memory.used / (1024 ** 3), 2),
                "percent": memory.percent
            },
            "disk": {
                "total": round(disk.total / (1024 ** 3), 2),
                "used": round(disk.used / (1024 ** 3), 2),
                "percent": disk.percent
            },
            "battery": {
                "percent": battery.percent if battery else None,
                "charging": battery.power_plugged if battery else None
            },
            "uptime": get_system_uptime(),
            "network": get_network_usage(),
            "process_count": get_process_count(),
            "drives": get_drives_info(),
            "system_info": get_system_info(),
            "disk_io": get_disk_io(),
        }
    except Exception as e:
        return {"error": str(e)}


# ---------------- NEW: Simulated frontend (browser/device) metrics ----------------
def get_simulated_frontend_metrics():
    """
    Generates simulated browser/device metrics for testing purposes.
    This is used when frontend metrics aren't sent yet.
    """
    return {
        "battery_level": random.randint(20, 100),
        "is_charging": random.choice([True, False]),
        "network_type": random.choice(["wifi", "4g", "5g", "3g", "slow-2g"]),
        "is_online": random.choice([True, False]),
        "device_memory": random.choice([2, 4, 6, 8, 12]),
        "cpu_cores": random.choice([2, 4, 8]),
        "screen_resolution": random.choice(["1366x768", "1920x1080", "2560x1440"]),
        "timestamp": datetime.datetime.now().isoformat()
    }
