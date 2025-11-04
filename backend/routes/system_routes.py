# # routes/system_routes.py
# from fastapi import APIRouter
# from services.system_monitor import get_system_metrics
# from services.mongo_service import insert_system_metrics

# router = APIRouter(prefix="/system", tags=["System"])

# # -------------------------------------------------
# # ✅ GET /system/metrics → Real-time system stats
# # -------------------------------------------------
# @router.get("/metrics")
# def get_metrics():
#     """Return real-time system resource usage."""
#     data = get_system_metrics()
#     return data

# # -------------------------------------------------
# # ✅ POST /system/log → Save system stats in MongoDB
# # -------------------------------------------------
# @router.post("/log")
# def log_system_metrics():
#     """Log system metrics into MongoDB."""
#     data = get_system_metrics()
#     insert_system_metrics(data)
#     return {"message": "System metrics logged successfully", "data": data}


# # routes/system_routes.py
# from fastapi import APIRouter, Request
# from services.system_monitor import get_system_metrics
# from services.mongo_service import insert_system_metrics
# from datetime import datetime

# router = APIRouter(prefix="/system", tags=["System"])

# # -------------------------------------------------
# # ✅ GLOBAL STATE for Local Agent Detection
# # -------------------------------------------------
# agent_status = {"agent_detected": False, "last_updated": None}

# # -------------------------------------------------
# # ✅ GET /system/metrics → Real-time system stats
# # -------------------------------------------------
# @router.get("/metrics")
# def get_metrics():
#     """Return real-time system resource usage."""
#     data = get_system_metrics()
#     return data

# # -------------------------------------------------
# # ✅ POST /system/log → Save system stats in MongoDB
# # -------------------------------------------------
# @router.post("/log")
# def log_system_metrics():
#     """Log system metrics into MongoDB."""
#     data = get_system_metrics()
#     insert_system_metrics(data)
#     return {"message": "System metrics logged successfully", "data": data}

# # -------------------------------------------------
# # ✅ POST /system/update_agent → Update agent connection status
# # -------------------------------------------------
# @router.post("/update_agent")
# async def update_agent_status(request: Request):
#     """Updates local agent connection status when metrics arrive."""
#     data = await request.json()
#     if data.get("source") == "local_agent":
#         agent_status["agent_detected"] = True
#         agent_status["last_updated"] = data.get("timestamp", datetime.now().isoformat())
#     return {"message": "Agent status updated", "agent_detected": agent_status["agent_detected"]}

# # -------------------------------------------------
# # ✅ GET /system/log → Check current agent status
# # -------------------------------------------------
# @router.get("/log")
# def get_agent_status():
#     """Return whether the local agent is active."""
#     return agent_status


# routes/system_routes.py
from fastapi import APIRouter, Request
from services.system_monitor import get_system_metrics
from services.mongo_service import insert_system_metrics
from datetime import datetime
import threading
import time

router = APIRouter(prefix="/system", tags=["System"])

# -------------------------------------------------
# ✅ GLOBAL STATE for Local Agent Detection
# -------------------------------------------------
agent_status = {
    "agent_detected": False,
    "last_updated": None,
}

# -------------------------------------------------
# ⏱️ BACKGROUND THREAD – Check agent timeout
# -------------------------------------------------
def monitor_agent_connection(timeout=30):
    """Marks agent as disconnected if no update in 'timeout' seconds."""
    while True:
        if agent_status["agent_detected"] and agent_status["last_updated"]:
            last_seen = datetime.fromisoformat(agent_status["last_updated"])
            elapsed = (datetime.now() - last_seen).total_seconds()
            if elapsed > timeout:
                agent_status["agent_detected"] = False
                print("🔴 Local agent timed out (no metrics for", timeout, "seconds).")
        time.sleep(5)

# Start background thread once
threading.Thread(target=monitor_agent_connection, daemon=True).start()

# -------------------------------------------------
# ✅ GET /system/metrics → Real-time system stats
# -------------------------------------------------
@router.get("/metrics")
def get_metrics():
    """Return real-time system resource usage."""
    data = get_system_metrics()
    return data

# -------------------------------------------------
# ✅ POST /system/log → Save system stats in MongoDB
# -------------------------------------------------
@router.post("/log")
def log_system_metrics():
    """Log system metrics into MongoDB."""
    data = get_system_metrics()
    insert_system_metrics(data)
    return {"message": "System metrics logged successfully", "data": data}

# -------------------------------------------------
# ✅ POST /system/update_agent → Update agent connection status
# -------------------------------------------------
@router.post("/update_agent")
async def update_agent_status(request: Request):
    """Updates local agent connection status when metrics arrive."""
    data = await request.json()
    if data.get("source") == "local_agent":
        agent_status["agent_detected"] = True
        agent_status["last_updated"] = data.get("timestamp", datetime.now().isoformat())
    return {"message": "Agent status updated", "agent_detected": agent_status["agent_detected"]}

# -------------------------------------------------
# ✅ GET /system/log → Check current agent status
# -------------------------------------------------
@router.get("/log")
def get_agent_status():
    """Return whether the local agent is active."""
    return agent_status
