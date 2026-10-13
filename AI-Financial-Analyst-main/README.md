<img width="1467" height="790" alt="image" src="https://github.com/user-attachments/assets/ee8dddd8-9c44-4d90-b0e0-c0e21ce8cb67" />

🤖 AI-Powered Financial Analyst

An AI-powered financial analysis application built using Retrieval-Augmented Generation (RAG).

The application allows users to upload financial documents and interact with them using natural language. Instead of relying only on the language model's pretrained knowledge, the system retrieves relevant information from the uploaded documents and uses that context to generate accurate, document-grounded responses.

✨ Features

📄 Upload financial documents

🔎 Semantic search over uploaded documents

🧠 Retrieval-Augmented Generation (RAG)

💬 Natural-language question answering

🗃️ ChromaDB vector database

🤖 LLM-powered responses

⚡ FastAPI backend

⚛️ React + Vite frontend

🔗 REST API communication

📚 Context-aware responses

🔐 Environment-variable based API key management

📱 Responsive user interface

📑 Document processing and text chunking

🔍 Similarity-based document retrieval

🏗️ System Architecture

                         ┌──────────────────┐
                         │       User       │
                         └────────┬─────────┘
                                  │
                                  ▼
                         ┌──────────────────┐
                         │ React Frontend   │
                         │     + Vite       │
                         └────────┬─────────┘
                                  │
                             REST API
                                  │
                                  ▼
                         ┌──────────────────┐
                         │ FastAPI Backend  │
                         └────────┬─────────┘
                                  │
                                  ▼
                         ┌──────────────────┐
                         │   RAG Pipeline   │
                         └────────┬─────────┘
                                  │
                ┌─────────────────┼─────────────────┐
                │                 │                 │
                ▼                 ▼                 ▼
        Document Loader      Embeddings          LLM
                │                 │                 │
                ▼                 ▼                 │
        Text Chunking        ChromaDB              │
                │                 │                 │
                └─────────────────┘                 │
                                  │                 │
                                  └────────┬────────┘
                                           ▼
                                  Generated Response
                                           │
                                           ▼
                                    React Frontend

🧠 How RAG Works

The application follows a Retrieval-Augmented Generation workflow.

1. Document Upload

The user uploads a financial document through the frontend.

Financial Document
        │
        ▼
   FastAPI Backend

2. Text Extraction

The backend extracts readable text from the uploaded document.

Document
   │
   ▼
Text Extraction
   │
   ▼
Raw Text

3. Text Chunking

Large documents are divided into smaller chunks.

Large Document
       │
       ▼
 ┌─────┬─────┬─────┬─────┐
 │ C1  │ C2  │ C3  │ C4  │
 └─────┴─────┴─────┴─────┘

Chunking allows the retrieval system to search for specific pieces of information instead of passing the entire document to the language model.

4. Generate Embeddings

Each text chunk is converted into a vector representation using an embedding model.

Text Chunk
    │
    ▼
Embedding Model
    │
    ▼
Vector Representation

5. Store Embeddings

The generated embeddings are stored in ChromaDB.

Document Chunks
      │
      ▼
  Embeddings
      │
      ▼
   ChromaDB

6. User Query

The user asks a question about the uploaded financial document.

Example:

"What are the major financial risks mentioned in the report?"

7. Query Embedding

The question is converted into an embedding using the embedding model.

User Question
      │
      ▼
Query Embedding

8. Similarity Search

The query embedding is compared against the vectors stored in ChromaDB.

Query
 │
 ▼
Vector Search
 │
 ▼
Most Relevant Chunks

9. Context Construction

The retrieved chunks are provided as context to the language model.

User Question
      +
Retrieved Context
      │
      ▼
     LLM

10. Generate Response

The LLM generates a response using the retrieved information.

User Question
      │
      ▼
   Retrieval
      │
      ▼
Relevant Context
      │
      ▼
      LLM
      │
      ▼
AI Generated Answer

🔄 Complete RAG Pipeline

                DOCUMENT INGESTION

Financial Document
        │
        ▼
  Text Extraction
        │
        ▼
    Chunking
        │
        ▼
   Embeddings
        │
        ▼
     ChromaDB
        │
        │
        │
        ▼
     USER QUERY

"What are the major risks?"
        │
        ▼
 Query Embedding
        │
        ▼
 Similarity Search
        │
        ▼
Relevant Documents
        │
        ▼
Context + Query
        │
        ▼
      LLM
        │
        ▼
 Generated Response
        │
        ▼
 React Frontend

🛠️ Tech Stack

Frontend

React

Vite

JavaScript

CSS

npm

Backend

Python

FastAPI

Uvicorn

REST APIs

AI / RAG

Retrieval-Augmented Generation

Large Language Models

Text Embeddings

Semantic Search

ChromaDB

Vector Similarity Search

Development Tools

Git

GitHub

VS Code

Python Virtual Environment

npm

📂 Project Structure

AI-Financial-Analyst/
│
├── Backend/
│   ├── src/
│   │   └── ...
│   │
│   ├── uploads/
│   ├── chroma_db/
│   ├── .env
│   ├── .venv/
│   ├── pyproject.toml
│   ├── uv.lock
│   └── README.md
│
├── Frontend/
│   ├── public/
│   ├── src/
│   │   └── ...
│   │
│   ├── node_modules/
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   └── README.md
│
├── .gitignore
└── README.md

.env, .venv, node_modules, ChromaDB data, and generated uploads should not be committed to GitHub.

⚙️ Installation

📋 Prerequisites

Make sure the following are installed:

Python 3.10+

Node.js 18+

npm

Git

Check your installations:

Python

python --version

Node.js

node --version

npm

npm --version

Git

git --version

1️⃣ Clone the Repository

Clone the repository:

git clone https://github.com/bt24btech11017-cloud/AI-Financial-Analyst.git

Navigate into the project:

cd AI-Financial-Analyst

2️⃣ Backend Setup

Navigate to the backend:

cd Backend

Create a Python Virtual Environment

python -m venv .venv

macOS / Linux

source .venv/bin/activate

Windows

.venv\Scripts\activate

After activation, your terminal should look similar to:

(.venv) user@computer Backend %

3️⃣ Install Backend Dependencies

This project uses pyproject.toml and uv.lock.

Using uv

Install uv:

pip install uv

Then install the project dependencies:

uv sync

This installs the dependencies specified in pyproject.toml and uses the lock file to maintain reproducible versions.

4️⃣ Configure Environment Variables

Create a .env file inside the Backend directory:

Backend/
└── .env

Add the required API keys and configuration.

Example:

OPENAI_API_KEY=your_api_key_here

If your project uses additional services, add their credentials:

OPENAI_API_KEY=your_api_key_here
ANOTHER_API_KEY=your_api_key_here

The exact environment variables depend on the services configured in the backend.

⚠️ Security

Never commit .env to GitHub.

Your .gitignore should contain:

.env
**/.env

Never hard-code API keys inside source code.

❌ Don't do this:

api_key = "your-secret-api-key"

✅ Instead:

import os

api_key = os.getenv("OPENAI_API_KEY")

5️⃣ Start the Backend

From the Backend directory, start the FastAPI server.

If your FastAPI application is located in main.py:

uvicorn main:app --reload

If your application is located in another module:

uvicorn <module_name>:app --reload

The backend will normally run at:

http://localhost:8000

📖 FastAPI Documentation

Once the backend is running, open:

http://localhost:8000/docs

FastAPI provides an interactive Swagger UI where you can:

View API endpoints

Test API requests

Test document uploads

Send queries

Inspect responses

Debug backend functionality

6️⃣ Frontend Setup

Open a new terminal.

Navigate to the frontend:

cd Frontend

Install dependencies:

npm install

This installs the packages specified in:

package.json

7️⃣ Start the Frontend

Start the Vite development server:

npm run dev

The frontend will normally be available at:

http://localhost:5173

Open this URL in your browser.

▶️ Running the Complete Application

The application requires both the backend and frontend to run.

Terminal 1 — Backend

cd Backend
source .venv/bin/activate
uvicorn main:app --reload

Terminal 2 — Frontend

cd Frontend
npm install
npm run dev

Then open:

http://localhost:5173

🔗 Frontend ↔ Backend Communication

The React frontend communicates with the FastAPI backend through REST APIs.

React Frontend
      │
      │ HTTP Request
      ▼
FastAPI Backend
      │
      ▼
RAG Pipeline
      │
      ├───────────────┐
      ▼               ▼
   ChromaDB           LLM
      │               │
      └───────┬───────┘
              ▼
        AI Response
              │
              ▼
       React Frontend

During local development:

Frontend:
http://localhost:5173

Backend:
http://localhost:8000

🌐 API Endpoints

The backend exposes REST API endpoints for communication with the frontend.

Typical endpoints include:

Method

Endpoint

Description

GET

/

Check backend status

POST

/upload

Upload a document

POST

/query

Ask a question

GET

/docs

FastAPI Swagger documentation

The exact endpoints depend on the implementation of the backend.

🗃️ ChromaDB

ChromaDB is used as the vector database for storing document embeddings.

The basic workflow is:

Document
    │
    ▼
Text Extraction
    │
    ▼
Text Chunking
    │
    ▼
Embedding Generation
    │
    ▼
ChromaDB

When a user asks a question:

Question
    │
    ▼
Query Embedding
    │
    ▼
Similarity Search
    │
    ▼
Relevant Chunks
    │
    ▼
Context
    │
    ▼
LLM
    │
    ▼
Answer

📄 Document Processing

The document processing pipeline converts uploaded files into searchable information.

Uploaded Document
        │
        ▼
   Text Extraction
        │
        ▼
     Cleaning
        │
        ▼
     Chunking
        │
        ▼
    Embeddings
        │
        ▼
     ChromaDB

This allows the application to retrieve only the information relevant to the user's question.

🔎 Semantic Search

Traditional keyword search looks for exact words.

Semantic search represents text as vectors and compares their meaning.

For example:

Query:
"How profitable is the company?"

The system may retrieve information such as:

"Revenue increased by 18% while net income rose by 12%."

even though the exact word "profitable" may not appear.

🤖 Why RAG?

A normal LLM application works approximately like:

User Question
      │
      ▼
     LLM
      │
      ▼
   Answer

A RAG application works like:

User Question
      │
      ▼
   Retriever
      │
      ▼
Relevant Information
      │
      ▼
     LLM
      │
      ▼
Grounded Answer

RAG is useful because it allows an application to work with:

Private documents

Internal knowledge

Financial reports

Company documents

Research papers

Custom datasets

Frequently changing information

🧪 Testing the Application

After starting both services:

1. Open the frontend

http://localhost:5173

2. Upload a financial document

Upload a supported document through the application.

3. Wait for processing

The backend processes the document and stores its embeddings in ChromaDB.

4. Ask a question

Example:

What are the company's major sources of revenue?

Other examples:

What are the major financial risks mentioned in the report?

How did the company's revenue change?

What are the company's major expenses?

5. Verify the response

The generated response should be based on information retrieved from the uploaded document.

🔐 Security

Sensitive information should always be stored using environment variables.

Never do this:

OPENAI_API_KEY = "sk-xxxxxxxx"

Instead:

import os

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

Store secrets inside:

Backend/.env

and exclude the file from Git.
