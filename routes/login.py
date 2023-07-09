from fastapi import APIRouter
from datatype.UserModel import UserModel_Login
from controller.LoginController import LoginController

login = APIRouter()

@login.get("/login")
async def root():
    return {
        "message": "Hello World",
        "method": "GET",
        "route": "/login"
    }

@login.post("/login")
async def root(data: UserModel_Login):
    print(LoginController(data))
    return {
        "message": "Hello World",
        "method": "POST",
        "route": "/login"
    }

# Add more routes as needed