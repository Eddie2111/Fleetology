# connecting mongo to get and post data into the database
from bson.objectid import ObjectId
from pymongo import MongoClient
import motor.motor_asyncio

# from bson.objectid import ObjectId
# from bson.json_util import dumps
# from bson.json_util import loads
# from bson import json_util
# import json


# connecting to the database
# connection has to a singleton pattern and when there is a connection, no connection will be made, else a connection will be created
#client = MongoClient('mongodb://localhost:27017/')
#db = client['fleetology']

MONGO_DETAILS = "mongodb://localhost:27017"
client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_DETAILS)
database = client.fleetology
user_collection = database.get_collection("user")


def user_helper(userData) -> dict:
    return {
        "id": str(userData["_id"]),
        "name": userData["name"],
        "email": userData["email"],
        "password": userData["password"],
        "profileImage": userData["profileImage"],
        "location": userData["location"],
        "phoneNumber": userData["phoneNumber"],
        "isActive": userData["isActive"]

    }

# Retrieve all users present in the database
async def retrieve_users():
    users = []
    async for user in user_collection.find():
        users.append(user_helper(user))
    return users


# Add a new user into to the database
async def add_user(user_data: dict) -> dict:
    user = await user_collection.insert_one(user_data)
    new_user = await user_collection.find_one({"_id": user.inserted_id})
    return user_helper(new_user)


# Retrieve a user with a matching ID
async def retrieve_user(id: str) -> dict:
    user = await user_collection.find_one({"_id": ObjectId(id)})
    if user:
        return user_helper(user)


# Update a user with a matching ID
async def update_user(id: str, data: dict):
    # Return false if an empty request body is sent.
    if len(data) < 1:
        return False
    user = await user_collection.find_one({"_id": ObjectId(id)})
    if user:
        updated_user = await user_collection.update_one(
            {"_id": ObjectId(id)}, {"$set": data}
        )
        if updated_user:
            return True
        return False
    

# Delete a student from the database
async def delete_user(id: str):
    user = await user_collection.find_one({"_id": ObjectId(id)})
    if user:
        await user_collection.delete_one({"_id": ObjectId(id)})
        return True

# creating a function to get all the users
# def get_users():
#     users = db.users.find()
#     return users


# # creating a function to get a single user
# def get_user(id):
#     user = db.users.find_one({"_id": ObjectId(id)})
#     return user


# # creating a function to create a user
# def create_user(user):
#     user = db.users.insert_one(user)
#     return user


# # creating a function to update a user
# def update_user(id, user):
#     user = db.users.update_one({"_id": ObjectId(id)}, {"$set": user})
#     return user


# # creating a function to delete a user
# def delete_user(id):
#     user = db.users.delete_one({"_id": ObjectId(id)})
#     return user

