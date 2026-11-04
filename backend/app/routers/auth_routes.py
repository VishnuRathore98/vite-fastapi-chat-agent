from uuid import UUID

from fastapi import APIRouter, Depends, HTTPException, Response, status
from pydantic import EmailStr
from sqlalchemy.orm import Session

from app.schemas.auth_schema import (
    LoginRequestSchema,
    LoginResponseSchema,
    SignupRequestSchema,
    SignupResponseSchema,
)
from app.schemas.common_schema import APIResponse
from app.schemas.user_schema import UserSchema
from app.services.auth_service import UserService
from app.utils.database import get_db
from app.utils.log_utils import logger

auth_router = APIRouter(prefix="/auth", tags=["Auth"])


@auth_router.post(path="/login", status_code=status.HTTP_200_OK)
async def login(
    body: LoginRequestSchema,
    db: Session = Depends(get_db),
    response: Response = None,
) -> APIResponse:
    logger.info(body.model_dump_json())
    try:
        service = UserService(db)
        res = service.login_user(body)
        return APIResponse(
            success=True,
            message="Login Successful!",
            data=LoginResponseSchema(
                user_id=res.user_id,
                access_token=res.access_token,
                refresh_token=res.refresh_token,
            ),
        )
    except Exception as e:
        response.status_code = status.HTTP_404_NOT_FOUND
        return APIResponse(
            success=False,
            message=f"User login failed! {e}",
            data=[],
        )


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


@auth_router.get(path="/users", status_code=status.HTTP_200_OK)
async def get_user(
    email: EmailStr | None = None,
    user_id: UUID | None = None,
    db: Session = Depends(get_db),
) -> APIResponse:
    try:
        service = UserService(db)
        if email is not None:
            logger.info(email)
            user = service.get_user(email=email)
            return APIResponse(
                success=True,
                message="User fetched successfully!",
                data=[user.model_dump()],
            )
        if user_id is not None:
            logger.info(user_id)
            user = service.get_user(user_id=user_id)
            return user
        else:
            users: list[UserSchema] = service.get_all_users()
            return APIResponse(
                success=True,
                message="All users fetched successfully!",
                data=users,
            )
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"User does not exits! error:{e}",
        )
