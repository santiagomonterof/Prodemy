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

import TaskFormCategory from "../components/taskformcategory";
import TaskListCategory from "../components/tasklistcategory";

import TaskFormCourse from "../components/taskformcourse";
import TaskListCourse from "../components/tasklistcourse";

import TaskFormLesson from "../components/taskformlesson";
import TaskListLesson from "../components/tasklistlesson";

function UserAdmin() {
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
      <div className="admin__title">
        <h1>ADMIN</h1>
      </div>
      <main className="admin__container">
        <div className="admin__container__data">
          <TaskFormCategory />
          <TaskListCategory />
        </div>
      </main>
      <main className="admin__container">
        <div className="admin__container__data">
          <TaskFormCourse />
          <TaskListCourse />
        </div>
      </main>
      <main className="admin__container">
        <div className="admin__container__data">
          <TaskFormLesson />
          <TaskListLesson />
        </div>
      </main>
    </>
  );
}

export default UserAdmin;
