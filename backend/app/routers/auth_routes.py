from fastapi import APIRouter, status

from ..schemas.auth_schema import (
    LoginRequestSchema,
    LoginResponseSchema,
    SignupRequestSchema,
    SignupResponseSchema,
)
from ..utils.log_utils import logger

auth_router = APIRouter(prefix="/auth", tags=["Auth"])


@auth_router.post(path="/login", status_code=status.HTTP_200_OK)
async def login(body: LoginRequestSchema) -> LoginResponseSchema:
    logger.info(body.model_dump_json())
    return LoginResponseSchema(message="Login Successful!")


@auth_router.post(path="/signup", status_code=status.HTTP_201_CREATED)
async def signup(body: SignupRequestSchema) -> SignupResponseSchema:
    logger.info(body.model_dump_json())
    return SignupResponseSchema(message="SignUp Successful!")
