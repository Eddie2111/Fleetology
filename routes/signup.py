from fastapi import APIRouter
from datatype.UserModel import UserModel_Signup
from controller.SignupController import Signup
signup = APIRouter()

@signup.get("/signup")
async def root():
    return {
        "message": "Hello World",
        "method": "GET",
        "route": "/signup"
    }

@signup.post("/signup")
async def root(data: UserModel_Signup):
    print(Signup(data))
    return {
        "message": "Hello World",
        "method": "POST",
        "route": "/signup"
    }

# Add more routes as needed