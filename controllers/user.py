import secrets
import string
from validators.UserValidate import validate_userData
#from lib.mongo import create_user

def generate_random_user_id(length: int)-> str:
    characters = string.ascii_letters + string.digits
    user_id = ''.join(secrets.choice(characters) for _ in range(length))
    return user_id

def CreateUser(data)-> dict:
    dataset : dict = {
        "serial": generate_random_user_id(16),
        "name": data.name,
        "email": data.email,
        "password": data.password,
        "profileImage": data.profileImage,
        "location": data.location,
        "phoneNumber": data.phoneNumber,
        "isActive": data.isActive
    }
    # create validation function here
    validated: dict|bool = validate_userData(dataset)

    if validated:
        # if validation : true → insert data → mongo
        #create_user(dataset)
        
        return {
        "status": 200,
        "message": "User created successfully",
        "data": {
            "serial": dataset["serial"],
            "name": data.name,
            "email": data.email,
            "type": "user"
            }
        }
    else:
        return {
            "status": 400,
            "message": validated,
        }
    
    # else : return post data error
    #print(data)
    
    