from model.mysql import cursor
from functions.bcrypt import Encrypt

def Signup(data):
    try:    
        dataset: dict = {
            'serial': data.serial,
            'email': data.email,
            'password': Encrypt(data.password)
        }
        # apply validation here
        resultatnt = cursor.execute("INSERT INTO Users (username, email, password) VALUES (%s, %s, %s)", (dataset['serial'], dataset['email'], dataset['password']));
        return {
            'message': "Account Created",
            "status" : "success"
        }
    
    except Exception as e:
        print(e)
        return False    