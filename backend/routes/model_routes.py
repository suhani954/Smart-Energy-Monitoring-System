# routes/model_routes.py
import psutil
from fastapi import APIRouter
from services.model_manager import ModelManager
from services.mongo_service import get_latest_process_metrics
from services.system_metrics_service import get_latest_metrics
from services.ai_advisor import generate_advice
from ml_models.battery_predictor import predict_battery_life, get_system_metrics
from ml_models.high_consumer_model import detect_high_consumers

router = APIRouter(prefix="/predict", tags=["Predictions"])
manager = ModelManager()


# -----------------------
# Model Management
# -----------------------
@router.get("/models")
def get_all_models():
    """Get a list of available AI models."""
    return manager.list_models()


@router.get("/models/{model_name}")
def get_model_details(model_name: str):
    """Get details of a specific AI model."""
    return manager.get_model_info(model_name)


# -----------------------
# Battery Life Prediction
# -----------------------
@router.get("/battery")
def battery_status():
    """
    Returns predicted and actual battery percentage along with charging status.
    Cross-platform safe version. No health advice.
    """
    try:
        # Get system metrics (CPU, memory, temperature)
        system_metrics = get_system_metrics()

        # Predict battery life & detect charging status
        battery_info = predict_battery_life(system_metrics)

        return battery_info
    except Exception as e:
        # Safe fallback to prevent internal server error
        return {
            "predicted_battery_life": None,
            "actual_battery_level": None,
            "charging_status": "Unknown",
            "error": str(e)
        }

# -----------------------
# High Energy Consumers
# -----------------------
@router.get("/high_consumers")
def high_consumers():
    """
    Detect top high-energy-consuming processes in real-time.
    """
    try:
        # Fetch live process metrics
        processes = []
        for proc in psutil.process_iter(['name', 'cpu_percent', 'memory_percent']):
            info = proc.info
            processes.append(info)

        # Filter high consumers
        result = detect_high_consumers(processes)

        # Return result
        return {
            "high_consumers": result,
            "count": len(result)
        }

    except Exception as e:
        return {"error": str(e), "message": "Could not fetch live process metrics"}



# -----------------------
# AI Energy Advisor
# -----------------------
@router.get("/ai/advice")
def ai_energy_advice():
    """Provide energy-saving tips and efficiency score."""
    metrics = get_latest_metrics()
    advice = generate_advice(metrics)
    return advice


@router.get("/ai/summary")
def ai_summary():
    """Provide full summary: system metrics, battery prediction, high consumers, and advisory tips."""
    metrics = get_latest_metrics()
    battery = predict_battery_life(metrics)
    advice = generate_advice(metrics)
    high_consumers_list = []

    # Try to get high consumers but don’t break if no data
    latest = get_latest_process_metrics()
    if latest and "processes" in latest and latest["processes"]:
        try:
            high_consumers_list = detect_high_consumers(latest["processes"])
        except Exception:
            high_consumers_list = []

    return {
        "system_metrics": metrics,
        "battery_prediction": battery,
        "advisory_tips": advice["tips"],
        "efficiency_score": advice["efficiency_score"],
        "overall_efficiency": advice["overall_efficiency"],
        "high_consumers": high_consumers_list,
        "high_consumers_count": len(high_consumers_list)
    }
