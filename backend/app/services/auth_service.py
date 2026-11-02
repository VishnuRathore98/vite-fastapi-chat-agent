from sqlalchemy.orm import Session

from app.models.auth_model import UserModel
from app.repository.auth_repository import UserRepository
from app.schemas.auth_schema import SignupRequestSchema
from app.utils.security import hash_password


class UserService:
    def __init__(self, db: Session):
        self.db = db

    def create_user(self, body: SignupRequestSchema) -> UserModel:
        try:
            hashed_password = hash_password(body.password)
            body.password = hashed_password
            repo = UserRepository(self.db)
            new_user = repo.insert_new_user(body)
            return new_user
        except Exception:
            return False
