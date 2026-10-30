from datetime import time


class UserModel:
    full_name: str
    email: str
    hashed_password: str
    last_login: time
    is_active: bool
    is_deleted: bool
    created_at: time
    updated_at: time
    deleted_at: time
