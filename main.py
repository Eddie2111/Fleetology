# create a fastapi server with a single route

from fastapi import FastAPI
#from model.mysql import cursor
from fastapi.middleware.cors import CORSMiddleware

# origin imports
from config.CorsOrigins import origins

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

# route imports
from routes.index import router
from routes.auth import auth
from routes.login import login
from routes.signup import signup


# route initialization
app.include_router(router)
app.include_router(login)
app.include_router(signup)
app.include_router(auth)


# uvicorn main:app --reload --port 3200