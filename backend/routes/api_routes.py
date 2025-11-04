# from fastapi import APIRouter, Request, HTTPException
# from pydantic import BaseModel
# from typing import Any, Dict
# from services import mongo_service, ai_advisor

# router = APIRouter(tags=["Metrics API"])

# # Generic payload model that can accept any shape of metrics
# class MetricsPayload(BaseModel):
#     __root__: Dict[str, Any]

# @router.post("/metrics")
# async def receive_metrics(payload: MetricsPayload, request: Request):
#     data = payload.__root__

#     # Attach client info for tracking
#     data.setdefault("_meta", {})["client_ip"] = request.client.host if request.client else None
#     data["_meta"]["user_agent"] = request.headers.get("user-agent")

#     try:
#         # Save metrics to MongoDB
#         doc_id = await mongo_service.store_metrics(data)
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=f"Database error: {e}")

#     # Generate energy-saving or performance advice
#     advice = ai_advisor.generate_advice(data)

#     return {
#         "status": "success",
#         "id": str(doc_id),
#         "advice": advice
#     }

# # routes/api_routes.py
# from fastapi import APIRouter, Request
# from services import mongo_service, ai_advisor
# from services.system_monitor import get_system_metrics, get_simulated_frontend_metrics

# router = APIRouter(tags=["Metrics API"])

# @router.post("/metrics")
# async def receive_metrics(request: Request):
#     """
#     Receives system or browser metrics from frontend or local agent.
#     Stores them in MongoDB and returns AI advice + efficiency score.
#     """
#     try:
#         data = await request.json()
#         if not data:
#             return {"error": "No metrics received"}

#         # Save to database
#         mongo_service.insert_system_metrics(data)

#         # Generate AI advice
#         advice = ai_advisor.generate_advice(data)

#         return {
#             "status": "success",
#             "message": "Metrics received successfully",
#             "advice": advice
#         }

#     except Exception as e:
#         return {"error": str(e)}


# @router.get("/metrics/latest")
# async def get_latest_metrics():
#     """
#     Retrieve the most recent system metrics and AI advice.
#     """
#     latest_data = mongo_service.get_latest_system_metrics()
#     if not latest_data:
#         return {"error": "No metrics found"}

#     advice = ai_advisor.generate_advice(latest_data)
#     return {
#         "latest_metrics": latest_data,
#         "ai_advice": advice
#     }


# @router.get("/metrics/test")
# async def test_metrics():
#     """
#     For development/testing: generates local system + simulated browser metrics.
#     """
#     system_data = get_system_metrics()
#     browser_data = get_simulated_frontend_metrics()

#     combined = {
#         "system": system_data,
#         "browser": browser_data
#     }

#     # Store combined metrics
#     mongo_service.insert_system_metrics(combined)

#     advice = ai_advisor.generate_advice(system_data)

#     return {
#         "status": "test_data_generated",
#         "combined_metrics": combined,
#         "ai_advice": advice
#     }


# # routes/api_routes.py
# from fastapi import APIRouter, Request
# from services import mongo_service, ai_advisor
# from services.system_monitor import get_system_metrics, get_simulated_frontend_metrics

# router = APIRouter(tags=["Metrics API"])

# @router.post("/metrics")
# async def receive_metrics(request: Request):
#     """
#     Receives system or browser metrics from frontend or local agent.
#     Stores them in MongoDB and returns AI advice + efficiency score.
#     """
#     try:
#         data = await request.json()
#         if not data:
#             return {"error": "No metrics received"}

#         # Extract important metrics
#         battery_level = data.get("battery", {}).get("level", 0)
#         memory_used = data.get("memory", {}).get("usedJSHeapSize", 0)
#         memory_total = data.get("memory", {}).get("totalJSHeapSize", 1)
#         network_speed = data.get("network", {}).get("downlink", 0)

#         # Compute efficiency score
#         battery_score = battery_level * 100
#         memory_efficiency = max(0, 100 - ((memory_used / memory_total) * 100)) if memory_total else 0
#         network_score = min(100, network_speed * 10)
#         efficiency_score = round((battery_score + memory_efficiency + network_score) / 3, 2)

#         # Generate AI tips dynamically
#         ai_tips = []
#         if battery_level < 0.3:
#             ai_tips.append(" Consider plugging in your device to maintain stable performance.")
#         if memory_efficiency < 40:
#             ai_tips.append(" Close unused browser tabs or background apps to free up memory.")
#         if network_speed < 2:
#             ai_tips.append(" Your internet speed is slow — try switching to a faster network.")
#         if not ai_tips:
#             ai_tips.append(" Your system is performing efficiently! No action needed.")

#         # Save metrics to MongoDB
#         mongo_service.insert_system_metrics(data)

#         # AI model advice (optional)
#         advice = ai_advisor.generate_advice(data)

#         return {
#             "status": "success",
#             "efficiency_score": efficiency_score,
#             "ai_tips": ai_tips,
#             "ai_advice": advice,
#         }

#     except Exception as e:
#         return {"error": str(e)}


# @router.get("/metrics/latest")
# async def get_latest_metrics():
#     """Retrieve the most recent system metrics and AI advice."""
#     latest_data = mongo_service.get_latest_system_metrics()
#     if not latest_data:
#         return {"error": "No metrics found"}

#     advice = ai_advisor.generate_advice(latest_data)
#     return {
#         "latest_metrics": latest_data,
#         "ai_advice": advice
#     }


# @router.get("/metrics/test")
# async def test_metrics():
#     """For development/testing: generates local system + simulated browser metrics."""
#     system_data = get_system_metrics()
#     browser_data = get_simulated_frontend_metrics()

#     combined = {"system": system_data, "browser": browser_data}

#     mongo_service.insert_system_metrics(combined)

#     advice = ai_advisor.generate_advice(system_data)

#     return {
#         "status": "test_data_generated",
#         "combined_metrics": combined,
#         "ai_advice": advice
#     }



# from fastapi import APIRouter, Request
# from services import mongo_service, ai_advisor
# from services.system_monitor import get_system_metrics, get_simulated_frontend_metrics

# router = APIRouter(tags=["Metrics API"])

# @router.post("/metrics")
# async def receive_metrics(request: Request):
#     """
#     Receives metrics from:
#     - Browser (Phase 2): battery, memory, network
#     - Local Agent (Phase 3): cpu, ram, disk
#     Stores them in MongoDB and returns AI advice + efficiency score.
#     """
#     try:
#         data = await request.json()
#         if not data:
#             return {"error": "No metrics received"}

#         # --- Identify source of metrics ---
#         is_browser = "battery" in data and "network" in data
#         is_agent = "cpu_percent" in data or "ram_percent" in data or "disk_percent" in data

#         ai_tips = []
#         efficiency_score = 0

#         # --- Handle Browser Metrics (Phase 2) ---
#         if is_browser:
#             battery_level = data.get("battery", {}).get("level", 0)
#             memory_used = data.get("memory", {}).get("usedJSHeapSize", 0)
#             memory_total = data.get("memory", {}).get("totalJSHeapSize", 1)
#             network_speed = data.get("network", {}).get("downlink", 0)

#             battery_score = battery_level * 100
#             memory_efficiency = max(0, 100 - ((memory_used / memory_total) * 100)) if memory_total else 0
#             network_score = min(100, network_speed * 10)
#             efficiency_score = round((battery_score + memory_efficiency + network_score) / 3, 2)

#             if battery_level < 0.3:
#                 ai_tips.append("⚡ Plug in your device to maintain stable performance.")
#             if memory_efficiency < 40:
#                 ai_tips.append("🧠 Close unused tabs or background apps to free up memory.")
#             if network_speed < 2:
#                 ai_tips.append("🌐 Internet speed is low — consider switching to a better network.")
#             if not ai_tips:
#                 ai_tips.append("✅ Your browser performance looks great!")

#         # --- Handle Local Agent Metrics (Phase 3) ---
#         elif is_agent:
#             cpu = data.get("cpu_percent", 0)
#             ram = data.get("ram_percent", 0)
#             disk = data.get("disk_percent", 0)

#             cpu_score = max(0, 100 - cpu)
#             ram_score = max(0, 100 - ram)
#             disk_score = max(0, 100 - disk)
#             efficiency_score = round((cpu_score + ram_score + disk_score) / 3, 2)

#             if cpu > 85:
#                 ai_tips.append("🔥 CPU usage is high — close heavy apps or background tasks.")
#             if ram > 80:
#                 ai_tips.append("🧠 RAM is almost full — consider restarting unused processes.")
#             if disk > 90:
#                 ai_tips.append("💾 Disk is nearly full — clear some space for smoother performance.")
#             if not ai_tips:
#                 ai_tips.append("✅ Your system performance is stable and efficient!")

#         else:
#             return {"error": "Unknown metrics format received."}

#         # --- Save metrics and generate AI advice ---
#         mongo_service.insert_system_metrics(data)
#         ai_advice = ai_advisor.generate_advice(data)

#         return {
#             "status": "success",
#             "source": "browser" if is_browser else "local_agent",
#             "efficiency_score": efficiency_score,
#             "ai_tips": ai_tips,
#             "ai_advice": ai_advice,
#         }

#     except Exception as e:
#         return {"error": str(e)}


# # routes/api_routes.py
# from fastapi import APIRouter, Request
# from services import mongo_service, ai_advisor
# from services.system_monitor import get_system_metrics, get_simulated_frontend_metrics

# router = APIRouter(tags=["Metrics API"])

# @router.post("/metrics")
# async def receive_metrics(request: Request):
#     """
#     Receives metrics from frontend (browser) or local agent (Python).
#     Merges them if both types are present.
#     Stores them in MongoDB and returns AI advice + efficiency score.
#     """
#     try:
#         data = await request.json()
#         if not data:
#             return {"error": "No metrics received"}

#         # Detect data source
#         is_frontend_data = "battery" in data or "network" in data
#         is_local_agent_data = "cpu" in data or "system_info" in data

#         # Initialize placeholders
#         frontend_data = {}
#         local_data = {}

#         if is_frontend_data:
#             frontend_data = data

#         if is_local_agent_data:
#             local_data = data

#         # If both metrics arrive (merged view)
#         merged_data = {**frontend_data, **local_data}

#         # Calculate efficiency score only if frontend data exists
#         efficiency_score = None
#         ai_tips = []

#         if is_frontend_data:
#             battery_level = data.get("battery", {}).get("level", 0)
#             memory_used = data.get("memory", {}).get("usedJSHeapSize", 0)
#             memory_total = data.get("memory", {}).get("totalJSHeapSize", 1)
#             network_speed = data.get("network", {}).get("downlink", 0)

#             battery_score = battery_level * 100
#             memory_efficiency = max(0, 100 - ((memory_used / memory_total) * 100)) if memory_total else 0
#             network_score = min(100, network_speed * 10)
#             efficiency_score = round((battery_score + memory_efficiency + network_score) / 3, 2)

#             if battery_level < 0.3:
#                 ai_tips.append(" Consider plugging in your device to maintain stable performance.")
#             if memory_efficiency < 40:
#                 ai_tips.append(" Close unused browser tabs or background apps to free up memory.")
#             if network_speed < 2:
#                 ai_tips.append(" Your internet speed is slow — try switching to a faster network.")
#             if not ai_tips:
#                 ai_tips.append(" Your system is performing efficiently! No action needed.")

#         # Save everything to MongoDB
#         mongo_service.insert_system_metrics(merged_data)

#         # Ask AI model for dynamic advice
#         advice = ai_advisor.generate_advice(merged_data)

#         return {
#             "status": "success",
#             "source": "frontend" if is_frontend_data else "local_agent",
#             "efficiency_score": efficiency_score,
#             "ai_tips": ai_tips if ai_tips else None,
#             "ai_advice": advice,
#         }

#     except Exception as e:
#         return {"error": str(e)}


# @router.get("/metrics/latest")
# async def get_latest_metrics():
#     """Retrieve the most recent metrics and AI advice."""
#     latest_data = mongo_service.get_latest_system_metrics()
#     if not latest_data:
#         return {"error": "No metrics found"}

#     advice = ai_advisor.generate_advice(latest_data)
#     return {
#         "latest_metrics": latest_data,
#         "ai_advice": advice
#     }


# @router.get("/metrics/test")
# async def test_metrics():
#     """For development/testing: generates system + simulated browser metrics."""
#     system_data = get_system_metrics()
#     browser_data = get_simulated_frontend_metrics()
#     combined = {"system": system_data, "browser": browser_data}

#     mongo_service.insert_system_metrics(combined)
#     advice = ai_advisor.generate_advice(system_data)

#     return {
#         "status": "test_data_generated",
#         "combined_metrics": combined,
#         "ai_advice": advice
#     }



# routes/api_routes.py
from fastapi import APIRouter, Request
from services import mongo_service, ai_advisor
from services.system_monitor import get_system_metrics, get_simulated_frontend_metrics
from routes.system_routes import agent_status

router = APIRouter(tags=["Metrics API"])

@router.post("/metrics")
async def receive_metrics(request: Request):
    """
    Receives metrics from either:
    - Frontend (browser metrics)
    - Local Agent (system-level metrics)
    Stores them in MongoDB and returns AI advice + efficiency score if available.
    """
    try:
        data = await request.json()
        if not data:
            return {"error": "No metrics received"}

        # Identify the source
        source = data.get("source", "frontend")

        # Save all metrics to MongoDB (with source info)
        mongo_service.insert_system_metrics({**data, "source": source})

        # --- If it's from the local agent ---
        if source == "local_agent":
            agent_status["agent_detected"] = True
            agent_status["last_updated"] = data.get("timestamp")
            return {
                "status": "success",
                "message": "Local agent metrics received.",
                "agent_detected": True
            }

        # --- If it's from the frontend (browser) ---
        battery_level = data.get("battery", {}).get("level", 0)
        memory_used = data.get("memory", {}).get("usedJSHeapSize", 0)
        memory_total = data.get("memory", {}).get("totalJSHeapSize", 1)
        network_speed = data.get("network", {}).get("downlink", 0)

        # Compute efficiency score
        battery_score = battery_level * 100
        memory_efficiency = max(0, 100 - ((memory_used / memory_total) * 100)) if memory_total else 0
        network_score = min(100, network_speed * 10)
        efficiency_score = round((battery_score + memory_efficiency + network_score) / 3, 2)

        # Generate AI tips
        ai_tips = []
        if battery_level < 0.3:
            ai_tips.append("Consider plugging in your device to maintain stable performance.")
        if memory_efficiency < 40:
            ai_tips.append("Close unused browser tabs or background apps to free up memory.")
        if network_speed < 2:
            ai_tips.append("Your internet speed is slow — try switching to a faster network.")
        if not ai_tips:
            ai_tips.append("Your system is performing efficiently! No action needed.")

        # AI model advice
        advice = ai_advisor.generate_advice(data)

        return {
            "status": "success",
            "agent_detected": False,
            "efficiency_score": efficiency_score,
            "ai_tips": ai_tips,
            "ai_advice": advice,
        }

    except Exception as e:
        return {"error": str(e)}


@router.get("/metrics/latest")
async def get_latest_metrics():
    """Retrieve the most recent system metrics and AI advice."""
    latest_data = mongo_service.get_latest_system_metrics()
    if not latest_data:
        return {"error": "No metrics found"}

    source = latest_data.get("source", "frontend")
    advice = ai_advisor.generate_advice(latest_data)

    return {
        "latest_metrics": latest_data,
        "ai_advice": advice,
        "agent_detected": source == "local_agent"
    }


@router.get("/metrics/test")
async def test_metrics():
    """For development/testing: generates local system + simulated browser metrics."""
    system_data = get_system_metrics()
    browser_data = get_simulated_frontend_metrics()

    combined = {"system": system_data, "browser": browser_data}

    mongo_service.insert_system_metrics(combined)
    advice = ai_advisor.generate_advice(system_data)

    return {
        "status": "test_data_generated",
        "combined_metrics": combined,
        "ai_advice": advice
    }
