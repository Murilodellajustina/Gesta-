from pydantic import BaseModel, EmailStr
from typing import Optional, List
from datetime import date

class UsuarioLogin(BaseModel):
    email: EmailStr
    senha: str


class UsuarioCadastro(BaseModel):
    nome: str
    telefone: str
    IdadeGestacional: date
    email: EmailStr
    senha: str