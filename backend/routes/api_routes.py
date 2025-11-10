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
