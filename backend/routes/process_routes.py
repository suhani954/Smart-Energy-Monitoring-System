# routes/process_routes.py
from fastapi import APIRouter
from services.mongo_service import insert_process_metrics, get_latest_process_metrics
from services.process_service import get_process_usage
import psutil

router = APIRouter(prefix="/processes", tags=["Processes"])

# ---------------------------------------------------
# Log current process data into MongoDB
# ---------------------------------------------------
@router.post("/log")
def log_processes():
    """Log current process data into MongoDB."""
    try:
        # Initialize CPU usage for accurate readings
        for proc in psutil.process_iter(['cpu_percent']):
            proc.cpu_percent(interval=None)

        processes = get_process_usage()
        insert_process_metrics({"processes": processes})
        return {"message": "Process metrics logged successfully", "count": len(processes)}
    except Exception as e:
        return {"message": "Failed to log process metrics", "error": str(e)}

# ---------------------------------------------------
# Get the most recently logged process data
# ---------------------------------------------------
@router.get("/latest")
def get_latest_logged_processes():
    """Fetch the latest logged process data from MongoDB."""
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

# ---------------------------------------------------
# Frontend endpoint (ONLY show logged MongoDB data)
# ---------------------------------------------------
@router.get("/frontend")
def get_processes_for_frontend():
    """
    Returns the latest logged process data for the React frontend.
    Only fetches data from MongoDB (no live fallback).
    """
    latest = get_latest_process_metrics()

    if not latest or "processes" not in latest:
        return {
            "message": "No logged data found in MongoDB. Please call POST /processes/log first.",
            "processes": [],
            "count": 0
        }

    processes = latest["processes"]

    # Calculate optional efficiency metric for frontend
    for proc in processes:
        cpu = proc.get("cpu_percent", 0)
        mem = proc.get("memory_percent", 0)
        proc["efficiency"] = max(0, 100 - (cpu + mem) // 2)

    return {
        "message": "Latest logged process data fetched for frontend",
        "timestamp": latest.get("timestamp"),
        "processes": processes,
        "count": len(processes),
    }

@router.get("/agent-status")
def agent_status():
    """Simple check to verify if the local agent (backend) is running."""
    return {"agent_connected": True, "message": "Local Agent is active and connected."}