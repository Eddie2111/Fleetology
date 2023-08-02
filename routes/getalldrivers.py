from fastapi import APIRouter, Response
from model.mysql import cursor
#from controller.GetAllManagers import GetAllManagers

GetAllDriver = APIRouter()

def GetAllDrivers():
    try:
        resultant = cursor.execute("SELECT username,email,user_type FROM Users WHERE user_type = 'driver'")
        # multiple data has to be returned
        result = cursor.fetchall()
        print(result)
        return {
            "result": result
        }
    except Exception as e:
        return {
            "error": str(e)
        }

@GetAllDriver.get("/getalldriver")
async def root():
    try:
        print(GetAllDrivers());
        return {
        "data": GetAllDrivers(),
        "message": "Hello World",
        "method": "GET",
        "route": "/login"
    }
    except Exception as e:
        print(e)
        return {
        "data": 'token',
        "message": "Hello World",
        "method": "GET",
        "route": "/login"
        }



# Add more routes as needed