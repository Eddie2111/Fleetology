import bcrypt

# Encrypts password. Data -> password: string
def Encrypt(data):
    return bcrypt.hashpw(data.encode('utf-8'), bcrypt.gensalt())

# Matches password. Data -> password: string, hashed: string
def Match(data, hashed):
    return bcrypt.checkpw(data.encode('utf-8'), hashed.encode('utf-8'))