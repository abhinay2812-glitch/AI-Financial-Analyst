from langchain_huggingface import HuggingFaceEmbeddings
from langchain_chroma import Chroma

MODEL = "sentence-transformers/all-MiniLM-L6-v2"

def build_vector_store(chunks, persist_directory):
    embeddings = HuggingFaceEmbeddings(model_name=MODEL)

    return Chroma.from_documents(
        documents=chunks,
        embedding=embeddings,
        persist_directory=persist_directory,
    )

def load_vector_store(persist_directory):
    embeddings = HuggingFaceEmbeddings(model_name=MODEL)

    return Chroma(
        persist_directory=persist_directory,
        embedding_function=embeddings,
    )