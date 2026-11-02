from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.schemas.auth_schema import (
    LoginRequestSchema,
    LoginResponseSchema,
    SignupRequestSchema,
    SignupResponseSchema,
)
from app.services.auth_service import UserService
from app.utils.database import get_db
from app.utils.log_utils import logger

auth_router = APIRouter(prefix="/auth", tags=["Auth"])


@auth_router.post(path="/login", status_code=status.HTTP_200_OK)
async def login(body: LoginRequestSchema) -> LoginResponseSchema:
    logger.info(body.model_dump_json())
    return LoginResponseSchema(message="Login Successful!")


@auth_router.post(path="/signup", status_code=status.HTTP_201_CREATED)
async def signup(
    body: SignupRequestSchema, db: Session = Depends(get_db)
) -> SignupResponseSchema:
    logger.info(body.model_dump_json())
    try:
        service = UserService(db)
        service.create_user(body)
        return SignupResponseSchema(message="SignUp Successful!")
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_CONTENT,
            detail=f"{e}, please check your details, try again, user not created!",
        )
