"use client";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  function book() {
    if (!name || !date) {
      setMessage("Please enter your name and date.");
      return;
    }
    setMessage(`Booking confirmed for ${name} on ${date}!`);
    setName("");
    setDate("");
  }

  return (
    <main style={{ padding: 20 }}>
      <h1>English Class Booking</h1>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ display: "block", marginBottom: 10 }}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        style={{ display: "block", marginBottom: 10 }}
      />
      <button onClick={book}>Book Now</button>
      <p>{message}</p>
    </main>
  );
}
