import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./style.css";

function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar ">
        <div className="navbar-container">
          <div className="navbar-logo" onClick={closeMobileMenu}>
            <img className="logo" src="./img/grato_logo.png" />
            Grato
          </div>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fa fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                smooth
                to="#home"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth
                to="#about"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Sobre
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth
                to="#func"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Funcionalidades
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth
                to="#demo"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Demo da App
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
