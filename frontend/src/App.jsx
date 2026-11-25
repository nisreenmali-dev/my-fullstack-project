import React from "react";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  async function greet() {
    if (!name.trim()) {
      setMessage("Please enter your name!");
      return;
    }

    try {
      const response = await fetch(
        "http://13.239.12.95:5000/api/greet",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ name })
        }
      );

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage("Unable to connect to backend!");
    }
  }

  return (
    <div className="container">
      <h1>Greetings Application</h1>

      <p>Enter your name to receive a greeting.</p>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={greet}>
        Send
      </button>

      <h2>{message}</h2>
    </div>
  );
}

export default App;
