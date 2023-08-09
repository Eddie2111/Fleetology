# import jst and verify the received token
from dotenv import load_dotenv, dotenv_values
import jsonwebtoken

load_dotenv();
config   = dotenv_values(".env")

def CSRFController(token) -> bool:
    try:
        decoded: dict = jsonwebtoken.decode(token, config["SECRET"], algorithms=["HS256"])
        return True
    except:
        return False 