from fastapi import FastAPI
from type.Item import Item # we have imported our type in here

from controller.getItem import read_item # we have imported our get function here
from controller.postItem import create_post # we have imported our post function here

app = FastAPI();

# endpoint in postman: http://localhost:5000/item
@app.get("/")
async def get_items():
    return read_item()

# endpoint in postman: http://localhost:5000/post 
@app.post("/post")
async def post_Item(items: Item):
    return create_post(items)


# $ uvicorn index:app --port 5000 --reload 
# please make sure that your file name is "index.py" to make this command work
# --reload is for auto reload when you change the code
# --port is for the port number, I have assigned it to 5000, you may change your port number if you want.
