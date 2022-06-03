import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  ITEMS,
  ITEMS_ASPIRANTS,
  ITEMS_INTERVIEWER,
  ITEMS_VIEWER,
  ITEMS_MODERATOR,
} from "../../api/data";
import Item from "../item/Item";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const [activeItems, setActiveItems] = useState([]);

  const auth = useSelector((state) => state.auth);
  const { isLogged /*isAdmin, isModerator, isInterviewer, isViewer*/ } = auth;
  const role = auth.user.role;
  console.log("Role en nav", role);
  console.log("En Nav", role === 4);

  const toggleItem = (id) => {
    if (activeItems.find((active) => active === id)) {
      const nuewArry = activeItems.filter((active) => active !== id);
      setActiveItems(nuewArry);
    } else {
      setActiveItems([...activeItems, id]);
    }
  };
  const moveNav = () => {
    const bar = document.querySelector("#menu");
    bar.classList.toggle("move");
  };

  const isActive = ITEMS.findIndex(
    (item) => item.pathname === location.pathname
  );
  const isActiveAspirant = ITEMS_ASPIRANTS.findIndex(
    (item) => item.pathname === location.pathname
  );
  const isInterviewer1 = ITEMS_INTERVIEWER.findIndex(
    (item) => item.pathname === location.pathname
  );

  return role !== undefined ? (
    <>
      <div className="nav" id="menu">
        {/*<Link to="/dashboard">*/}
        <img
          className="Logo_Lapiz"
          src="https://i.ibb.co/ZM3jGdB/logoeducamasimbolo.png"
          alt="logo"
        />
        {/*</Link>*/}

        <span className="nav__title">Menu</span>
        <div className="nav__items mt-2">
          <nav className="nav__fixed">
            {isLogged &&
              (role === 1
                ? ITEMS.map((item, index) => (
                    <Item
                      key={index}
                      item={item}
                      toggleItem={() => toggleItem(item.id)}
                      activeItems={activeItems}
                      active={index === isActive}
                    />
                  ))
                : role === 2
                ? ITEMS_MODERATOR.map((item, index) => (
                    <Item
                      key={index}
                      item={item}
                      toggleItem={() => toggleItem(item.id)}
                      activeItems={activeItems}
                      active={item.pathname === location.pathname}
                    />
                  ))
                : role === 4 || role === 3
                ? ITEMS_INTERVIEWER.map((item, index) => (
                    <Item
                      key={index}
                      item={item}
                      toggleItem={() => toggleItem(item.id)}
                      activeItems={activeItems}
                      active={index === isInterviewer1}
                    />
                  ))
                : ITEMS_ASPIRANTS.map((item, index) => (
                    <Item
                      key={index}
                      item={item}
                      toggleItem={() => toggleItem(item.id)}
                      activeItems={activeItems}
                      active={item.pathname === location.pathname}
                    />
                  )))}

            <div>
              <a
                href="#close"
                title="close"
                className="close"
                style={{ margin: "-40px -163px 0 0" }}
                onClick={moveNav}
              >
                X
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default Nav;
