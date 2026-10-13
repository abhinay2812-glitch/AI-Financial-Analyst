from fastapi import FastAPI, UploadFile, File, Form, HTTPException
from pathlib import Path
import shutil
from fastapi.middleware.cors import CORSMiddleware
import json

from .document_loader import load_pdf
from .chunking import create_chunks
from .embeddings import build_vector_store, load_vector_store
from .retriever import get_retriever,get_kpi_retriever
from .ragchain import build_chat_chain,build_kpi_chain

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # React (Vite)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_DIR = Path("uploads")
UPLOAD_DIR.mkdir(exist_ok=True)

CHROMA_DIR = Path("chroma_db")
CHROMA_DIR.mkdir(exist_ok=True)


@app.get("/")
def greet():
    return {"message": "say Hellow"}

@app.post("/upload")
async def upload_pdf(
    company_name: str = Form(...),
    file: UploadFile = File(...)
):
    # Normalize company name
    company_name = company_name.strip().lower()

    # Validate PDF
    if file.content_type != "application/pdf":
        raise HTTPException(
            status_code=400,
            detail="Only PDF files are allowed."
        )

    # Save uploaded PDF
    pdf_path = UPLOAD_DIR / file.filename

    with open(pdf_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Load PDF
    pages = load_pdf(str(pdf_path))

    # Chunk PDF
    chunks = create_chunks(pages)

    # Create vector database
    persist_directory = CHROMA_DIR / company_name

    build_vector_store(
        chunks=chunks,
        persist_directory=str(persist_directory)
    )

    #=============================================Upload Finished

    #==============================================Extracting KPI's
    KPI_QUERY = """
    Income Statement
    Balance Sheet
    Cash Flow Statement
    Revenue
    Net Income
    Operating Income
    Operating Cash Flow
    Total Assets
    Total Liabilities
    Growth Strategy
    Risk Factors
    """
    # Load Vector Store
    vector_store = load_vector_store(str(persist_directory))

    # KPI Retriever
    kpi_retriever = get_kpi_retriever(vector_store)

    # KPI Chain
    kpi_chain = build_kpi_chain(kpi_retriever)

    # Extract KPIs
    kpi_json = kpi_chain.invoke(KPI_QUERY)

    # Convert JSON string to Python dict
    kpi_json = json.loads(kpi_json)
    print(json.dumps(kpi_json, indent=4))

    return {
    "message": "PDF uploaded successfully.",
    "company": company_name,
    "kpis": kpi_json
    }

@app.post("/chat")
async def chat(
    company_name: str = Form(...),
    question: str = Form(...)
):

    company_name = company_name.strip().lower()

    persist_directory = CHROMA_DIR / company_name

    if not persist_directory.exists():
        raise HTTPException(
            status_code=404,
            detail="Company not found. Please upload its annual report first."
        )

    vector_store = load_vector_store(str(persist_directory))

    retriever = get_retriever(vector_store)

    chain = build_chat_chain(retriever)

    answer = chain.invoke(question)

    return {
        "company": company_name,
        "answer": answer
    }