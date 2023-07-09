## test target -> validators/UserValidate.py

import pytest 
import sys

sys.path.append("")
from validators.UserValidate import validate_userData
def test_validate_userData():
    # Test case 1: Valid data
    data = {
        "serial": "12345",
        "email": "test@example.com",
        "password": "password123",
    }
    assert validate_userData(data) is True

    # Test case 2: Missing required field
    data = {
        "email": "test@example.com",
        "password": "password123",
    }
    assert validate_userData(data) == "Missing required field: serial"

    # Test case 3: Invalid data type for serial
    data = {
        "serial": 12345,
        "email": "test@example.com",
        "password": "password123",
    }
    assert validate_userData(data) == "Invalid data type for serial. Expected str, got int"

    # Test case 4: Invalid data type for email
    data = {
        "serial": "12345",
        "email": 12345,
        "password": "password123",
    }
    assert validate_userData(data) == "Invalid data type for email. Expected str, got int"

    # Test case 5: Invalid data type for password
    data = {
        "serial": "12345",
        "email": "test@example.com",
        "password": 12345,
    }
    assert validate_userData(data) == "Invalid data type for password. Expected str, got int"