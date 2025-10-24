import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecetasListPage from './pages/RecetasListPages';
import RecetaDetallePage from './pages/RecetaDetallePages';
import RecetaPrincipal from './pages/RecetaPrincipal';
import Navbar from './components/layout/NavBar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<RecetaPrincipal />} />
        <Route path="/recetas" element={<RecetasListPage />} />
        <Route path="/recetas/:id" element={<RecetaDetallePage />} />
      </Routes>
    </Router>
  );
}

export default App
