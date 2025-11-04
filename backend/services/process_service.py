# services/process_service.py
import psutil

def get_process_usage(limit=12):
    process_list = []
    for proc in psutil.process_iter(['name', 'cpu_percent', 'memory_percent']):
        try:
            info = proc.info
            if info['cpu_percent'] is not None and info['memory_percent'] is not None:
                process_list.append(info)
        except (psutil.NoSuchProcess, psutil.AccessDenied):
            continue

    # Sort by CPU usage (top processes)
    process_list.sort(key=lambda p: p['cpu_percent'], reverse=True)
    return process_list[:limit]
