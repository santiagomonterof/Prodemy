import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";
const CATEGORIES_URL = "/categorias";
import { Link } from "react-router-dom";
import {
  faCheck,
  faTimes,
  faInfoCircle,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/categories.css";

function categories() {
  const { auth } = useContext(AuthContext);
  const [listCategories, setListCategories] = useState([]);

  useEffect(() => {
    fecthCategories();
  }, []);

  const fecthCategories = () => {
    axios
      .get(CATEGORIES_URL)
      .then((res) => {
        setListCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="categories__container">
        <h1 className="categories__container__title">Categorias</h1>
        <ul className="categories__container__list">
          {listCategories.map((category) => (
            <li key={category.id} className="categories__container__list__item">
              <div className="categories__container__list__item__edit">
                <img src="src\img\category1.jpg"></img>
                <div className="categories__container__list__item__edit__text">
                  <h1>{category.nombre}</h1>
                  <Link to={`/category/${category.id}`}>Ver Detalles</Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default categories;
