# creating a data type for fastapi to recieve post request
from pydantic import BaseModel

class UserModel_Login(BaseModel):
    email: str
    password: str

class UserModel_Signup(BaseModel):
    serial: str
    email: str
    password: str
    user_type: str