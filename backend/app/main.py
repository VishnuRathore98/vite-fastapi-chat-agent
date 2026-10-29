from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .routers.auth_routes import auth_router

app = FastAPI(root_path="/api/v1")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)


@app.get("/")
def root():
    return {"message": "Welcome to the fastapi vite chat-agent"}
