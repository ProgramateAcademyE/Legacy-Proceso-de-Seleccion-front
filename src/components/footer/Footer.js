import React from "react";
import logo from "./img/programate-blanco-alta.svg";
import educamas from "./img/programate 1 (1).svg";
import "./HeaderF.css";


export default function Footer() {
  return (
    <footer className="pie-pagina">
      <div className="grupo-1">
        <div className="logoAndSocialNetworksContainer">
          <div className="box">
            <figure>
              <a href="#">
                <picture>
                  <source srcSet={educamas} media="(max-width: 760px)" />
                  <img src={logo} alt="Logo Educamás" className="Educamas" />
                </picture>
              </a>
            </figure>
          </div>
          <div className="box2">
            <div className="socialNetworksContainer">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-instagram"></i>
              <i className="logo programte"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="grupo-2">
        <small>&copy; 2022 - Todos los Derechos Reservados.</small>
      </div>
    </footer>
  );
}
