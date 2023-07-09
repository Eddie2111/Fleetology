from dotenv import load_dotenv, dotenv_values
#from model.mysql import cursor
import jsonwebtoken

load_dotenv();
config   = dotenv_values(".env")

def LoginController(data):
    try:
        # validation here!
        # cursor.execute("SELECT * FROM users WHERE email = %s AND password = %s", (data['email'], data['password']))
        # result = cursor.fetchone()
        result = {"serial":"3894dfas53"} # remove this
        token = jsonwebtoken.encode(
            {
                'email': data.email,
                #'serial': result.serial,
                'serial': 'dummy'
            }, 
            config["SECRET"], algorithm="HS256")
        if result:
            return {
                'token': token,
                'serial': result['serial']
            }
        else:
            return False
    except Exception as e:
        print(e)
        return False