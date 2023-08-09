from fastapi import APIRouter

auth = APIRouter()

@auth.get("/auth")
async def root():
    return {
        "message": "Hello World",
        "method": "GET",
        "route": "/auth"
    }

@auth.post("/auth")
async def root():
    return {
        "message": "Hello World",
        "method": "POST",
        "route": "/auth"
    }

# Add more routes as needed




