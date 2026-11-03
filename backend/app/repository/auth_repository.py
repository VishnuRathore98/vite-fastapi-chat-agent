from app.utils.log_utils import logger
from uuid import UUID

from pydantic import EmailStr
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.models.auth_model import UserModel
from app.schemas.auth_schema import SignupRequestSchema


class UserRepository:
    def __init__(self, db: Session):
        self.db = db

    def insert_new_user(self, body: SignupRequestSchema) -> UserModel:
        user = UserModel(
            full_name=body.full_name,
            email=body.email,
            hashed_password=body.password,
        )
        self.db.add(user)
        self.db.commit()
        self.db.refresh()
        return user

    def get_user_by_email(self, email: EmailStr):
        statement = select(UserModel).where(UserModel.email == email)
        user = self.db.execute(statement=statement).scalar_one_or_none()
        return user

    def get_user_by_id(self, user_id: UUID): ...

    def get_all_existing_users(self):
        statement = select(UserModel)
        users = self.db.execute(statement=statement).scalars().all()
        return list(users)
