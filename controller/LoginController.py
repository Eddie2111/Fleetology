from dotenv import load_dotenv, dotenv_values
from model.mysql import cursor
from functions.bcrypt import Match
import jsonwebtoken

load_dotenv();
config   = dotenv_values(".env")

def LoginController(data):
    # try:
    # validation here!
    resultant = cursor.execute("SELECT * FROM Users WHERE email = %s AND password = %s", (data.email, data.password))
    
    result = cursor.fetchone()
    print(result[0], resultant)
    token = jsonwebtoken.encode( { 'email': data.email, 'serial': result[0] }, config["SECRET"], algorithm="HS256")
    password_match = Match(data.password, result[2]);
    return {
        'message': "Login Successful",
    }

    # except Exception as e:
    #     print(e)
    #     return False