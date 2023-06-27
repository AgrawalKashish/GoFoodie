import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
export default function Login() {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({

    email: "",
    password: "",
   
  });
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if(json.success){
      localStorage.setItem('userEmail', credentials.email);
       localStorage.setItem('authToken', json.authToken);
       console.log(localStorage.getItem('authToken'));
       navigate('/');
    }
    else{
        alert("User Not Found")
        }
  };
  return (
   <>
    <Navbar/>
    <div className="conatiner">
    <form onSubmit={handlesubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          name="email"
          value={credentials.email}
          onChange={onChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          name="password"
          value={credentials.password}
          onChange={onChange}
        />
      </div>

      <button type="submit" className="btn btn-success">
        Submit
      </button>
      <h4 className="mt-3"> Don't have account?</h4>
      <Link to="/login" className="m-3 btn btn-danger">
       SignUp!
      </Link>
    </form>
  </div>
   </>
  )
}
