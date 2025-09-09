import { useNavigate } from "react-router-dom";

function Boton({ destino, texto }) {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(destino)}>
      {texto}
    </button>
  );
}

export default Boton;