import { useParams } from "react-router-dom";
import { Component } from "react";

import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";
const CATEGORIES_URL = "/categorias";
const SUBSCRIBE = "/incripccions";
const COURSESNOSUBSCRIBE_URL = "/cursosnoinscritos/usuario";
const COURSESSUBSCRIBE_URL = "/cursosinscritos/usuario";
import { Link } from "react-router-dom";
import logo from "../img/Logo.png";

import {
  faCheck,
  faTimes,
  faInfoCircle,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Category() {
  const { id } = useParams();
  const { auth } = useContext(AuthContext);
  const [category, setCategory] = useState([]);
  const [coursesSubscribe, setCoursesSubscribe] = useState([]);
  const [coursesNoSubscribe, setCoursesNoSubscribe] = useState([]);

  useEffect(() => {
    axios
      .get(CATEGORIES_URL + "/" + id)
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(COURSESNOSUBSCRIBE_URL + "/" + auth.id)
      .then((res) => {
        setCoursesNoSubscribe(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(COURSESSUBSCRIBE_URL + "/" + auth.id)
      .then((res) => {
        setCoursesSubscribe(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function subscribe(idcourse, e) {
    e.preventDefault();
    axios.post(SUBSCRIBE, {
      curso_id: idcourse,
      user_id: auth.id,
      porcentaje: 0,
    });
  }

  const coursesSubmited = coursesSubscribe.map((courses) =>
    courses.categoria_id == id ? (
      <li className="courses__container__item__li">
        <h1> {courses.nombre}</h1>
        <p> {courses.descripcion}</p>
        <h2>Subscrito</h2>
      </li>
    ) : (
      <></>
    )
  );

  const coursesNoSubmited = coursesNoSubscribe.map((courses) =>
    courses.categoria_id == id ? (
      <li className="courses__container__item__li">
        <h1> {courses.nombre}</h1>
        <p> {courses.descripcion}</p>
        <button onClick={(e) => subscribe(courses.id, e)}>
          <Link to={"/user"}>Inscribirse</Link>
        </button>
      </li>
    ) : (
      <></>
    )
  );

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
      <section className="category">
        <div className="category__container">
          <div className="category__container__title">
            <h1>Categoria</h1>
            <p>{category.nombre}</p>
          </div>
          <h1>Cursos</h1>
          <div className="courses__container">
            <div className="courses__container__data">
              <div className="courses__container__item">
                <ul>{coursesSubmited}</ul>
              </div>
              <div className="courses__container__item">
                <ul>{coursesNoSubmited}</ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Category;
