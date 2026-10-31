import sqlalchemy as db

engine = db.create_engine(
    url="postgresql://postgres:12345678@localhost:5432/agent_viee"
)
