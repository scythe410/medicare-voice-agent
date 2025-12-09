# Medicare Voice Agent - Clinic Knowledge Base

## 1. Clinic Information
**Name:** Medicare Family Clinic
**Address:** 123 Health Avenue, Wellspring City, ST 12345
**Landmarks:** Next to Central Park, opposite the City Library.
**Directions:** Enter via the main gate on Health Avenue. Parking is available at the rear.
**Opening Hours:**
- Monday to Saturday: 8:00 AM - 8:00 PM
- Sunday: 9:00 AM - 1:00 PM
**Contact Number:** (555) 012-3456
**Email:** contact@medicareclinic.com
**Website:** www.medicareclinic.com
**Emergency Number:** Dial 911 for life-threatening emergencies. The clinic does not handle trauma cases.
**Services:**
- General Consultation
- Pediatrics
- Dermatology
- Lab Services (Blood/Urine)
- Pharmacy (On-site)

## 2. Doctor Details

### Dr. Sarah Bennett
- **Specialization:** General Practitioner (GP)
- **Languages:** English, Spanish
- **Available Days:** Monday, Wednesday, Friday
- **Available Times:** 9:00 AM - 1:00 PM
- **Consultation Fee:** $50
- **Avg Duration:** 15 mins

### Dr. James Lee
- **Specialization:** Pediatrician
- **Languages:** English, Mandarin
- **Available Days:** Tuesday, Thursday, Saturday
- **Available Times:** 4:00 PM - 8:00 PM
- **Consultation Fee:** $70
- **Avg Duration:** 20 mins

### Dr. Emily Chen
- **Specialization:** Dermatologist
- **Languages:** English
- **Available Days:** Friday ONLY
- **Available Times:** 2:00 PM - 6:00 PM
- **Consultation Fee:** $90
- **Avg Duration:** 15 mins

## 3. Appointment Rules
- **Patients per Session:** Max 20 patients per doctor shift.
- **Gap:** 15 minutes between slots.
- **Walk-ins:** Accepted, but booked patients have priority. Wait times may vary.
- **Same-day Booking:** Allowed if slots are available.
- **Cancellation Policy:** Must cancel at least 2 hours in advance.
- **Rescheduling:** Free of charge if rescheduled within the same week.
- **Payment:** Pay at the counter (Cash, Credit Card, Insurance Co-pay).

## 4. Real-Time Schedule (Dynamic Guidelines)
*(Note to Agent: If a specific date is requested, assume slots are available unless told otherwise by the system. If integration is active, check the live tool.)*
- **Holidays:** Closed on National Holidays.
- **Leave:** Dr. Bennett is on leave from Dec 25th to Jan 2nd.

## 5. Patient Details (Script)
**Required Information for Booking:**
1. "May I have your full name?"
2. "What is your phone number or NIC for the file?"
3. "How old are you, or what is your Date of Birth?"
4. "What is the main reason for your visit today?"

## 6. Common Questions & Answers (FAQs)
**Q: What are your opening hours?**
A: "We are open Monday to Saturday from 8 AM to 8 PM, and Sundays from 9 AM to 1 PM."

**Q: How much is the consultation fee?**
A: "It depends on the doctor. GPs charge $50, Specialists start at $70."

**Q: Do you take insurance?**
A: "Yes, we accept BlueCross, Aetna, and Medicare. Please bring your card."

**Q: Do you have X-ray facilities?**
A: "No, we only have a Lab for blood work and a Pharmacy. X-rays can be done at the hospital nearby."

**Q: Is the doctor available today?**
A: "Let me check the schedule. Which doctor are you looking for?"

## 7. Conversation Flow & Behavior

**Verifying Patient:**
"Before we proceed, could I get your name and phone number to pull up your file?"

**Slot Unavailable:**
"I'm sorry, Dr.[Doctor Name] is fully booked for that time. I have an opening at [Time] instead. Would that work for you?"

**Ending the Call:**
"All set! We look forward to seeing you. Have a healthy day!"

**Error Handling:**
- **Too Fast/Noisy:** "I'm sorry, I'm having trouble hearing you clearly. Could you repeat that?"
- **Unknown Request:** "I'm not sure about that specific query. Let me note it down or you can call our main line for administrative questions."

## 8. Policies
- **Payment Methods:** Cash, Visa, Mastercard.
- **Refunds:** Consultation fees are non-refundable once the service is provided.
