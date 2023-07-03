import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/Admin.css";

const Admin = () => {
    const getFormatedDate = (date) => {
        const d = new Date(date);
        const month = d.getMonth() + 1;
        const day = d.getDate();
        const year = d.getFullYear();
        return `${year}-${month < 10 ? "0" + month : month}-${day < 10 ? "0" + day : day}`;
      };
  const HOST = "http://127.0.0.1:5000";
  const [volunteers, setVolunteers] = useState([
    {
      _id : 1,
      userId: 0,
      name: "",
      email: "",
      contact: 0,
      dob: "",
    },
  ]);
  const getData = async () => {
      const response = await fetch(`${HOST}/api/volunteers/getVolunteers`, {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
            },
        });
        const res = await response.json();
        setVolunteers(res);
    };
    useEffect(() => {
        getData();
    },[]);
  return (
    <>
      <div className="text-center content">
        <h3>Contact Details of Volunteers</h3>
        <table className="table table-bordered">
          <thead>
            <tr className="head">
              <th scope="col">Sr.no.</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Contact Number</th>
              <th scope="col">Date of Birth</th>
            </tr>
          </thead>
          <tbody>
            {volunteers &&
              volunteers.map((v, index) => {
                return (
                    <tr key={v._id}>
                      <td>{v.userId}</td>
                      <td>{v.name}</td>
                      <td>{v.email}</td>
                      <td>{v.contact}</td>
                      <td>{getFormatedDate(v.dob)}</td>
                    </tr>
                )
              })}

          </tbody>
        </table>
      </div>
    </>
  );
};

export default Admin;
