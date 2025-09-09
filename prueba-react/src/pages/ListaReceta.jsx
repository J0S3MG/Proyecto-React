import cocina from '../assets/cocina.jpg';//Obtenemos la d.ireccion de la img.
import san from '../assets/migaej.jpg';//Obtenemos la direccion de la img.
import pic from '../assets/pick.jpg';//Obtenemos la direccion de la img.
import ContPrincipal from '../components/Contenedor.jsx';
import Boton from "../components/Boton.jsx";
import "../css/background.css";//Obtenemos el style css.
import "../css/style.css";
function ListaReceta(){

    return (
     <body className="fondo" style={{ backgroundImage: `url(${cocina})` }}>
        <ContPrincipal>
            <h1 className="subtitulo"> Lista de Recetas</h1>
            <table className="tabla-recetas">
                <thead>
                    <tr>
                        <th>Enlace</th>
                        <th>Descripción</th>
                        <th>Ilustración</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><Boton destino={"/Receta"} texto={"Receta"}/></td>
                        <td>Un rico alimento para animar las fiestas o llegar a fin de mes.</td>
                        <td> <img src={san} alt=""  width="300"/></td>
                    </tr>
                    <tr>
                        <td><Boton destino={"/Picada"} texto={"Picada"}/></td>
                        <td>Amiga date cuenta si te da picada es xq otra come el asado.</td>
                        <td> <img src={pic} alt=""  width="300"/></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><Boton destino="/" texto="Ir al Inicio"/></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </ContPrincipal>
     </body>
    )
}
export default ListaReceta