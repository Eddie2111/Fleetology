from fastapi import APIRouter, Response
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
async def root(data: UserModel_Login, response: Response):
    token = LoginController(data)
    response.set_cookie(
        key="session", 
        value=token,
        httponly=True,
        max_age=1800,
        expires=1800
    )
    return {
        "data": token,
        "method": "POST",
        "route": "/login"
    }

# Add more routes as needed
