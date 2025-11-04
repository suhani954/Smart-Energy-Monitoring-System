# # services/mongo_service.py
# from pymongo import MongoClient
# from datetime import datetime

# # Connect to local MongoDB
# client = MongoClient("mongodb://localhost:27017/")
# db = client["energy_advisor_db"]

# # Collections
# system_collection = db["system_metrics"]
# process_collection = db["process_metrics"]

# def insert_system_metrics(data: dict):
#     data["timestamp"] = datetime.now().isoformat()
#     system_collection.insert_one(data)

# def insert_process_metrics(data: dict):
#     data["timestamp"] = datetime.now().isoformat()
#     process_collection.insert_one(data)

# def get_latest_system_metrics():
#     return system_collection.find_one(sort=[("_id", -1)])

# def get_latest_process_metrics():
#     return process_collection.find_one(sort=[("_id", -1)])


# services/mongo_service.py
from pymongo import MongoClient
from datetime import datetime

# Connect to local MongoDB
client = MongoClient("mongodb://localhost:27017/")
db = client["energy_advisor_db"]

# Collections
system_collection = db["system_metrics"]
process_collection = db["process_metrics"]
frontend_collection = db["frontend_metrics"]  # NEW COLLECTION for browser/device metrics

# ---------------- Existing Functions ---------------- #

def insert_system_metrics(data: dict):
    data["timestamp"] = datetime.now().isoformat()
    system_collection.insert_one(data)

def insert_process_metrics(data: dict):
    data["timestamp"] = datetime.now().isoformat()
    process_collection.insert_one(data)

def get_latest_system_metrics():
    return system_collection.find_one(sort=[("_id", -1)])

def get_latest_process_metrics():
    return process_collection.find_one(sort=[("_id", -1)])


# ---------------- New Functions for Frontend Metrics ---------------- #

def insert_frontend_metrics(data: dict):
    """Insert metrics sent from client browsers."""
    data["timestamp"] = datetime.now().isoformat()
    frontend_collection.insert_one(data)

def get_latest_frontend_metrics():
    """Retrieve the most recent browser metrics."""
    return frontend_collection.find_one(sort=[("_id", -1)])

def get_all_frontend_metrics(limit: int = 50):
    """Fetch recent frontend metrics with limit (default 50)."""
    return list(frontend_collection.find().sort("_id", -1).limit(limit))
