import { useEffect, useState } from "react";
import axios from "axios";
import Login from "./Login";
import Register from "./Register";

const url = "https://angularjwtauthentication.herokuapp.com/api/user";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [logout, setLogout] = useState(false);

  useEffect(() => {
    if(!logout) sessionStorage.removeItem('token');
  }, [logout]);

  const handleAuth = () => {
    let token = sessionStorage.getItem("token");
    if (!token) {
      alert("Please login");
      return;
    }
    axios
      .get(`${url}/list`, {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        alert(res.data.text);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <button
        className="btn btn-info m-3"
        onClick={!logout ? () => {setIsLogin(!isLogin); setIsRegister(false)} : () => setLogout(false)}
      >
        {" "}
        {logout ? "Logout" : "Login"}
      </button>
      <button className="btn btn-danger m-3" onClick={() => {setIsRegister(!isRegister); setIsLogin(false)}}>Register</button>
      <button className="btn btn-warning m-3" onClick={handleAuth}>
        List
      </button>
      <div>{isLogin ? <Login setLogout={setLogout} setIsLogin={setIsLogin} /> : ''}</div>
      <div>{isRegister ?  <Register setIsRegister={setIsRegister} /> : ''}</div>
    </div>
  );
};

export default Auth;
