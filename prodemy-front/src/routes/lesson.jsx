import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";
const LECCIONS_URL = "/leccions";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import logo from "../img/Logo.png";

import {
  faCheck,
  faTimes,
  faInfoCircle,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/categories.css";
import { useParams } from "react-router-dom";
function Lession() {
  const { auth } = useContext(AuthContext);
  const { id } = useParams();
  const [lesson, setLesson] = useState([]);

  useEffect(() => {
    chargeLesson();
  }, []);

  function chargeLesson() {
    axios
      .get(LECCIONS_URL + "/" + id)
      .then((res) => {
        setLesson(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
      <div className="course__container">
        <div className="course__container__back">
          <h1 className="course__container__title">Lección</h1>
          <ul className="course__container__list">
            <div className="course__container__list__item__edit">
              <h1>{lesson.tema}</h1>
              <p>{lesson.contenido}</p>
              <div className="video">
                <ReactPlayer
                  url={lesson.video}
                  controls
                  sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation allow-presentation"
                  allowfullscreen
                />
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Lession;
