import React, { useState } from "react";
import axios from "axios";

const url = "https://angularjwtauthentication.herokuapp.com/api/user";

type LoginProps = {
  setLogout: (logout: boolean) => void,
  setIsLogin: (isLogin: boolean) => void
}

const Login = ({setLogout, setIsLogin} : LoginProps) => {
  const [loginInputs, setLoginInputs] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInputs({ ...loginInputs, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    axios
      .post(`${url}/login`, loginInputs)
      .then((res) => {
        sessionStorage.setItem("token", res.data.token);
        alert('Logged in Successfully');
        setLogout(true);
        setIsLogin(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="row m-3">
      <h1>Login</h1>
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
        <button className="btn btn-primary mb-3" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

Login.defaultProps= {
  setLogout: (value: boolean) => console.log('Default', value),
  setIsLogin: (value: boolean) => console.log('Default', value),
}

export default Login;