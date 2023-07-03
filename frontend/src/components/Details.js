import React from 'react';
import { useState } from "react";
import "./css/Details.css";

const Details = () => {
  const HOST = "https://teach-for-india-volunteers.onrender.com";
  const [location, setLocation] = useState('');
  const [lang, setLang] = useState('');
  const [avail, setAvail] = useState('');

  const sendData = async () => {
    let data = {
      "userId": 0,
      "location": location,
      "languages": lang,
      "availability": avail,
    }
    const response = await fetch(`${HOST}/api/information/addInformation`, {
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
     setLocation("");
     setLang("");
     setAvail("");
  };
  return (
    <>
      <div className="wrapper">
        <div className="inner">
          <form onSubmit={handleSubmit}>
            <h3>Details</h3>

              <input type="text" className="input mb-4" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} required/>
              <textarea type="text" className="input mb-4" placeholder="Languages spoken" value={lang} onChange={(e) => setLang(e.target.value)} required/>

              <input type="text"
                className="input mb-5"
                placeholder=" Availability"
                value={avail} onChange={(e) => setAvail(e.target.value)} required
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

export default Details
