import React from "react";
import './app.css';
import Voicecommand from "./Components/Voicecommand";

function App() {

  return (
    <>
     <nav className="navbar">
      <div className="nav-brand"><span className="nav-logo">🎙️</span> Voice App</div>
     </nav>
     <Voicecommand/>
    </>
  )
}

export default App
