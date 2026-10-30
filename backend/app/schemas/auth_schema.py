from pydantic import BaseModel, EmailStr, Field


class LoginRequestSchema(BaseModel):
    email: EmailStr
    password: str


class LoginResponseSchema(BaseModel):
    message: str
    access_token: str
    refresh_token: str


class SignupRequestSchema(BaseModel):
    full_name: str = Field(min_length=5)
    contact_number: str | None = None
    email: EmailStr
    password: str = Field(min_length=8, max_length=16)


class SignupResponseSchema(BaseModel):
    message: str
