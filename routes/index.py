from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def root():
    return {
        "message": "Hello World",
        "method": "GET",
        "route": "/index"
    }

@router.post("/")
async def root():
    return {
        "message": "Hello World",
        "method": "POST",
        "route": "/index"
    }

# Add more routes as needed