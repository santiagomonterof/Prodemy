import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faJava } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import { faLaravel } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faPhp } from "@fortawesome/free-brands-svg-icons";

const Banner = () => {
  return (
    <div className="banner__conteiner">
      <div className="banner__conteiner__item">
        <h1>Una amplia selección de cursos</h1>
        <p>
          Elige entre más de 204.000 cursos de vídeo en línea con nuevo
          contenido cada mes
        </p>
        <a className="banner__conteiner__item__react">
          <FontAwesomeIcon icon={faReact}></FontAwesomeIcon>
        </a>
        <a className="banner__conteiner__item__laravel">
          <FontAwesomeIcon icon={faLaravel}></FontAwesomeIcon>
        </a>
        <a className="banner__conteiner__item__php">
          <FontAwesomeIcon icon={faPhp}></FontAwesomeIcon>
        </a>
        <a className="banner__conteiner__item__html">
          <FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon>
        </a>
        <a className="banner__conteiner__item__css">
          <FontAwesomeIcon icon={faCss3}></FontAwesomeIcon>
        </a>
        <a className="banner__conteiner__item__js">
          <FontAwesomeIcon icon={faJs}></FontAwesomeIcon>
        </a>
      </div>
    </div>
  );
};

export default Banner;
