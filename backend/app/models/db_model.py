from datetime import date
import uuid
from typing import List, Optional
from sqlalchemy import ForeignKey, String, Text, Numeric, Integer, Boolean, DateTime, Date, CheckConstraint, Table, Column
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship

class Base(DeclarativeBase):
    pass

class Usuario(Base):
    __tablename__ = "usuarios"

    id: Mapped[uuid.UUID] = mapped_column(primary_key=True, default=uuid.uuid4)
    nome: Mapped[str] = mapped_column(String(100), nullable=False)
    email: Mapped[str] = mapped_column(String(150), unique=True, nullable=False, index=True)
    senha_hash: Mapped[str] = mapped_column(String(255), nullable=False)
    telefone: Mapped[Optional[str]] = mapped_column(String(20), nullable=True)
    idadeGestacional: Mapped[Optional[date]] = mapped_column(Date, nullable=True)