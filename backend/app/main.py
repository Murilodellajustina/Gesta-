from fastapi import FastAPI, Depends, HTTPException, Header, status
from fastapi.middleware.cors import CORSMiddleware
from app.database import engine
from app.models.db_model import Base
from app.database import get_db
from sqlalchemy.orm import Session
from app.models.db_model import Usuario
from app.schemas.schemas import UsuarioCadastro
from app.services.security import gerar_hash
from app.schemas.schemas import UsuarioLogin
from app.services.security import verificar_senha
from fastapi.security import OAuth2PasswordBearer
from fastapi.staticfiles import StaticFiles
import os

Base.metadata.create_all(bind=engine)


app = FastAPI(
    title="API 100teto",
)


os.makedirs("uploads", exist_ok=True)
app.mount("/static", StaticFiles(directory="uploads"), name="static")

origins = [
    "http://localhost:5173", 
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"], 
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"mensagem": "Bem-vindo a API dos gesta+"}

@app.post("/cadastro")
def cadastrar_usuario(
    dados: UsuarioCadastro, 
    db: Session = Depends(get_db)
    ):
    
    usuario_existente = db.query(Usuario).filter(Usuario.email == dados.email).first()
    
    if usuario_existente:
        raise HTTPException(status_code=400, detail="Email já cadastrado")
    
    usuario : Usuario = Usuario(
        nome=dados.nome,
        email=dados.email,
        senha_hash=gerar_hash(dados.senha),
        telefone=dados.telefone,
        idadeGestacional=dados.IdadeGestacional
    )
    db.add(usuario)
    db.commit()
    db.refresh(usuario)
    return {
            "Usuario criado com sucesso": {
                "id": usuario.id,
            }
    }

auth_scheme = OAuth2PasswordBearer(tokenUrl="/login")

@app.post("/login")
def login(
    dados: UsuarioLogin,
    db: Session = Depends(get_db)
):
    usuario = db.query(Usuario).filter(Usuario.email == dados.email).first()
    
    if not usuario:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Email ou senha incorretos")
    
    if not verificar_senha(dados.senha, usuario.senha_hash):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Email ou senha incorretos")
    

    return {
        "mensagem": "Login realizado com sucesso!",
        "access_token": str(usuario.id), 
        "usuario": {
            "id": str(usuario.id),
            "nome": usuario.nome
        }
        }

def usuario_autenticado(authorization: str = Header(None)):
    if not authorization:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Token de acesso inválido")
    
    usuario_id = authorization.replace("Bearer ", "").strip()
    
    if not usuario_id:
         raise HTTPException(status_code=401, detail="Token de acesso inválido")
         
    return {"sub": usuario_id}
