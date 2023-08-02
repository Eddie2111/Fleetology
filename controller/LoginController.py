from model.mysql import cursor
from functions.bcrypt import Encrypt

def Signup(data):
    try:    
        dataset: dict = {
            'serial': data.serial,
            'email': data.email,
            'password': data.password,
            'user_type': data.user_type
        }
        # apply validation here
        resultatnt = cursor.execute("INSERT INTO Users (username, email, password, user_type) VALUES (%s, %s, %s, %s)", (dataset['serial'], dataset['email'], dataset['password'], dataset['user_type']));
        print(resultatnt)
        return {
            'message': "Account Created",
            "status" : "success",
            "result" : resultatnt,
            "serial" : dataset['serial']
        }
    
    except Exception as e:
        print(e)
        return {
            'message': e,
            "status" : "success",
            "result" : resultatnt
        }
