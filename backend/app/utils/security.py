import jwt
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jwt.exceptions import InvalidTokenError
from pwdlib import PasswordHash

password_hash = PasswordHash.recommended()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")


def hash_password(password: str) -> str:
    hash = password_hash.hash(password=password)
    return hash


def verify_password(password: str, hash: str) -> bool:
    verified = password_hash.verify(password=password, hash=hash)
    return verified


def create_access_token() -> str:
    access_token = ""
    return access_token


def create_refresh_token() -> str:
    refresh_token = ""
    return refresh_token
