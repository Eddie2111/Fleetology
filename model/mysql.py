from dotenv import load_dotenv, dotenv_values
import MySQLdb
import os

load_dotenv()
cert_pem = os.path.join(os.path.dirname(__file__), 'cert.pem')
config   = dotenv_values(".env")

class DBConn:
  def __init__(self):
    self.connection =  MySQLdb.connect(
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
    self.cursor = self.connection.cursor()

  def __del__(self):
    self.connection.close()
    self.cursor.close()
  
  def __test__(self):
    if self.connection: print("Database Connection successful"); return True
    else: print("Database Connection unsuccessful"); return False