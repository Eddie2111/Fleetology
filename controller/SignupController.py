#from model.mysql import cursor

# gets the data
# validates the data
# inserts the data into the database
# returns the result

def Signup(data):
    try:    
        dataset: dict = {
            'serial': data.serial,
            'email': data.email,
            'password': data.password
        }
        # apply validation here
        #cursor.execute("INSERT INTO users (serial, email, password) VALUES (%s, %s, %s)", (dataset['serial'], dataset['email'], dataset['password']));
        #print(dataset)
        return True
    
    except Exception as e:
        print(e)
        return False    