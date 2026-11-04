from app.utils.security import verify_password
from app.schemas.auth_schema import LoginResponseSchema
from app.schemas.auth_schema import LoginRequestSchema
from uuid import UUID

from pydantic import EmailStr
from sqlalchemy.orm import Session

from app.models.auth_model import UserModel
from app.repository.auth_repository import UserRepository
from app.schemas.auth_schema import SignupRequestSchema
from app.schemas.user_schema import UserSchema
from app.utils.log_utils import logger
from app.utils.security import hash_password


class UserService:
    def __init__(self, db: Session):
        self.db = db

    def create_user(self, body: SignupRequestSchema) -> UserSchema:
        try:
            hashed_password = hash_password(body.password)
            body.password = hashed_password
            repo = UserRepository(self.db)
            new_user = repo.insert_new_user(body)
            return UserSchema.model_validate(new_user)
        except Exception as e:
            logger.error(e)
            return False

    def get_user(
        self, email: EmailStr | None = None, user_id: UUID | None = None
    ) -> UserSchema:
        try:
            repo = UserRepository(self.db)
            if email is not None:
                user: UserModel = repo.get_user_by_email(email)
            if user_id is not None:
                user: UserModel = repo.get_user_by_id(user_id)
            # logger.info(user.contact_number)
            return UserSchema.model_validate(user)
        except Exception as e:
            logger.error(e)
            return False

    def get_all_users(self) -> list[UserSchema]:
        try:
            repo = UserRepository(self.db)
            users = repo.get_all_existing_users()
            users_list: list[UserSchema] = []
            for user in users:
                users_list.append(UserSchema.model_validate(user).model_dump())
            logger.info(users_list)
            return users_list
        except Exception as e:
            logger.error(e)
            return False

    def login_user(self, body: LoginRequestSchema) -> LoginResponseSchema|bool:
        repo = UserRepository(self.db)
        user: UserModel = repo.get_user_by_email(email=body.email)
        is_verified: bool=verify_password(body.password,user.hashed_password)
        if is_verified:
            
        else:
            return False