import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import RouterConfig from "./routes-config";
import { AuthProvider } from "./context/AuthProvider";
import { TaskContextProvider } from "./context/TaskContext";
import "./css/normalize.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <TaskContextProvider>
          <RouterConfig />
        </TaskContextProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
