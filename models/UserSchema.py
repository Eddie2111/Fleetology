from typing import Optional
from pydantic import BaseModel, EmailStr


class User(BaseModel):
    # insert serial from controller systems
    serial: str;
    name: str;
    email: EmailStr;
    password: str;
    profileImage: str;
    location: str;
    phoneNumber: str;
    isActive: bool;
    rideHistory: list | None;

    class Config:
        schema_extra = {
            "example": {
                "name": "John Doe",
                "email": "test@gmail.com",
                "password": "test",
                "profileImage": "https://www.google.com",
                "location": "Lagos",
                "phoneNumber": "09000000000",
                "isActive": True,
                "rideHistory": []
            }
        }

class UpdateUserModel(BaseModel):
    serial: Optional[str]
    name: Optional[str]
    email: Optional[EmailStr]
    password: Optional[str]
    profileImage: Optional[str]
    location: Optional[str]
    phoneNumber: Optional[str]
    isActive: Optional[bool]
    rideHistory: Optional[list]

    class Config:
        schema_extra = {
            "example": {
                "name": "John Doe",
                "email": "test@gmail.com",
                "password": "test",
                "profileImage": "https://www.google.com",
                "location": "Lagos",
                "phoneNumber": "09000000000",
                "isActive": True,
                "rideHistory": []
            }
        }

def User_Creation_Response(data, message):
    return {
        "data": [data],
        "code": 200,
        "message": message,
    }


def User_Creation_Error_Response(error, code, message):
    return {"error": error, "code": code, "message": message}
