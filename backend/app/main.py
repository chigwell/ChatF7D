from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

class Message(BaseModel):
    text: str

origins = [
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/messages")
async def get_initial_message():
    return {"message": "Hello World"}

@app.post("/send-message")
async def send_message(message: Message):
    # Simulate processing and responding to a message
    response_text = f"Received: {message.text}"
    return {"response": response_text}
