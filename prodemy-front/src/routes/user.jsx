import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import logo from "../img/Logo.png";
import { Link } from "react-router-dom";
import {
  faCheck,
  faTimes,
  faInfoCircle,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Categories from "../page/categories";
import Cursos from "../page/cursos";


function User() {
  const { auth } = useContext(AuthContext);

  return (
    <>
      <div className="header__container">
        <div className="header__container__logo">
          <img src={logo} />
          <h1>Prodemy</h1>
          <Link to="/">
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="register__container__back"
            />
          </Link>
        </div>
      </div>
      <div className="user__container">
        <div className="user__container__data">
          <h1>Usuario</h1>
          <p>Nombre: {auth.nombre}</p>
          <p>Email: {auth.email}</p>
        </div>
      </div>
      <Categories />
      <Cursos />
    </>
  );
}

export default User;
