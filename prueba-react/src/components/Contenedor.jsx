function Contenedor({children}) { /* Con children podemos pasarle valores para que los muestre */
  return ( /* Mostrara todo lo que este dentro de las llaves <> </> donde se llame el componente */
    <div className="contenedor">
     {children}{/* Creamos un contenedor para reutilizar en cada pagina */}
    </div>
  );
}

export default Contenedor;
