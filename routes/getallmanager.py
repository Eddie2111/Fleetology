from fastapi import APIRouter, Response
from model.mysql import cursor
#from controller.GetAllManagers import GetAllManagers

GetAllManager = APIRouter()

def GetAllManagers():
    try:
        resultant = cursor.execute("SELECT username,email,user_type FROM Users WHERE user_type = 'manager'")
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

@GetAllManager.get("/getallmanager")
async def root():
    try:
        print(GetAllManagers());
        return {
        "data": GetAllManagers(),
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