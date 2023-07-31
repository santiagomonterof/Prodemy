import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";
import { Link } from "react-router-dom";
import {
  faCheck,
  faTimes,
  faInfoCircle,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Learn() {
  const { auth } = useContext(AuthContext);

  useEffect(() => {}, []);

  const fecth = () => {};

  return (
    <>
      <div className="learn">
        <div className="learn__title">
          <div className="learn__title__data">
            <h1>
              ¿ Qué puedes aprender en <strong>Prodemy ?</strong>
            </h1>
            <p>¡Publicamos cursos nuevos cada semana para que #Notedetengas!</p>
          </div>
        </div>
        <div className="learn__container">
          <div className="learn__container__banner">
            <div className="learn__container__banner__left">
              <h1>Desarrollo de software, cloud y inteligencia artificial</h1>
              <p>
                ¡Domina las áreas con más demanda de trabajo! Estudia desde cero
                hasta experto programación, bases de datos, machine learning,
                seguridad informática, desarrollo móvil o videojuegos.
              </p>
            </div>
            <div className="learn__container__banner__right">
              <img src="src\img\computer.png"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Learn;
