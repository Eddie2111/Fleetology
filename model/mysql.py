from dotenv import load_dotenv, dotenv_values
import MySQLdb
import os

load_dotenv()
# config   = dotenv_values(".env")

connection =  MySQLdb.connect(
        host     = 'aws.connect.psdb.cloud',#os.environ.get("HOST"),
        user     = 'qw2bko66fn8vy0msw26m', #os.environ.get("USERNAME"),
        passwd   = 'pscale_pw_NIhbCN3txebHMSB8H75F6VHYlr3fVVppEckAVBedtAI', #os.environ.get("PASSWORD"),
        db       = 'fleetology', #os.environ.get("DATABASE"),
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