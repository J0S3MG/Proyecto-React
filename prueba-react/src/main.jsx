import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
//--- Flujo de ejecucion ---//
//El Navegador ejecuta index.html.
//index.html redirije el flujo hacia main.jsx.
//main.jsx dirije el flujo hacia nuestra Pagina Principal (App.jsx).

//--- Estructura del Proyecto ---//
//En la carpeta assets tiene todas las img.
//En la carpeta css todos los estilos.
//En la carpeta pages el resto de vistas o paginas.
//En la components hay componentes reutilizables.
//En layauts diseños generales.