function Titulo({tipo}) { /* Segun el valor se configura un texto diferente */
    let message = "";
    if (tipo == 1)
    {
        message = "UTN";
    }
    else if (tipo == 2)    
    {
        message = "Picada";
    } else {
        message = "Sandwiches de Miga";
    }
  return ( /* Esto nos permite reutilizar el titulo no es necesario si hay mas casos */
    <h1 className="titulo">{message}</h1>
  );
}

export default Titulo;