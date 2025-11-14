FROM python:3.11-slim

WORKDIR /app

# instalar dependências
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# copiar o restante do código
COPY . .

# Render usa a variável PORT, mas colocamos um default
ENV PORT=10000

# importante: ouvir em 0.0.0.0 e na porta certa
CMD ["sh", "-c", "uvicorn app:app --host 0.0.0.0 --port ${PORT:-10000}"]
