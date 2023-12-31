import React from 'react';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/Admin.css";

const Info = () => {
    const getFormatedDate = (date) => {
        const d = new Date(date);
        const month = d.getMonth() + 1;
        const day = d.getDate();
        const year = d.getFullYear();
        return `${year}-${month < 10 ? "0" + month : month}-${day < 10 ? "0" + day : day}`;
      };
  const HOST = "https://teach-for-india-volunteers.onrender.com";
  const [information, setInformation] = useState([
    {
      _id : 1,
      userId: 0,
      location: "",
      languages: "",
      availabilty: "",
    },
  ]);
  const getData = async () => {
      const response = await fetch(`${HOST}/api/information/getInformation`, {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
            },
        });
        const res = await response.json();
        setInformation(res);
    };
    useEffect(() => {
        getData();
    },[]);
  return (
    <>
    <div className="text-center content">
    <h3>Other Details of Volunteers</h3>
        <table className="table table-bordered">

            <thead className="head">
                <tr>
                    <th scope="col">Sr.no.</th>
                    <th scope="col">Location</th>
                    <th scope="col">Language Spoken</th>
                    <th scope="col">Availabilty</th>
                </tr>
            </thead>
            <tbody>
            {information &&
              information.map((i, index) => {
                return (
                    <tr key={i._id}>
                      <td>{index}</td>
                      <td>{i.location}</td>
                      <td>{i.languages}</td>
                      <td>{i.availability}</td>
                    </tr>
                )
              })}
            </tbody>

        </table>
    </div>

    </>
  )
}

export default Info
