import React, { useState } from "react";
import "../style/Content.css"; // Buat file MessageForm.css untuk menyimpan stiling CSS

const MessageForm = () => {
  const [message, setMessage] = useState("");
  const [messageHistory, setMessageHistory] = useState([]);

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessageHistory((prevHistory) => [...prevHistory, message]);
    console.log("Pesan yang dikirim:", message);
    setMessage("");
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <label>
        Masukkan Pesan:
        <input type="text" value={message} onChange={handleInputChange} />
      </label>
      <button type="submit">Kirim</button>
      <div>
        <p>Riwayat Pesan:</p>
        <ul>
          {messageHistory.map((historyMessage, index) => (
            <li key={index}>{historyMessage}</li>
          ))}
        </ul>
      </div>
    </form>
  );
};

export default MessageForm;
