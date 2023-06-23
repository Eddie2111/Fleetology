from typing import Union
from fastapi import FastAPI
# from model.postgresCon import conn,cur ## db connection here
from fastapi.middleware.cors import CORSMiddleware
from pytypes.typeSetup import Item, Contact
app = FastAPI();
import config.setup as config

## controllers here ##
## from controller.contact import get_all_contact, insert_one_contact
## controllers here ##

origins = [
    "http://www.example-react-app-url-after-vercel.com",
    "http://localhost:3000",
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET","POST","PUT","DELETE","PATCH"],
    allow_headers=["Authorization", "Content-Type"],
)

@app.middleware("http")
async def add_security_headers(request, call_next):
    response = await call_next(request)
    response.headers["Content-Security-Policy"] = "default-src 'self'; script-src 'self'"
    response.headers["X-XSS-Protection"] = "1; mode=block"
    return response


@app.get("/")
async def read_root():
    return {"message": "hello world"}

@app.post("/")
async def create_item(item: Item):
    print(item);
    return item

@app.get("/contact")
async def read_contact():
    ## return get_all_contact();
    return {"message": "hello world"}

@app.post("/contact")
async def create_contact(contact: Contact):
    ## return insert_one_contact(contact);
    return {"message": "hello world"}

# $ uvicorn index:app --port 3000 --reload --log-level debug 