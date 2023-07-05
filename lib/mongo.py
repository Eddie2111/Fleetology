# connecting mongo to get and post data into the database

from pymongo import MongoClient
from bson.objectid import ObjectId
from bson.json_util import dumps
from bson.json_util import loads
from bson import json_util
import json


# connecting to the database
# connection has to a singleton pattern and when there is a connection, no connection will be made, else a connection will be created
client = MongoClient('mongodb+srv://fleetology:fleet2023@cluster0.mutwc0v.mongodb.net/?retryWrites=true&w=majority')
#client = MongoClient('mongodb://localhost:27017/')   
db = client['rideshare']


# creating a function to get all the users
def get_users():
    users = db.users.find()
    return users


# creating a function to get a single user
def get_user(id):
    user = db.users.find_one({"_id": ObjectId(id)})
    return user


# creating a function to create a user
def create_user(user):
    user = db.users.insert_one(user)
    return user


# creating a function to update a user
def update_user(id, user):
    user = db.users.update_one({"_id": ObjectId(id)}, {"$set": user})
    return user


# creating a function to delete a user
def delete_user(id):
    user = db.users.delete_one({"_id": ObjectId(id)})
    return user

