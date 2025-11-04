# services/model_manager.py

class ModelManager:
    def __init__(self):
        # You can later add APIs or local models dynamically
        self.models = {
            "openai_gpt": {
                "name": "OpenAI GPT",
                "description": "Advanced general-purpose AI model by OpenAI.",
                "type": "API-based",
                "status": "available"
            },
            "local_llama": {
                "name": "Local LLaMA2",
                "description": "Offline open-source model running locally.",
                "type": "Local",
                "status": "coming soon"
            }
        }

    def list_models(self):
        """Return all available models."""
        return self.models

    def get_model_info(self, model_key: str):
        """Return specific model details."""
        return self.models.get(model_key, {"error": "Model not found"})
