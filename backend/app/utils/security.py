from datetime import timedelta
from datetime import timezone
from datetime import datetime
import jwt
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jwt.exceptions import InvalidTokenError
from pwdlib import PasswordHash

from app.schemas.auth_schema import Token
from app.utils.config import settings

password_hash = PasswordHash.recommended()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")


def hash_password(password: str) -> str:
    hash = password_hash.hash(password=password)
    return hash


def verify_password(password: str, hash: str) -> bool:
    verified = password_hash.verify(password=password, hash=hash)
    return verified


def create_access_token(body: Token) -> str:
    to_encode = body.model_copy()
    expiry = datetime.now(timezone.utc) + timedelta(minutes=body.exp)
    to_encode.update
    access_token = ""
    return access_token


def create_refresh_token() -> str:
    refresh_token = ""
    return refresh_token
