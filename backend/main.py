import csv
import os
from datetime import datetime
from fastapi import FastAPI, Request
from pydantic import BaseModel
import uvicorn
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Enable CORS for local testing/ ElevenLabs
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

CSV_FILE = "../appointments.csv"

# Initialize CSV with headers if it doesn't exist
if not os.path.exists(CSV_FILE):
    with open(CSV_FILE, mode="w", newline="", encoding="utf-8") as file:
        writer = csv.writer(file)
        writer.writerow(["Timestamp", "Patient Name", "Phone", "Doctor", "Date", "Time", "Reason"])

class AppointmentRequest(BaseModel):
    patient_name: str
    phone: str
    doctor_name: str
    appointment_date: str
    appointment_time: str
    reason: str

@app.get("/")
def home():
    return {"status": "Healthcare Database Active"}

@app.post("/book_appointment")
async def book_appointment(data: AppointmentRequest):
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    
    # Save to CSV
    try:
        with open(CSV_FILE, mode="a", newline="", encoding="utf-8") as file:
            writer = csv.writer(file)
            writer.writerow([
                timestamp,
                data.patient_name, 
                data.phone, 
                data.doctor_name, 
                data.appointment_date, 
                data.appointment_time, 
                data.reason
            ])
        print(f"Appointment Saved: {data.patient_name} with {data.doctor_name}")
        return {"status": "success", "message": "Appointment confirmed and saved to database."}
    except Exception as e:
        print(f"Error saving appointment: {e}")
        return {"status": "error", "message": "Failed to save data."}

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
