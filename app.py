from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
import os

app = FastAPI()

# Caminho absoluto da pasta atual
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# pasta de arquivos estáticos (css, js, imagens)
static_path = os.path.join(BASE_DIR, "static")
app.mount("/static", StaticFiles(directory=static_path), name="static")

# pasta de templates (html)
templates_path = os.path.join(BASE_DIR, "templates")
templates = Jinja2Templates(directory=templates_path)

# Seus projetos
PROJECTS = [
    {
        "title": "API de Gestão de Tarefas",
        "description": "API REST em Python (FastAPI) com autenticação JWT, CRUD completo e documentação automática.",
        "tags": ["Python", "FastAPI", "PostgreSQL", "Docker"],
        "code_url": "https://github.com/seu-usuario/api-tarefas",
        "demo_url": ""
    },
    {
        "title": "Dashboard de Análise de Vendas",
        "description": "Pipeline em Python + SQL para tratar dados e dashboard web em JS exibindo gráficos interativos.",
        "tags": ["Python", "SQL", "JavaScript"],
        "code_url": "https://github.com/seu-usuario/dashboard-vendas",
        "demo_url": ""
    },
]

@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    return templates.TemplateResponse(
        "index.html",
        {"request": request, "projects": PROJECTS}
    )
