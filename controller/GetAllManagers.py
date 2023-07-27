from model.mysql import cursor

def GetAllManagers():
    try:
        # resultant = cursor.execute("SELECT * FROM Users WHERE user_type = 'manager'")
        # result = cursor.fetchone()
        result = 'true'
        return {
            "result": result
        }
    except Exception as e:
        return {
            "error": str(e)
        }
    