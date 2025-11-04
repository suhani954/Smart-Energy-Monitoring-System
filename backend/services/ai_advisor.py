# # services/ai_advisor.py

# from ml_models.battery_predictor import predict_battery_life

# def generate_advice(system_metrics):
#     """
#     Generate energy-saving tips and efficiency score.
#     """
#     tips = []
    
#     cpu = system_metrics.get("cpu_usage", 50)
#     memory = system_metrics.get("memory_usage", 50)
    
#     # CPU advice
#     if cpu > 80:
#         tips.append(f"CPU usage is high ({cpu}%). Close heavy background tasks.")
#     elif cpu > 50:
#         tips.append(f"CPU usage is moderate ({cpu}%). Monitor running apps.")
#     else:
#         tips.append(f"CPU usage is low ({cpu}%). System is performing well.")

#     # Memory advice
#     if memory > 80:
#         tips.append(f"Memory usage is high ({memory}%). Consider closing apps.")
#     elif memory > 50:
#         tips.append(f"Memory usage is moderate ({memory}%). Keep active apps minimal.")
#     else:
#         tips.append(f"Memory usage is low ({memory}%). Good efficiency.")

#     # Efficiency score calculation (0-100)
#     score = max(0, 100 - (cpu*0.4 + memory*0.3))
    
#     if score > 80:
#         rating = "Excellent"
#     elif score > 60:
#         rating = "Good"
#     elif score > 40:
#         rating = "Average"
#     else:
#         rating = "Poor"
    
#     return {
#         "tips": tips,
#         "overall_efficiency": rating,
#         "efficiency_score": round(score, 2)
#     }

# services/ai_advisor.py

from ml_models.battery_predictor import predict_battery_life

def generate_advice(system_metrics):
    """
    Generate energy-saving tips and efficiency score for backend system metrics.
    """
    tips = []
    
    cpu = system_metrics.get("cpu_usage", 50)
    memory = system_metrics.get("memory_usage", 50)
    
    # CPU advice
    if cpu > 80:
        tips.append(f"CPU usage is high ({cpu}%). Close heavy background tasks.")
    elif cpu > 50:
        tips.append(f"CPU usage is moderate ({cpu}%). Monitor running apps.")
    else:
        tips.append(f"CPU usage is low ({cpu}%). System is performing well.")

    # Memory advice
    if memory > 80:
        tips.append(f"Memory usage is high ({memory}%). Consider closing apps.")
    elif memory > 50:
        tips.append(f"Memory usage is moderate ({memory}%). Keep active apps minimal.")
    else:
        tips.append(f"Memory usage is low ({memory}%). Good efficiency.")

    # Efficiency score calculation (0-100)
    score = max(0, 100 - (cpu * 0.4 + memory * 0.3))
    
    if score > 80:
        rating = "Excellent"
    elif score > 60:
        rating = "Good"
    elif score > 40:
        rating = "Average"
    else:
        rating = "Poor"
    
    return {
        "tips": tips,
        "overall_efficiency": rating,
        "efficiency_score": round(score, 2)
    }


# ---------------- New Section for Frontend (Browser/Device) Metrics ---------------- #

def generate_frontend_advice(frontend_metrics: dict):
    """
    Generate tips and insights based on client-side (browser/device) metrics.
    """
    tips = []
    battery = frontend_metrics.get("battery_level")
    charging = frontend_metrics.get("is_charging")
    network = frontend_metrics.get("network_type")
    online = frontend_metrics.get("is_online")
    memory = frontend_metrics.get("device_memory")
    cores = frontend_metrics.get("cpu_cores")

    # Battery advice
    if battery is not None:
        if battery < 20 and not charging:
            tips.append("Battery is low. Connect your device to a charger soon.")
        elif battery < 50:
            tips.append("Battery is moderate. Avoid running heavy apps to conserve energy.")
        elif charging:
            tips.append("Device is charging. Consider enabling battery saver once unplugged.")
        else:
            tips.append("Battery level is good.")

    # Network advice
    if network:
        if network.lower() in ["slow-2g", "2g"]:
            tips.append("Your network connection is slow. Consider switching to a faster network.")
        elif network.lower() in ["3g", "4g"]:
            tips.append("Your network is moderate. Avoid large downloads while multitasking.")
        elif network.lower() == "5g" or "wifi" in network.lower():
            tips.append("Excellent network connectivity.")

    # Online/Offline status
    if online is False:
        tips.append("You are offline. Some features may not work properly.")

    # Device performance advice
    if memory is not None and memory < 4:
        tips.append("Your device has low memory. Close unused tabs or apps for smoother performance.")
    if cores is not None and cores <= 2:
        tips.append("Device has limited CPU cores. Avoid multitasking with heavy apps.")

    # Efficiency score estimation
    base_score = 100
    if battery is not None:
        base_score -= (100 - battery) * 0.3
    if network and network.lower() in ["slow-2g", "2g"]:
        base_score -= 15
    if memory and memory < 4:
        base_score -= 10

    efficiency_score = max(0, round(base_score, 2))
    rating = (
        "Excellent" if efficiency_score > 80 else
        "Good" if efficiency_score > 60 else
        "Average" if efficiency_score > 40 else
        "Poor"
    )

    return {
        "tips": tips,
        "overall_efficiency": rating,
        "efficiency_score": efficiency_score
    }
