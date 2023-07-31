import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";
const LOGIN_URL = "auth/login";
import logo from "../img/Logo.png";
import { Link } from "react-router-dom";
import { faCheck, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const login = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(LOGIN_URL, {
        name: user,
        password: pwd,
      });
      console.log(JSON.stringify(response?.data));
      setAuth(response.data);
      setUser("");
      setPwd("");
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("Sevidor no responde");
      } else if (err.response?.status === 400) {
        setErrMsg("Faltan datos");
      } else if (err.response?.status === 401) {
        setErrMsg("Nombre de usuario o contraseña incorrectos");
      } else {
        setErrMsg("Inicio de sesión fallido");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
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
          <div className="success__container">
            <h1>Inicio de sesión</h1>
            <p>
              exitoso{" "}
              <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} />
            </p>
            {auth.esAdmin == 1 ? ( <Link to="/useradmin">Continuar</Link>) : (
            <Link to="/user">Continuar</Link>)}
          </div>
        </>
      ) : (
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
          <section className="register__container">
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <form
              className="register__container__title"
              onSubmit={handleSubmit}
            >
              <label htmlFor="username">Usuario:</label>
              <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />

              <label htmlFor="password">Contraseña:</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
              />
              <button className="register__container__button">
                Iniciar Sesión
              </button>
            </form>
            <p className="register__container__back">
              Need an Account?
              <br />
              <span className="line">
                <Link to="/register">Registrar</Link>
              </span>
            </p>
          </section>
        </>
      )}
    </>
  );
};

export default login;
