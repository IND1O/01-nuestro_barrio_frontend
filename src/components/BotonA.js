import { useNavigate } from "react-router-dom";

export const BotonA = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/agregarsan");
  };

  return (
    <div className="mt-5 mb-5">
      <boton onClick={handleClick}>Agregar Sanduich</boton>
    </div>
  );
};
