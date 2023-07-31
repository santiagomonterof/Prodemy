import { Route, Routes } from "react-router-dom";
import App from "./App";
import Register from "./routes/register";
import Login from "./routes/login";
import User from "./routes/user";
import UserAdmin from "./routes/useradmin";
import Category from "./routes/category";
import Curso from "./routes/curso";
import Lesson from "./routes/lesson";
import CoursesPage from "./page/coursespage";

import "./css/index.css";
import "./css/header.css";
import "./css/banner.css";
import "./css/register.css";
import "./css/login.css";
import "./css/user.css";
import "./css/useradmin.css";
import "./css/category.css";
import "./css/curso.css";
import "./css/learn.css";
import "./css/footer.css";
import "./css/transform.css";

function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<UserAdmin />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/user" element={<User />} />
      <Route path="/useradmin" element={<UserAdmin />} />
      <Route path="/category/:id" element={<Category />} />
      <Route path="/coursespage/:id" element={<CoursesPage />} />
      <Route path="/curso/:id" element={<Curso />} />
      <Route path="/lesson/:id" element={<Lesson />} />
    </Routes>
  );
}

export default RoutesConfig;
