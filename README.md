# 🤖 Book A Ride – Salesforce Agentforce Chatbot App  

## 📌 Overview  
**Book A Ride** is a Salesforce-native demo app that integrates with **Agentforce (Einstein Copilot / Bots)** to simulate a **chat-based ride booking system**.  

Users can interact with a **Salesforce chatbot** to book rides, select vehicle types, schedule times, and track bookings — all without leaving Salesforce.  
This project demonstrates **real-world conversational AI + Salesforce integration patterns**.  

---

## 🎯 Features  
- 💬 **Agentforce Chatbot** that guides users through ride booking.  
- 🚗 **Ride Selection** – choose from Car, SUV, or Bike.  
- 📅 **Ride Scheduling** – select pickup time & location.  
- 📊 **Ride History** – view past and upcoming bookings.  
- ⚡ **Apex Services + LWC** to extend chatbot actions.  
- 🔐 **Named Credentials** + (optional) **API integration** for external ride providers.  

---

## 🛠️ Tech Stack  
- **Salesforce Agentforce / Einstein Copilot** for chatbot interactions.  
- **Flows** to automate booking actions triggered by the chatbot.  
- **Apex** for custom business logic and external API callouts.  
- **Lightning Web Components (LWC)** for interactive UI.  
- **Platform Cache** for storing temporary authentication tokens.  
- **Named Credentials** for secure API integration.  

---

## 📸 Chatbot Flow (Example)  
**User**: "Book me a ride for tomorrow at 9 AM"  
**Agentforce Bot**: "Sure! What type of ride would you like: Car, SUV, or Bike?"  
**User**: "Car"  
**Agentforce Bot**: "Your ride has been scheduled for 9 AM tomorrow. Confirmation ID: R12345 🚗"  

---

## 🚀 Installation & Setup  
1. Clone this repo or deploy to your Salesforce org with **SFDX**.
2. Set up **Agentforce / Einstein Bot** with dialog flows that call this app’s Apex/Flow actions.  
3. (Optional) Configure **Named Credentials** if you want to simulate integration with an external ride provider API.  
4. Test ride booking via the **Agentforce chatbot** in Salesforce.  
 
## 📽️ Video Walkthrough
https://youtu.be/JVMPXSqOtNE