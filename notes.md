# Description for:— Voice Command App (React + Vite)

# Main Goal
The main goal of this project was to make a small React app that can wake up when you say `hello`, listen to your voice command, and then show the recognized text on UI and make sure all the states like Idle, Listening, Awake, Processing, and Result were clearly shown.

---

## for Designing 

## 1️. Framework
I used [@React.js] with [@Vite] because it’s quick to set up, super fast, and great for testing small ideas like this.  


## 2️. Voice Recognition
I used the `react-speech-recognition library` — it’s a wrapper around the browser’s Web Speech API and gives hooks called

`transcript` → the text recognized from speech

`listening` → tells the app is on listing mode ar not

`resetTranscript()` → clears previous input
This made handling voice input in React really straightforward.
This made it easier to manage speech input directly from React.

## 3️. Wake Word Logic
The app always listens in a mode called `MicActive`.
When it hears the word `“hello”`, it switches to Awake mode and asks the user to say a command.
After that, it goes into `Processing` mode to capture what’s being said next.

## 4️. UI State Management
I used a`mode` state variable to show what the app is doing.

 Mode                        Description 
---------------------------------------------------------------
 `Idle`                     Waiting for user to say something 
 `MicActive`                Listening for the wake word 
 `Awake`                    Wake word detected 
 `Processing`               Listening for command 
 `Result`                   Showing recognized text 
 `Error`                    Microphone or browser issue 

Each mode has its own border color so the user can easily see the current Mode (gray, orange, blue, yellow, green, red).

## 5️. Timeout Handling
If the user doesn’t speak for 5 seconds, the app automatically resets back to Idle.

## 6️. Reusable UI
I built a small component called (`DisplayUi.jsx`) to show the Users command separately that make code cleaner and easier to maintain.

## 7️. Styling
I used a small CSS file (`voicecommand.css`) inside the components folder to add basic colors, spacing, and borders 

---

### Third-Party Packages Used

Package	                         Purpose	                                           Why
----------------------------------------------------------------------------------------------------------------------
react-speech-recognition	    Voice-to-text	                         Simple and reliable Web Speech API wrapper
react	                        UI framework	                         Easy to manage states and components
vite	                        Development tool	                      Super fast dev server and builds

---

#### Limitations

The wake word is detected by simple string matching — not an offline detection model.
It needs an internet connection since browser speech recognition runs online.

---

##### Summary
This app is a small experiment to understand how voice input can be handled in React.
It covers:-
* React state management
* Using browser speech APIs
* Handling different voice interaction states smoothly
It’s lightweight, easy to run, and a fun example of how a browser app can respond to your voice in real time.