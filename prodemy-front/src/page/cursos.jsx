import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";
const COURSESSUBSCRIBE_URL = "/cursosinscritos/usuario";

import "../css/courses.css";
import { Link } from "react-router-dom";

function Cursos() {
  const { auth } = useContext(AuthContext);
  const [coursesSubscribe, setCoursesSubscribe] = useState([]);

  useEffect(() => {
    axios
      .get(COURSESSUBSCRIBE_URL + "/" + auth.id)
      .then((res) => {
        setCoursesSubscribe(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="courses__container">
        <div className="courses__container__title">
          <h1>Cursos</h1>
        </div>
        <div className="courses__container__data">
          <div className="courses__container__item">
            <ul>
              {coursesSubscribe.map((leccions) => (
                <li key={leccions.id} className="courses__container__item__li">
                  <h1> {leccions.nombre}</h1>
                  <p> {leccions.descripcion}</p>
                  <p>{leccions.cantidadSeguimientos} / {leccions.cantidadLecciones}</p>
                  <progress
                    value={leccions.cantidadSeguimientos}
                    max={leccions.cantidadLecciones}
                  ></progress>
                  <button>
                    <Link to={`/curso/${leccions.id}`}>Entrar</Link>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cursos;
