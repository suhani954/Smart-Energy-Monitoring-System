# routes/process_routes.py
from fastapi import APIRouter
import psutil
from services.process_service import get_process_usage
from services.mongo_service import insert_process_metrics, get_latest_process_metrics

router = APIRouter(prefix="/processes", tags=["Processes"])

@router.get("/")
def get_processes():
    """Fetch current per-process resource usage (live data)."""
    processes = get_process_usage()
    return {"processes": processes}

@router.post("/log")
def log_processes():
    """Log process data into MongoDB safely."""
    try:
        # Initialize CPU percent for accurate readings
        for proc in psutil.process_iter(['cpu_percent']):
            proc.cpu_percent(interval=None)
        
        processes = get_process_usage()
        insert_process_metrics({"processes": processes})
        return {"message": "Process metrics logged successfully", "count": len(processes)}
    except Exception as e:
        return {"message": "Failed to log process metrics", "error": str(e)}

@router.get("/latest")
def get_latest_logged_processes():
    """Fetch the most recently logged process data from MongoDB."""
    latest = get_latest_process_metrics()
    
    if not latest or "processes" not in latest:
        return {
            "message": "No logged process data found. Please call POST /processes/log first."
        }
    
    return {
        "message": "Latest logged process data fetched successfully",
        "timestamp": latest.get("timestamp"),
        "processes": latest["processes"],
        "count": len(latest["processes"]),
    }

# -------------------------------
# Frontend-specific endpoint
# -------------------------------
@router.get("/frontend")
def get_processes_for_frontend():
    """
    Returns process data for the React frontend.
    Fetches latest logged data from MongoDB, or live data if none exists.
    Includes CPU %, Memory %, and optionally Efficiency (can be calculated).
    """
    latest = get_latest_process_metrics()
    
    if latest and "processes" in latest:
        processes = latest["processes"]
    else:
        # fallback to live data if no logged data exists
        processes = get_process_usage()

    # Optionally, calculate Efficiency or any other metrics for frontend cards
    for proc in processes:
        cpu = proc.get("cpu_percent", 0)
        mem = proc.get("memory_percent", 0)
        # Example simple efficiency metric
        proc["efficiency"] = max(0, 100 - (cpu + mem) // 2)

    return {"processes": processes, "count": len(processes)}
