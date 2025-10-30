import React from "react";

export default function DisplayUi({ command }) {
  return (
    <div className="command-box">
      <h4>Recognized Command:</h4>
      <p>{command ? command : "you are not specking  yet."}</p>
    </div>
  );
}
