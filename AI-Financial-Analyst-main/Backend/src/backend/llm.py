from langchain_google_genai import ChatGoogleGenerativeAI
from . import config

LLM = ChatGoogleGenerativeAI(model = "gemini-flash-latest",temperature = 0.7)

