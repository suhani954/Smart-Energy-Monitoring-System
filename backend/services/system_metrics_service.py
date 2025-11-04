# services/system_metrics_service.py

from services.mongo_service import get_latest_process_metrics

def get_latest_metrics():
    """
    Fetch latest system metrics from MongoDB (or any monitoring source).
    
    Returns:
        dict: {"cpu_usage": float, "memory_usage": float, "temperature": float}
    """
    metrics = get_latest_process_metrics()
    
    # If metrics not found, return defaults
    if not metrics:
        return {"cpu_usage": 50, "memory_usage": 50, "temperature": 35}
    
    return {
        "cpu_usage": metrics.get("cpu", 50),
        "memory_usage": metrics.get("memory", 50),
        "temperature": metrics.get("temperature", 35)
    }
