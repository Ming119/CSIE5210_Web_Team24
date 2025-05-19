import os

import eventlet
import google.generativeai as genai
import socketio
from dotenv import load_dotenv

load_dotenv()

GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY")
sio = socketio.Server(cors_allowed_origins="*")
app = socketio.WSGIApp(sio)

genai.configure(api_key=GEMINI_API_KEY)
model = genai.GenerativeModel("gemini-2.0-flash")


@sio.event
def connect(sid, environ):
    print(f"客戶端連接: {sid}")


@sio.event
def disconnect(sid):
    print(f"客戶端斷開: {sid}")


@sio.event
def chat_request(sid, data):
    user_message = data.get("message", "")
    try:
        response = model.generate_content(
            user_message,
            generation_config={"response_mime_type": "text/plain"},
            stream=False,  # 關閉流式，直接回傳完整訊息
        )
        # 直接回傳完整訊息
        sio.emit("gemini_message", response.text, room=sid)
    except Exception as e:
        print(f"Error generating response: {e}")
        sio.emit("gemini_message", f"Error: {str(e)}", room=sid)


if __name__ == "__main__":
    port = 8001
    print(f"Starting Socket.IO server on port {port}...")
    eventlet.wsgi.server(eventlet.listen(("", port)), app)
