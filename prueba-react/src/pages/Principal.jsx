//Esta seria nuestra pagina principal.
import utnFondo from '../assets/utn.jpg';//Obtenemos la d.ireccion de la img.
import ContPrincipal from '../components/Contenedor.jsx';
import Titulo from '../components/Titulos.jsx';
import "../css/background.css";//Obtenemos el style css.
import "../css/style.css";
import Boton from "../components/Boton.jsx";
function Principal() {
  return ( /* Como podemos ver hay 2 formas de usar un componente */
   <body className="fondo" style={{ backgroundImage: `url(${utnFondo})` }}>
    <ContPrincipal> {/* Forma larga, se distingue por tener una llave que lo habre <> y otra que lo cierra </> */}
      <Titulo tipo={1}/> {/* Aca ingresamos el tipo que queremos */} {/* Forma corta ocupa una liena </> */} 
        <h2 className="subtitulo">Facultad Regional Parana</h2>
        <h4 className="texto">Pagina de inicio. <br/> Lo que ven son ejemplos de etiquetas</h4>
        <p className="texto"> 
          Lorem <b>ipsum</b> dolor sit amet consectetur <em>adipisicing</em> elit. Explicabo voluptatem assumenda impedit maiores odit voluptatibus cupiditate dolor recusandae atque temporibus dolore nesciunt nisi fugit expedita, odio qui magni, esse voluptate.
          <strong>Soy brazuca perro</strong><br/>
          <em>Abduzcan</em><br/>
          <i>italica</i><br/>
          <u>subrayado</u><br/> 
          <mark>mark</mark><br/>
          <small>pequeño</small>
          <ul>
              <li>Hola</li>
              <li>Me llamo</li>
              <li>Pedro</li>
          </ul>
          <ol>
              <li>Un</li>
             <li>Oso</li>
              <li>Wacho</li>
          </ol>
          <dl>
              <dl>Item 1</dl>
                <dd>Que paso</dd>
              <dl>Item 2</dl>
                <dd>Con el que dijo que</dd>
              <dl>Item 3</dl>
                <dd>Te amaba se fue y te ha dejado...</dd>
          </dl>
        </p>
        <Boton destino="/ListaReceta" texto="Ir a Lista de Receta" />
    </ContPrincipal> {/* Aca se cierra el componente */}
   </body>
   
  )
}

export default Principal
