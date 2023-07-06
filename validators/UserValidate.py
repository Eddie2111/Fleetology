def validate_userData(data):
    # Define the expected data types for each key
    expected_types = {
        "name": str,
        "email": str,
        "password": str,
        "profileImage": str,
        "location": str,
        "phoneNumber": str,
        "isActive": bool
    }

    for key, expected_type in expected_types.items():
        if key not in data:
            return f"Missing required field: {key}"

        value = data[key]
        if not isinstance(value, expected_type):
            return f"Invalid data type for {key}. Expected {expected_type.__name__}, got {type(value).__name__}"

    return True