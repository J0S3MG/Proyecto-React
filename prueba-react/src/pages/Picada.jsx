import Boton from "../components/Boton.jsx";
import utnFondo from '../assets/utn.jpg';//Obtenemos la d.ireccion de la img.

function Picada(){
    return( /* Retorna la pagina*/
        <body className="fondo" style={{ backgroundImage: `url(${utnFondo})` }}>
         <h1>Hola</h1>
        </body>
    )
}
export default Picada