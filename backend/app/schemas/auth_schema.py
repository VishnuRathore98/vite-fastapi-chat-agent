from pydantic import BaseModel, EmailStr


class LoginRequestSchema(BaseModel):
    email: EmailStr
    password: str


class LoginResponseSchema(BaseModel):
    message: str


class SignupRequestSchema(BaseModel):
    fullname: str
    email: EmailStr
    password: str


class SignupResponseSchema(BaseModel):
    message: str
