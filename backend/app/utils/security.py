from pwdlib import PasswordHash

password_hash = PasswordHash.recommended()


def hash_password(password: str) -> str:
    hash = password_hash.hash(password=password)
    return hash


def verify_password(password: str, hash: str) -> bool:
    verified = password_hash.verify(password=password, hash=hash)
    return verified
