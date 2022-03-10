import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
// import {
//   showErrMsg,
//   showSuccessMsg
// } from '../../notification/Notification'
import { useDispatch, useSelector } from "react-redux";
import "./auth.css";
import { dispatchLogin } from "../../actions/authAction";
import Spinner from "./Spinner";

const Login = () => {
  //Inicializo hooks
  const [user, setUser] = useState({
    email: "",
    password: "",
    err: "",
    success: "",
  });

  const [spinner, guardarSpinner] = useState(false);
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  const history = useHistory();
  const { email, password, err, success } = user;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value, err: "", success: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    guardarSpinner(true);

    try {
      const res = await axios.post("http://localhost:3001/api/user/login", {
        email,
        password,
      });

      setUser({ ...user, err: "", success: res.data.msg });
      window.localStorage.setItem("firstLogin", true);
      window.localStorage.setItem("loggedAgoraUser", JSON.stringify(res.data));
      dispatch(dispatchLogin());
      guardarSpinner(false);
      history.push("/dashboard");
    } catch (err) {
      err.response.data.error &&
        setUser({ ...user, err: err.response.data.error, success: "" });
      console.log("El error", err);
      guardarSpinner(false);
    }
  };

  let componentes;
  if (spinner) {
    componentes = <Spinner />;
  }

  return (
    <>
      <div className="mensajes">{componentes}</div>
      <div className="login_page">
        <h2>Login</h2>
        {/* {err && showErrMsg(err)}
      {success && showSuccessMsg(success)} */}

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              className="email"
              type="text"
              placeholder="Enter email address"
              id="email"
              value={email}
              name="email"
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              className="password"
              type="password"
              placeholder="Enter password"
              id="password"
              value={password}
              name="password"
              onChange={handleChangeInput}
            />
          </div>

          <div className="row">
            <button type="submit">Login</button>
          </div>
        </form>
        <p>
          New Customer? <Link to="/">Register</Link>
        </p>
      </div>
    </>
  );
};

export default Login;
