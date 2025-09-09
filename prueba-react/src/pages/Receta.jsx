import sandwich from '../assets/SandwichMiga.jpg';//Obtenemos la direccion de la img.
import Boton from "../components/Boton";

function Receta() {
  return (
    <body className="fondo" style={{ backgroundImage: `url(${sandwich})` }}>
      <h1>Página Receta</h1>
      <Boton destino="/" texto="Ir al Inicio" />
    </body>
  );
}

export default Receta;
