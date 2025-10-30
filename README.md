#  Voice Command App — React + Vite

A small browser-based voice assistant app built using **React.js (Vite)**.  
It listens for a **wake word (“hello”)**, captures a **voice command**, and displays the recognized text with simple and clear UI states.

---

##  Project Overview

This project was created as part of the **THworks assessment (Option A — React/React Native)**.  
The goal was to show understanding of:
* React component structure and state management
* Browser speech recognition integration
* Handling of user interaction through visual feedback (UI states)

---

##  Features

- Wake phrase detection (“hello”)  
- Voice command recognition using browser speech-to-text  
- Dynamic UI state transitions (idle, listening, awake, processing, result)  
- Clear visual indicators for each state  
- Timeout reset if the user doesn’t speak  

---

##  Tech Stack

Library                           Purpose 
------------------------------------------------------------------------
 React + Vite                     Frontend framework and fast bundler 
 react-speech-recognition         Handles speech-to-text recognition 
 CSS                              Basic styling and state colors 

---

##  Setup & Run Instructions

Follow these simple steps to run the project locally:

```bash
### 1️. Clone the Repository

https://github.com/Shreya-Bhardwaj21/My-voiceApp.git
cd My-voiceApp.

---

### 2️. Install Dependencies
npm install
### 3️. Start the Development Server
npm run dev
4️. Open in Browser
http://localhost:5173/

### 4. Permissions Needed

The browser will ask for microphone permission give the permission.

```

### Folder Structure:-
voice-command-app/
├── public/
│   └── index.html
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   └── components/
│       ├── VoiceCommand.jsx
│       ├── DisplayUi.jsx
│       └── VoiceCommand.css
├── package.json
├── vite.config.js
├── README.md
├── notes.md
└── DECLARATION.md

#### How It Works

App always starts in `Idle` mode
Listens continuously for the word `“hello”`
When wake word is detected → switches to `Awake` mode
Captures and displays your command text in Ui
Resets automatically after a short timeout


#### Limitations

Needs internet connection (Web Speech API is cloud-based)
Wake word is basic string detection (not machine-learned)