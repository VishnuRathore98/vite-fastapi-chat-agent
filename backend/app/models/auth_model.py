from datetime import datetime
from uuid import uuid4

from sqlalchemy import String
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column


class Base(DeclarativeBase):
    pass


class UserModel(Base):
    __tablename__ = "user_account"
    id: Mapped[uuid4] = mapped_column(primary_key=True)
    full_name: Mapped[str] = mapped_column(String(30))
    email: Mapped[str] = mapped_column(String(30))
    hashed_password: Mapped[str] = mapped_column(String(200))
    last_login: Mapped[str] = mapped_column()
    is_active: Mapped[bool] = mapped_column()
    is_deleted: Mapped[bool] = mapped_column()
    created_at: Mapped[datetime] = mapped_column()
    updated_at: Mapped[datetime] = mapped_column()
    deleted_at: Mapped[datetime] = mapped_column()
