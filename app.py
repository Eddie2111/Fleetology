# initiate a fastapi server
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# origin imports
from config.CorsOrigins import origins

# type imports
from type.User import User, Driver

# initating fastapi
app = FastAPI()

# initating cors  → Cross Origin Resource Sharing, allows the server to accept requests from only the specified origins as in our nextjs app
# this is a security feature, origin sources are provided in config/CorsOrigins.py
# no need to change anything here unless you know what you are doing

###################################################################################################
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
###################################################################################################


# initating routes
@app.get("/")
async def root():
    return {"message": "Hello World"}

# get request to run tests
@app.get("/signup")
async def signup():
    return {"message": "Hello World"}
@app.get("/signup/user")
async def signup():
    return {"message": "Hello World"}
@app.get("/signup/driver")
async def signup():
    return {"message": "Hello World"}

# receieve the post request on signup → user
@app.post("/signup/user")
async def signup(data: User):
    return data
# receieve the post request on signup → driver
@app.post("/signup/driver")
async def signup(data: Driver):
    return data

# start command : 
# uvicorn app:app --reload --port 8000
# --reload : reloads the server on changes
# --port 8000 : runs the server on port 8000 [ you can change it but it has be in a range of 3000-9000 ]
# app:app : first `app` refers to the file name and the second `app` refers to the fastapi instance

# for more info on uvicorn : https://www.uvicorn.org/