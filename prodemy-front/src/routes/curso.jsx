import { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";
const LECCIONS_URL = "/leccions/curso";
const SEGUIMIENTO_URL = "/seguimientos";
import { Link } from "react-router-dom";
import logo from "../img/Logo.png";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/categories.css";
import { useParams } from "react-router-dom";
function Curso() {
  const { auth } = useContext(AuthContext);
  const { id } = useParams();
  const [course, setCourse] = useState([]);

  useEffect(() => {
    fecthCourse();
  }, []);

  const fecthCourse = () => {
    axios
      .get(LECCIONS_URL + "/" + id)
      .then((res) => {
        setCourse(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function crearSeguimiento(e, leccion_id) {
    e.preventDefault();
    axios.post(SEGUIMIENTO_URL, {
      leccion_id: leccion_id,
      user_id: auth.id,
      fechaAcceso: "hoy",
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
          <h1 className="course__container__title">Curso</h1>
          <ul className="course__container__list">
            {course.map((course) => (
              <li key={course.id} className="course__container__list__item">
                <div className="course__container__list__item__edit">
                  <h1>{course.tema}</h1>
                  <p>{course.contenido}</p>
                  <button onClick={(e) => crearSeguimiento(e, course.id)}>
                    <Link to={`/lesson/${course.id}`}>Ver Curso</Link>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Curso;
