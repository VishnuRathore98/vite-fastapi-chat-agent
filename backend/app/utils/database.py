import sqlalchemy.orm.session
from sqlalchemy import create_engine
from sqlalchemy.engine.base import Engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm.session import Session

from .config import settings

engine: Engine = create_engine(url=settings.DATABASE_URL, echo=True)
SessionLocal: sqlalchemy.orm.session.sessionmaker[Session] = sessionmaker(bind=engine)


def get_db():
    db: Session = SessionLocal()
    try:
        yield db
    finally:
        db.close()
