import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Animation from './Animation';
import "./css/Details.css";

const Contact = () => {

  const HOST = "https://teach-for-india-volunteers.onrender.com";
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [num, setNum] = useState('');
  const [date, setDate] = useState('');

  const sendData = async () => {
    let data = {
      "userId": 0,
      "name": user,
      "email": email,
      "contact": num,
      "dob": date,
    }
    const response = await fetch(`${HOST}/api/volunteers/addVolunteers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await response.json();

  };

  const handleSubmit = (e) => {
    e.preventDefault();
     sendData();

     setUser("");
     setEmail("");
     setNum("");
     setDate("");
     
     navigate("/details");
  };
  
  return (
    
    <>
    <div className="wrapper">
        <div className="inner">
          <form onSubmit={handleSubmit}>
            <h3>Contact</h3>

              <input type="text" className="input mb-4" placeholder="Name" value={user} onChange={(e) => setUser(e.target.value)} required/>
              <input type="email" className="input mb-4" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
              <input type="tel" className="input mb-4" placeholder="Contact Number" value={num} onChange={(e) => setNum(e.target.value)} required/>
              <label>Date of Birth</label><br/>
              <input type="date"
                className="input mb-5"
                placeholder="Date of Birth"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />

          
            <button type="submit" id="main" className="mb-3">
              Submit
            </button>
           
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact
