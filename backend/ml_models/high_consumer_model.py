import psutil
from fastapi import APIRouter

router = APIRouter(prefix="/predict", tags=["Predictions"])

def detect_high_consumers(processes, cpu_threshold=10, mem_threshold=5):
    """
    Returns processes exceeding resource thresholds.
    Handles missing keys safely.
    """
    high = []
    for p in processes:
        cpu = p.get("cpu_percent", 0)
        mem = p.get("memory_percent", 0)
        if cpu >= cpu_threshold or mem >= mem_threshold:
            high.append(p)
    return high


