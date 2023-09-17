import React, { useEffect, useState } from "react";
import "./Registration.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Top from "../Header/Top";
const Register = () => {
  const [formData, setFromData] = useState({
    name: "",
    phoneNo: "",
    email: "",
    password: "",
  });
  const [submit, setSubmit] = useState(false);
  const [response, setResponse] = useState("");
  useEffect(() => {
    // const baseUrl = "https://handson4-server.onrender.com/Register";
    const baseUrl="https://blog-server-mm8b.onrender.com/Register";
    // const baseUrl="http://localhost:4040/Register";
    axios.post(baseUrl, formData).then((res) => {
      setResponse(res.data);
      console.log(res.data);
    });
    setFromData({
      name: "",
      phoneNo: "",
      email: "",
      password: "",
    });
  }, [submit]);
  const handleChange = (e) => {
    setFromData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (
      formData.name != 0 &&
      formData.email != 0 &&
      formData.password != 0 &&
      formData.phoneNo != 0
    ) {
      setSubmit(!submit);
    } else {
      setResponse({ message: "fill the form" });
    }
  };
  return (
    <>
      <div className="registrationHeader">
    
    <Top />

  </div>
    <div className="registration">
      <div className="registerContainer">
      <img className="registerImg" src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-blogging_516790-1481.jpg?w=2000" alt="not found" />
        
        <form className="register">
          <h1 className="registerHeading">Registration Page</h1>
          <fieldset>
            <legend>Name</legend>
            {/* Name, Phone, Email and Password */}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your Name"
              required
            />
          </fieldset>
          <fieldset>
            <legend>Phone number</legend>
            {/* Name, Phone, Email and Password */}
            <input
              type="text"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              placeholder="Enter your Phone number"
              required
            />
          </fieldset>
          <fieldset>
            <legend>Email</legend>
            {/* Name, Phone, Email and Password */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your Email"
              required
              />
          </fieldset>
          <fieldset>
            <legend>Password</legend>
            {/* Name, Phone, Email and Password */}
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your Password"
              required
            />
          </fieldset>
          {/* <div className="message">Your are already registered</div> */}
          <div className="message">{response && response.message}</div>
          <button className="registerButton" onClick={handleClick}>
            Submit
          </button>
          <div className="goto" >
            go to <Link className="link" to={"/Login"}>Login page</Link>
          </div>
        </form>
      </div>
    </div>
              </>
  );
};

export default Register;