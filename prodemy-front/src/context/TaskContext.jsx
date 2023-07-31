import { createContext } from "react";
import { useState, useEffect } from "react";

import axios from "axios";
export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);
  const [courses, setCourses] = useState([]);
  const [lessons, setLessons] = useState([]);
  const URL = "http://127.0.0.1:8000/api/categorias";
  const URL_COURSES = "http://127.0.0.1:8000/api/cursos";
  const URL_LESSONS = "http://127.0.0.1:8000/api/leccions";

  function createTask(task) {
    let idInput = document.getElementById("domId").value;
    let newTitle = document.getElementById("domNombre").value;
    let newDescription = document.getElementById("domDescripcion").value;
    if (!idInput) {
      axios
        .post(URL, {
          nombre: task.title,
          descripcion: task.description,
        })
        .then((response) => {
          setTasks([
            ...tasks,
            {
              nombre: response.data.nombre,
              id: response.data.id,
              descripcion: response.data.descripcion,
            },
          ]);
        });
    } else {
      axios.put(URL + "/" + idInput, {
        nombre: newTitle,
        descripcion: newDescription,
      });
    }
  }

  function createCourse(course) {
    let idInput = document.getElementById("domId_course").value;
    let newTitle = document.getElementById("domNombre_course").value;
    let newDescription = document.getElementById("domDescripcion_course").value;
    let newCategory = document.getElementById("domCategory_course").value;
    if (!idInput) {
      axios
        .post(URL_COURSES, {
          nombre: course.title,
          descripcion: course.description,
          imagen_id: 1,
          categoria_id: course.categoria_id,
        })
        .then((response) => {
          setCourses([
            ...courses,
            {
              nombre: response.data.nombre,
              id: response.data.id,
              descripcion: response.data.descripcion,
              imagen_id: 1,
              categoria_id: response.data.categoria_id,
            },
          ]);
        });
    } else {
      axios.put(URL_COURSES + "/" + idInput, {
        nombre: newTitle,
        descripcion: newDescription,
        imagen_id: 1,
        categoria_id: newCategory,
      });
    }
  }

  function createLesson(lesson) {
    let idInput = document.getElementById("domLesson_id").value;
    let newTema = document.getElementById("domLesson_tema").value;
    let newContenido = document.getElementById("domLesson_contenido").value;
    let newVideo = document.getElementById("domLesson_video").value;
    let newTipo = document.getElementById("domLesson_tipo").value;
    let newCursoID = document.getElementById("domLesson_cursoID").value;
    if (!idInput) {
      axios
        .post(URL_LESSONS, {
          tema: lesson.tema,
          contenido: lesson.contenido,
          video: lesson.video,
          tipo: lesson.tipo,
          curso_id: lesson.curso_id,
        })
        .then((response) => {
          setLessons([
            ...lessons,
            {
              tema: response.data.tema,
              id: response.data.id,
              contenido: response.data.contenido,
              video: response.data.video,
              tipo: response.data.tipo,
              curso_id: response.data.curso_id,
            },
          ]);
        });
    } else {
      axios.put(URL_LESSONS + "/" + idInput, {
        tema: newTema,
        contenido: newContenido,
        video: newVideo,
        tipo: newTipo,
        curso_id: newCursoID,
      });
    }
  }

  function updateTask(taskId, domNombre, domDescripcion) {
    document.getElementById("domId").value = taskId;
    document.getElementById("domNombre").value = domNombre;
    document.getElementById("domDescripcion").value = domDescripcion;
  }

  function updateCourse(
    courseId,
    domNombre,
    domDescripcion,
    domCategoryCourse
  ) {
    document.getElementById("domId_course").value = courseId;
    document.getElementById("domNombre_course").value = domNombre;
    document.getElementById("domDescripcion_course").value = domDescripcion;
    document.getElementById("domCategory_course").value = domCategoryCourse;
  }

  function updateLesson(
    lessonId,
    domTema,
    domContenido,
    domVideo,
    domTipo,
    domCursoID
  ) {
    document.getElementById("domLesson_id").value = lessonId;
    document.getElementById("domLesson_tema").value = domTema;
    document.getElementById("domLesson_contenido").value = domContenido;
    document.getElementById("domLesson_video").value = domVideo;
    document.getElementById("domLesson_tipo").value = domTipo;
    document.getElementById("domLesson_cursoID").value = domCursoID;
  }

  useEffect(() => {
    axios.get(URL).then((response) => {
      setTasks(response.data);
    });
    axios.get(URL_COURSES).then((response) => {
      setCourses(response.data);
    });
    axios.get(URL_LESSONS).then((response) => {
      setLessons(response.data);
    });
  }, []);

  function deleteTask(taskId) {
    axios
      .delete(URL + "/" + taskId)
      .then(() => setTasks(tasks.filter((task) => task.id !== taskId)));
  }

  function deleteCourse(courseId) {
    axios
      .delete(URL_COURSES + "/" + courseId)
      .then(() =>
        setCourses(courses.filter((courses) => courses.id !== courseId))
      );
  }

  function deleteLesson(lessonId) {
    axios
      .delete(URL_LESSONS + "/" + lessonId)
      .then(() =>
        setLessons(lessons.filter((lesson) => lesson.id !== lessonId))
      );
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
        updateTask,
        courses,
        createCourse,
        deleteCourse,
        updateCourse,
        lessons,
        createLesson,
        deleteLesson,
        updateLesson,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

export default TaskContextProvider;
