from fastapi import FastAPI
from pydantic import BaseModel
from typing import List, Optional
#from pytypes.typeSetup import Item
app = FastAPI();

@app.get("/")
def read_root():
    return {"message": "hello world"}

