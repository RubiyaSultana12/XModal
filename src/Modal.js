import React, { useState } from "react";
import './App.css';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("username").value.trim();
    const dob = document.getElementById("dob").value.trim();
    const phone = document.getElementById("phone").value.trim();

    if (!email || !username || !dob || !phone) {
      alert("All fields are required.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Invalid email. Please check your email address.");
      return;
    }
    
    if (!/^\d{10}$/.test(phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }
    
    setIsOpen(false);
  };

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("modal")) {
      setIsOpen(false);
    }
  };

  return (
    <div>
      {!isOpen && (
        <button onClick={() => setIsOpen(true)}>Open Form</button>
      )}
      {isOpen && (
        <div className="modal" onClick={handleOutsideClick}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleSubmit}>
              <label>Email:</label>
              <input type="email" id="email" required />
              <label>Username:</label>
              <input type="text" id="username" required />
              <label>Date of Birth:</label>
              <input type="date" id="dob" required />
              <label>Phone Number:</label>
              <input type="tel" id="phone" required />
              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
