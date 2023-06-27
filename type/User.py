from pydantic import BaseModel
from typing import Optional
from typing import List

class User(BaseModel):
    serial: str;
    name: str;
    email: str;
    password: str;
    profileImage: str;
    location: str;
    phoneNumber: str;
    isActive: bool;
    #rideHistory: any;

class Driver(BaseModel):
    serial: str;
    name: str;
    email: str;
    password: str;
    profileImage: str;
    location: str;
    phoneNumber: str;
    isActive: bool;
    #rideHistory: any;