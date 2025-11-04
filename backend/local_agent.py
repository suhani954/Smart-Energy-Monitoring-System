# import psutil
# import requests
# import time
# import platform
# import json

# # === CONFIG ===
# API_URL = "http://localhost:8000/api/metrics"  # change to your deployed backend URL later
# INTERVAL = 10  # seconds between each metric upload

# def collect_metrics():
#     """Collect CPU, RAM, Disk and System Info"""
#     metrics = {
#         "system": platform.system(),
#         "release": platform.release(),
#         "cpu_percent": psutil.cpu_percent(interval=1),
#         "ram_percent": psutil.virtual_memory().percent,
#         "disk_percent": psutil.disk_usage("/").percent,
#         "process_count": len(psutil.pids())
#     }
#     return metrics

# def send_metrics(metrics):
#     """Send metrics to backend"""
#     try:
#         response = requests.post(API_URL, json=metrics, timeout=5)
#         if response.status_code == 200:
#             print("✅ Metrics sent successfully:", metrics)
#         else:
#             print(f"⚠️ Server responded with {response.status_code}: {response.text}")
#     except requests.exceptions.RequestException as e:
#         print("❌ Error sending metrics:", e)

# def main():
#     print("🔍 Local Agent started. Sending metrics every", INTERVAL, "seconds...")
#     while True:
#         data = collect_metrics()
#         send_metrics(data)
#         time.sleep(INTERVAL)

# if __name__ == "__main__":
#     main()


# import psutil
# import time
# import requests
# import json

# BACKEND_URL = "http://localhost:8000/api/metrics"  # Make sure backend is running on this port
# INTERVAL = 10  # seconds

# def get_local_metrics():
#     """Collect system metrics."""
#     return {
#         "cpu_percent": psutil.cpu_percent(interval=1),
#         "ram_percent": psutil.virtual_memory().percent,
#         "disk_percent": psutil.disk_usage("/").percent,
#     }

# def send_metrics():
#     """Send system metrics to backend and print AI feedback."""
#     metrics = get_local_metrics()
#     print(f"\n🖥️ Sending metrics: {json.dumps(metrics, indent=2)}")

#     try:
#         response = requests.post(BACKEND_URL, json=metrics, timeout=5)
#         if response.status_code == 200:
#             data = response.json()
#             if "error" in data:
#                 print(f"⚠️ Server error: {data['error']}")
#             else:
#                 print("\n✅ Metrics successfully sent!")
#                 print(f"🔹 Source: {data.get('source', 'unknown')}")
#                 print(f"📊 Efficiency Score: {data.get('efficiency_score', 'N/A')}")
#                 print("💡 AI Tips:")
#                 for tip in data.get("ai_tips", []):
#                     print(f"   • {tip}")
#         else:
#             print(f"❌ Server responded with status: {response.status_code}")

#     except Exception as e:
#         print(f"❌ Error sending metrics: {e}")

# def main():
#     print("🔍 Local Agent started. Sending metrics every 10 seconds...")
#     while True:
#         send_metrics()
#         time.sleep(INTERVAL)

# if __name__ == "__main__":
#     main()


# import psutil
# import platform
# import requests
# import time
# import json

# # ----------------------------
# # CONFIGURATION
# # ----------------------------
# BACKEND_URL = "http://127.0.0.1:8000/api/metrics"  # change when deployed
# SEND_INTERVAL = 5  # seconds

# # ----------------------------
# # FUNCTION: Collect system metrics
# # ----------------------------
# def get_system_metrics():
#     try:
#         # Basic system info
#         system_info = {
#             "os": platform.system(),
#             "os_version": platform.version(),
#             "machine": platform.machine(),
#             "processor": platform.processor(),
#             "hostname": platform.node()
#         }

#         # CPU, Memory, Disk usage
#         cpu_percent = psutil.cpu_percent(interval=1)
#         memory = psutil.virtual_memory()
#         disk = psutil.disk_usage('/')

#         # Disk I/O stats
#         disk_io = psutil.disk_io_counters()
#         io_stats = {
#             "read_bytes": disk_io.read_bytes,
#             "write_bytes": disk_io.write_bytes
#         }

#         # Top 5 processes by CPU usage
#         processes = []
#         for proc in psutil.process_iter(['pid', 'name', 'cpu_percent', 'memory_percent']):
#             try:
#                 info = proc.info
#                 processes.append(info)
#             except (psutil.NoSuchProcess, psutil.AccessDenied):
#                 continue
#         processes = sorted(processes, key=lambda x: x['cpu_percent'], reverse=True)[:5]

#         # Combine all metrics
#         return {
#             "system_info": system_info,
#             "cpu": {"usage_percent": cpu_percent},
#             "memory": {"usage_percent": memory.percent},
#             "disk": {"usage_percent": disk.percent},
#             "io_stats": io_stats,
#             "top_processes": processes,
#         }

#     except Exception as e:
#         return {"error": str(e)}


# # ----------------------------
# # FUNCTION: Send metrics to backend
# # ----------------------------
# def send_metrics_to_backend(metrics):
#     try:
#         response = requests.post(BACKEND_URL, json=metrics, timeout=10)
#         if response.status_code == 200:
#             print("✅ Metrics sent successfully!")
#         else:
#             print(f"⚠️ Failed to send metrics. Status: {response.status_code}")
#     except Exception as e:
#         print(f"❌ Error sending metrics: {e}")


# # ----------------------------
# # MAIN LOOP
# # ----------------------------
# if __name__ == "__main__":
#     print("🚀 Local Agent started. Sending metrics every", SEND_INTERVAL, "seconds...")
#     while True:
#         data = get_system_metrics()
#         print(json.dumps(data, indent=2))  # for debugging
#         send_metrics_to_backend(data)
#         time.sleep(SEND_INTERVAL)



# import psutil
# import platform
# import requests
# import time
# import json

# # ----------------------------
# # CONFIGURATION
# # ----------------------------
# BACKEND_URL = "http://127.0.0.1:8000/api/metrics"  # change this to deployed URL later
# SEND_INTERVAL = 5  # seconds

# # ----------------------------
# # FUNCTION: Collect system metrics
# # ----------------------------
# def get_system_metrics():
#     try:
#         # Basic system info
#         system_info = {
#             "os": platform.system(),
#             "os_version": platform.version(),
#             "machine": platform.machine(),
#             "processor": platform.processor(),
#             "hostname": platform.node(),
#         }

#         # CPU, Memory, Disk usage
#         cpu_percent = psutil.cpu_percent(interval=1)
#         memory = psutil.virtual_memory()
#         disk = psutil.disk_usage("/")

#         # Disk I/O stats
#         disk_io = psutil.disk_io_counters()
#         io_stats = {
#             "read_bytes": disk_io.read_bytes,
#             "write_bytes": disk_io.write_bytes,
#         }

#         # Top 5 processes by CPU usage
#         processes = []
#         for proc in psutil.process_iter(["pid", "name", "cpu_percent", "memory_percent"]):
#             try:
#                 info = proc.info
#                 processes.append(info)
#             except (psutil.NoSuchProcess, psutil.AccessDenied):
#                 continue

#         processes = sorted(processes, key=lambda x: x["cpu_percent"], reverse=True)[:5]

#         # Combine all metrics
#         return {
#             "source": "local_agent",  # ✅ Identify as local agent
#             "system_info": system_info,
#             "cpu": {"usage_percent": cpu_percent},
#             "memory": {"usage_percent": memory.percent},
#             "disk": {"usage_percent": disk.percent},
#             "io_stats": io_stats,
#             "top_processes": processes,
#         }

#     except Exception as e:
#         return {"error": str(e)}


# # ----------------------------
# # FUNCTION: Send metrics to backend
# # ----------------------------
# def send_metrics_to_backend(metrics):
#     try:
#         response = requests.post(BACKEND_URL, json=metrics, timeout=10)
#         if response.status_code == 200:
#             data = response.json()
#             if data.get("agent_detected"):
#                 print("🟢 Local Agent detected by backend.")
#             print("✅ Metrics sent successfully!")
#         else:
#             print(f"⚠️ Failed to send metrics. Status: {response.status_code}")
#     except requests.exceptions.ConnectionError:
#         print("🔴 Backend not reachable. Retrying in a few seconds...")
#     except Exception as e:
#         print(f"❌ Error sending metrics: {e}")


# # ----------------------------
# # MAIN LOOP
# # ----------------------------
# if __name__ == "__main__":
#     print(f"🚀 Local Agent started. Sending metrics every {SEND_INTERVAL} seconds...")
#     while True:
#         data = get_system_metrics()
#         print(json.dumps(data, indent=2))  # for debugging
#         send_metrics_to_backend(data)
#         time.sleep(SEND_INTERVAL)



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
