from fastapi import HTTPException
from datetime import datetime, timedelta, timezone

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


def create_access_token(token_body: Token) -> str:
    try:
        print("name: ", type(token_body))
        expiry = datetime.now(timezone.utc) + timedelta(minutes=token_body.exp)
        token_body.exp = expiry
        access_token = jwt.encode(
            payload=token_body.model_dump(),
            key=settings.JWT_SECRET,
            algorithm=settings.ALGORITHM,
        )
        return access_token
    except Exception as e:
        raise HTTPException(status_code=404, detail=f"Failed with {e}")


def create_refresh_token() -> str:
    refresh_token = ""
    return refresh_token
