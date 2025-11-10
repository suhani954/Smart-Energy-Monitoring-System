import psutil
import platform
import requests
import time
import json
from datetime import datetime

# ----------------------------
# CONFIGURATION
# ----------------------------
BACKEND_URL = "http://127.0.0.1:8000/api/metrics"  # 🔄 change when deployed
SEND_INTERVAL = 5  # seconds

# ----------------------------
# FUNCTION: Collect system metrics
# ----------------------------
def get_system_metrics():
    try:
        # Basic system info
        system_info = {
            "os": platform.system(),
            "os_version": platform.version(),
            "machine": platform.machine(),
            "processor": platform.processor(),
            "hostname": platform.node(),
        }

        # CPU, Memory, Disk usage
        cpu_percent = psutil.cpu_percent(interval=1)
        memory = psutil.virtual_memory()
        disk = psutil.disk_usage("/")

        # Disk I/O stats
        disk_io = psutil.disk_io_counters()
        io_stats = {
            "read_bytes": disk_io.read_bytes,
            "write_bytes": disk_io.write_bytes,
        }

        # Top 5 processes by CPU usage
        processes = []
        for proc in psutil.process_iter(["pid", "name", "cpu_percent", "memory_percent"]):
            try:
                processes.append(proc.info)
            except (psutil.NoSuchProcess, psutil.AccessDenied):
                continue

        processes = sorted(processes, key=lambda x: x["cpu_percent"], reverse=True)[:5]

        # Combine all metrics
        return {
            "source": "local_agent",  # ✅ tells backend this came from local agent
            "timestamp": datetime.now().isoformat(),
            "system_info": system_info,
            "cpu": {"usage_percent": cpu_percent},
            "memory": {"usage_percent": memory.percent},
            "disk": {"usage_percent": disk.percent},
            "io_stats": io_stats,
            "top_processes": processes,
        }

    except Exception as e:
        return {"error": str(e)}

# ----------------------------
# FUNCTION: Send metrics to backend
# ----------------------------
def send_metrics_to_backend(metrics):
    try:
        response = requests.post(BACKEND_URL, json=metrics, timeout=10)
        if response.status_code == 200:
            data = response.json()
            if data.get("agent_detected"):
                print("🟢 Local Agent detected by backend.")
            else:
                print("🟡 Backend running, but not marked as active yet.")
            print("✅ Metrics sent successfully!\n")
        else:
            print(f"⚠️ Failed to send metrics. Status: {response.status_code}")
    except requests.exceptions.ConnectionError:
        print("🔴 Backend not reachable. Retrying in a few seconds...")
    except Exception as e:
        print(f"❌ Error sending metrics: {e}")

# ----------------------------
# MAIN LOOP
# ----------------------------
if __name__ == "__main__":
    print(f"🚀 Local Agent started. Sending metrics every {SEND_INTERVAL} seconds...\n")
    while True:
        metrics = get_system_metrics()
        print(f"📤 Sending metrics at {datetime.now().strftime('%H:%M:%S')}")
        print(json.dumps(metrics, indent=2))
        send_metrics_to_backend(metrics)
        time.sleep(SEND_INTERVAL)
