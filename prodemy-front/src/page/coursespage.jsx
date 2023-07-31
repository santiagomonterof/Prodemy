import { useRef, useState, useEffect, useContext } from "react";
import logo from "../img/Logo.png";
import axios from "../api/axios";
const COURSESBYCATEGORY_URL = "/cursos/categoria";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {
    faCheck,
    faTimes,
    faInfoCircle,
    faArrowLeft,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/courses.css";

function Coursespage() {
  const [coursesbycategory, setCoursesbycategory] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(COURSESBYCATEGORY_URL + "/" + id)
      .then((res) => {
        setCoursesbycategory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
      <div className="courses__container">
        <div className="courses__container__title">
          <h1 className="title_courses">Cursos</h1>
        </div>
        <div className="courses__container__data">
          <div className="courses__container__item">
            <ul>
              {coursesbycategory.map((courses) => (
                <li key={courses.id} className="courses__container__item__li">
                  <h1> {courses.nombre}</h1>
                  <p> {courses.descripcion}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Coursespage;
