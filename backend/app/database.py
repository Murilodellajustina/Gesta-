from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

#substituir pela senha do postgre
SQLALCHEMY_DATABASE_URL = "postgresql://postgres:Senha_postgre@localhost:5432/GestaMais_db"

engine = create_engine(SQLALCHEMY_DATABASE_URL)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()