from pydantic import BaseModel
from typing import List, Optional

class Item(BaseModel):
    name: str
    description: Optional[str] = None
    price: float
    tax: Optional[float] = None

class Contact(BaseModel):
    name: str
    email: str
    message: str