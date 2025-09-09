import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/Principal";
import Receta from "./pages/Receta";
import ListaReceta from "./pages/ListaReceta";
import Picada from "./pages/Picada";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/receta" element={<Receta />} />
      <Route path="/listareceta" element={<ListaReceta />} />
      <Route path="/picada" element={<Picada/>} />
    </Routes>
  );
}

export default App;