# # main.py
# from fastapi import FastAPI
# from fastapi.middleware.cors import CORSMiddleware
# from routes import  process_routes, system_routes, model_routes

# app = FastAPI(title="AI Energy Advisor Backend")

# # Allow frontend requests
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],  # You can restrict later for security
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # Register routers
# app.include_router(process_routes.router)
# app.include_router(system_routes.router)
# app.include_router(model_routes.router)

# @app.get("/")
# def root():
#     return {"message": "AI Energy Advisor Backend is Running"}


# # main.py
# from fastapi import FastAPI
# from fastapi.middleware.cors import CORSMiddleware
# from routes import process_routes, system_routes, model_routes, api_routes

# app = FastAPI(title="AI Energy Advisor Backend")

# # Allow frontend requests
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],  # You can restrict later for security
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # Register routers
# app.include_router(process_routes.router)
# app.include_router(system_routes.router)
# app.include_router(model_routes.router)
# app.include_router(api_routes.router, prefix="/api")

# @app.get("/")
# def root():
#     return {"message": "AI Energy Advisor Backend is Running"}



# # main.py
# from fastapi import FastAPI, Request
# from fastapi.middleware.cors import CORSMiddleware
# from routes import process_routes, system_routes, model_routes, api_routes
# import random

# app = FastAPI(title="AI Energy Advisor Backend")

# # Allow frontend requests
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],  # You can restrict later for security
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # Register routers
# app.include_router(process_routes.router)
# app.include_router(system_routes.router)
# app.include_router(model_routes.router)
# app.include_router(api_routes.router, prefix="/api")

# @app.get("/")
# def root():
#     return {"message": "AI Energy Advisor Backend is Running"}

# # ------------------- 🌐 Phase 2: Browser-Based Metrics Endpoint -------------------

# @app.post("/api/metrics")
# async def collect_user_metrics(request: Request):
#     """Receives device metrics from frontend and returns AI tips + efficiency score."""
#     data = await request.json()

#     battery_level = data.get("battery", {}).get("level", 0)
#     memory_used = data.get("memory", {}).get("usedJSHeapSize", 0)
#     memory_total = data.get("memory", {}).get("totalJSHeapSize", 1)
#     network_speed = data.get("network", {}).get("downlink", 0)

#     # Compute efficiency score (basic demo logic)
#     battery_score = battery_level * 100
#     memory_efficiency = max(0, 100 - ((memory_used / memory_total) * 100)) if memory_total else 0
#     network_score = min(100, network_speed * 10)
#     efficiency_score = round((battery_score + memory_efficiency + network_score) / 3, 2)

#     # Generate AI tips dynamically
#     ai_tips = []

#     if battery_level < 0.3:
#         ai_tips.append("⚡ Consider plugging in your device to maintain stable performance.")
#     if memory_efficiency < 40:
#         ai_tips.append("🧠 Close unused browser tabs or background apps to free up memory.")
#     if network_speed < 2:
#         ai_tips.append("🌐 Your internet speed is slow — try switching to a faster network.")
#     if not ai_tips:
#         ai_tips.append("✅ Your system is performing efficiently! No action needed.")

#     return {
#         "status": "success",
#         "efficiency_score": efficiency_score,
#         "ai_tips": ai_tips,
#         "received_metrics": data
#     }


# # main.py
# from fastapi import FastAPI
# from fastapi.middleware.cors import CORSMiddleware
# from routes import process_routes, system_routes, model_routes, api_routes

# app = FastAPI(title="AI Energy Advisor Backend")

# # Allow frontend requests
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],  # You can restrict later for security
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # Register routers
# app.include_router(process_routes.router)
# app.include_router(system_routes.router)
# app.include_router(model_routes.router)
# app.include_router(api_routes.router, prefix="/api")

# @app.get("/")
# def root():
#     return {"message": "AI Energy Advisor Backend is Running"}



# main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import process_routes, system_routes, model_routes, api_routes
from fastapi.responses import JSONResponse
import time

app = FastAPI(title="AI Energy Advisor Backend")

# ----------------------------
# CORS Configuration
# ----------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Restrict later if needed
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ----------------------------
# Local Agent Tracking Variables
# ----------------------------
last_agent_ping_time = 0
AGENT_TIMEOUT = 20  # seconds before marking agent as "not detected"

# ----------------------------
# Routes
# ----------------------------
app.include_router(process_routes.router)
app.include_router(system_routes.router)
app.include_router(model_routes.router)
app.include_router(api_routes.router, prefix="/api")

# ----------------------------
# Root Endpoint
# ----------------------------
@app.get("/")
def root():
    return {"message": "AI Energy Advisor Backend is Running"}

# ----------------------------
# NEW: Endpoint to check local agent status
# ----------------------------
@app.get("/system/log")
def check_agent_status():
    """Frontend checks this to see if local agent is running."""
    global last_agent_ping_time
    now = time.time()
    agent_detected = (now - last_agent_ping_time) < AGENT_TIMEOUT
    return JSONResponse({"agent_detected": agent_detected})

# ----------------------------
# UPDATED: Endpoint to receive metrics from local agent
# ----------------------------
from fastapi import Request

@app.post("/api/metrics")
async def receive_metrics(request: Request):
    """Receives metrics from browser or local agent."""
    global last_agent_ping_time
    data = await request.json()
    source = data.get("source", "browser")

    if source == "local_agent":
        last_agent_ping_time = time.time()  # mark agent as active

    # (Optional) Log metrics for debugging
    # print(f"📩 Received metrics from {source}: {data}")

    # Simulate AI response for now
    return JSONResponse({
        "message": "Metrics received successfully",
        "efficiency_score": 87 if source == "local_agent" else None,
        "ai_tips": ["Close unused background apps", "Avoid running heavy tasks together"] if source == "local_agent" else [],
        "agent_detected": source == "local_agent"
    })
