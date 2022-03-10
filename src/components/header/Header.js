import React, { useEffect } from "react";
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import Search from "../search/Search";
import User from "../user/User";
import "./Header.scss";
import { dispatchGetUser, dispatchLogin, fetchUser } from "../../actions/authAction";

const Header = () => {
  // Menu hamburguesa CODE

  const dispatch = useDispatch()
  const token = useSelector(state => state.token)
  const auth = useSelector(state => state.auth)


  useEffect(()=> {
    const loggedUserJSON = window.localStorage.getItem('loggedAgoraUser')
    const firstLogin = localStorage.getItem('firstLogin')
    if(firstLogin && loggedUserJSON){
      const user = JSON.parse(loggedUserJSON)
      const refreshtoken = user.refresh_token
      
      const getToken = async () =>{

        try {
          const res = await axios.post('http://localhost:3001/api/user/refresh_token',{refreshtoken})
          dispatch({type:'getToken', payload: res.data.access_token})
          
        } catch (error) {
            console.log(error)
        }

      }
      getToken()
      
    }
  }, [auth.isLogged, dispatch])

  useEffect(()=> {
    if(token){
      const getUser = () => {
        dispatch(dispatchLogin())
        return fetchUser(token).then(res => {
          dispatch(dispatchGetUser(res))
        })
      }
      getUser()
    } 
  }, [token, dispatch])

  const moveNav = () => {
    const bar = document.querySelector("#menu");
    bar.classList.toggle("move");
  };

  return (
    <>
      <header className="header d-flex justify-content-between">
        <div className="header__logo" id="logo">
          <Link to="/">
            <img
              src="https://i.ibb.co/ZM3jGdB/logoeducamasimbolo.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="menu-bar">
          <i className="fas fa-bars pointer" onClick={moveNav} />
        </div>
        <div className="header__search">
          <Search />
        </div>
        <div className="header__user">
          <User/>
        </div>
      </header>
    </>
  );
};

export default Header;
