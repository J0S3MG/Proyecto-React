import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/Principal";
import Receta from "./pages/Receta";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/receta" element={<Receta />} />
    </Routes>
  );
}

export default App;