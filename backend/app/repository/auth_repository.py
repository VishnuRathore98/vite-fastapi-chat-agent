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
