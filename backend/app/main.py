from fastapi import FastAPI

from .routers.auth_routes import auth_router

app = FastAPI(root_path="/api/v1")

app.include_router(auth_router)


@app.get("/")
def root():
    return {"message": "Welcome to the fastapi vite chat-agent"}
