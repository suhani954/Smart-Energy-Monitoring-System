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
