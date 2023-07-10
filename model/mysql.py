from dotenv import load_dotenv, dotenv_values
import MySQLdb
import os

load_dotenv()
config   = dotenv_values(".env")

connection =  MySQLdb.connect(
        host     = config['HOST'],
        user     = config['USERNAME'],
        passwd   = config['PASSWORD'],
        db       = config['DATABASE'],
        autocommit = True,
        ssl_mode = "VERIFY_IDENTITY",
        ssl      = {
          "ca": "etc/ssl/cacert.pem"
        }
    )
cursor = connection.cursor()

def __test__():
  if connection: print("Database Connection successful"); return True
  else: print("Database Connection unsuccessful"); return False