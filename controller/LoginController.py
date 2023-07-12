from dotenv import load_dotenv, dotenv_values
from model.mysql import cursor
from functions.bcrypt import Match
import jsonwebtoken

load_dotenv();
config   = dotenv_values(".env")

def LoginController(data):
    try:
        resultant = cursor.execute("SELECT * FROM Users WHERE email = %s", (data.email,))
        result = cursor.fetchone()
        if not result:
            return {
                "error": "User not found"
            }
        if not Match(data.password, result[2]):
            return {
                "error": "Password incorrect"
            }
        token = jsonwebtoken.encode( { 'email': data.email, 'serial': result[0], 'user_type': result[3] }, config["SECRET"], algorithm="HS256")
        #print(result,token)
        return {
            "token":token
        }
    except Exception as e:
        return {
            "error": str(e)
        }