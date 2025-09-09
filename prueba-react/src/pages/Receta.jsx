import sandwich from '../assets/SandwichMiga.jpg';//Obtenemos la direccion de la img.
import Boton from "../components/Boton";
import ContPrincipal from '../components/Contenedor.jsx';
import Titulo from '../components/Titulos.jsx';

function Receta() {
  return (
    <body className="fondo" style={{ backgroundImage: `url(${sandwich})` }}>
      <ContPrincipal>
        <Titulo/>
        <h3 className="subtitulo">Descripcion:</h3>
        <p className="texto">
          Un rico alimento italiano.
        </p>
        <Boton destino={"/listareceta"} texto={"Ir a Lista de Recetas"}/>
        <h3 className="subtitulo">Ingredientes:</h3>
        <ul className="texto">
          <li>Pan de Miga.</li>
          <li>Queso Barra 200g.</li>
          <li>Jamon Paleta 200g.</li>
          <li>2 tomates.</li>
          <li>Mayonesa o aderezo de su eleccion.</li>
        </ul>
        <h3 className="subtitulo">Preparacion:</h3>
        <ol className="texto">
          <li>Huntar el aderezo en el pan de miga (Tapa inferior y superior).</li>
          <li>Colocar en al tapa inferior dos fetas de jamon.</li>
          <li>Colocar encima de las fetas de jamon dos fetas de queso.</li>
          <li>Colocar 2 rodajas de tomate.</li>
          <li>Colocar la tapa superior.</li>
          <li>Repetir hasta tener todos hechos y cortar el pan en forma de cruz para obtener mas cantidad.</li>
        </ol>
        <Boton destino="/" texto="Ir al Inicio" />
      </ContPrincipal>
    </body>
  );
}

export default Receta;
