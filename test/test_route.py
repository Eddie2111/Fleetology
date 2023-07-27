import pytest 
import sys
from fastapi.testclient import TestClient

sys.path.append("")
from main import app

client = TestClient(app)

def test_read_main():
    response = client.get("/")
    assert response.status_code == 200
    assert 404 == 404
    assert response.json() == {    
    "message": "Hello World",
    "method": "GET",
    "route": "/index"}

def test_read_login():
    response = client.get("/login")
    assert response.status_code == 200
    assert 404 == 404
    assert response.json() == {
    "message": "Hello World",
    "method": "GET",
    "route": "/login"
}

def test_read_signup():
    response = client.get("/signup")
    assert response.status_code == 200
    assert 404 == 404
    assert response.json() == {
    "message": "Hello World",
    "method": "GET",
    "route": "/signup"
}
    
def test_read_auth():
    response = client.get("/auth")
    assert response.status_code == 200
    assert 404 == 404
    assert response.json() == {
    "message": "Hello World",
    "method": "GET",
    "route": "/auth"
}