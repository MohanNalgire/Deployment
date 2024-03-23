try:
    from viltModel import model_pipeline
except ImportError:
    from .viltModel import model_pipeline
from fastapi import FastAPI,  UploadFile
from PIL import Image
import io

app = FastAPI()

@app.get("/")
def read_root():
    return {"The server os running."}

@app.post("/ask")
def ask(question:str, image:UploadFile):
    content = image.file.read()
    image = Image.open(io.BytesIO(content))
    result = model_pipeline(question, image)
    return result

