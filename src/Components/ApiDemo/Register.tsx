import React, { useState } from "react";
import axios from "axios";

const url = "https://angularjwtauthentication.herokuapp.com/api/user";

type RegisterProps = {
    setIsRegister: (isRegister: boolean) => void;
}

const Register = ({setIsRegister}: RegisterProps) => {
    const [registerInputs, setRegisterInputs] = useState({
      name: "",
      email: "",
      password: "",
    });
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setRegisterInputs({ ...registerInputs, [e.target.name]: e.target.value });
    };
  
    const handleRegister = () => {
      axios
        .post(`${url}/register`, registerInputs)
        .then((res) => {
          alert("User Registered successfully");
          setIsRegister(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
    return (
      <div className="row m-3">
        <div className="col">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Name"
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email"
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <button className="btn btn-primary mb-3" onClick={handleRegister}>
            Register
          </button>
        </div>
      </div>
    );
  };

export default Register;