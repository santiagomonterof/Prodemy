import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../img/Logo.png";

class Header extends Component {
  state = { clicked: false };
  handleClick = () => {
    if (this.state.clicked === false) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <>
        <div className="header__container" onResize={this.handleResize}>
          <div className="header__container__logo">
            <img src={logo} />
            <h1>Prodemy</h1>
            <div></div>
          </div>
          <div
            id="header__container__navbar"
            className={
              this.state.clicked
                ? "#header__container__navbar active"
                : "#header__container__navbar"
            }
          >
            <ul>
              <li id="header__container__navbar__item">
                <Link to="./">Planes</Link>
              </li>
              <li id="header__container__navbar__item">
                <Link to="./register">Registrar</Link>
              </li>
              <li id="header__container__navbar__item">
                <Link to="./login">Iniciar Sesión</Link>
              </li>
            </ul>
          </div>
          <div
            id="header__container__navbar__mobile"
            onClick={this.handleClick}
          >
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </div>
      </>
    );
  }
}
export default Header;
