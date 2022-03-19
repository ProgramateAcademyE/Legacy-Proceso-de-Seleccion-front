import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
// import {
//   showErrMsg,
//   showSuccessMsg
// } from '../../notification/Notification'
import { useDispatch, useSelector } from "react-redux";
import auth from "./Auth.module.css";
import { dispatchLogin } from "../../actions/authAction";
import Spinner from "./Spinner";
import programateacademycolor from '../../../dist/Assets/programateacademycolor.png';

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
  const [isFailing, setIsFailing] = useState({
    email: false,
    password: false,
  });
  const auth = useSelector((state) => state.auth);

  const history = useHistory();
  const { email, password, err, success } = user;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setIsFailing({ email: false, password: false });
    setUser({ ...user, [name]: value, err: "", success: "" });
  };
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    guardarSpinner(true);
    if (validateEmail(user.email) === null) {
      if (user.password.length < 6) {
        setIsFailing({
          email: true,
          password: true,
        });
      } else {
        setIsFailing({
          email: true,
          password: false,
        });
      }
      setTimeout(() => {
        guardarSpinner(false);
      }, 300);

      return;
    } else {
      if (user.password.length < 6) {
        if (validateEmail(user.email) === null) {
          setIsFailing({
            password: true,
            email: true,
          });
        } else {
          setIsFailing({
            password: true,
            email: false,
          });
        }
        setTimeout(() => {
          guardarSpinner(false);
        }, 300);
        return;
      }
    }
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
    <div className='Logo__Programate'><img src={programateacademycolor} alt='Logo'/></div> 
      <div className="cardLoggin">
        <div className="mensajes">{componentes}</div>
        <div className="login_page">
          <h2>Iniciar Sesión</h2>
          {/* {err && showErrMsg(err)}
      {success && showSuccessMsg(success)} */}

          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Correo</label>
              <input
                className={`email ${isFailing.email ? "fail" : ""}`}
                type="text"
                placeholder="Correo"
                id="email"
                value={email}
                name="email"
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <label htmlFor="password">Contraseña</label>
              <input
                className={`password ${isFailing.password ? "fail" : ""}`}
                type="password"
                placeholder="Contraseña"
                id="password"
                value={password}
                name="password"
                onChange={handleChangeInput}
              />
            </div>

            <div className="row">
              <Link to="" ><p>Olvidaste tu contraseña?</p></Link>
              <button type="submit">Iniciar Sesión</button>
            </div>
          </form>
          <p>
            Nuevo usuario? <Link to="/register">Registrate</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
