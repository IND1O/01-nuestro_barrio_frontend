import logo from "../assets/imagen/logoBarrio.jpg";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ProdContext from "../context/ProdContext";
import Swal from "sweetalert2";

export const CardSanduich = ({ elem }) => {
  const { nombre, descripcion, precio, foto } = elem;

  const { setEditar, borrarSanduich } = useContext(ProdContext);

  const navigate = useNavigate();

  const handleEditar = (e) => {
    e.preventDefault();
    setEditar(elem);
    navigate(`/actualizarsan/${elem.id}`);
  };

  const handleDelete = (e) => {
    e.preventDefault();

    Swal.fire({
      title: `¿ Está seguro de eliminar a: "${nombre}" de los productos ?`,
      text: "un registro eliminado no se puede recuperar!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar registro",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        borrarSanduich(elem.id);
      }
    });
  };

  return (
    <div className="col-4 mb-3">
      <div className="card" style={{ width: 300 }}>
        <div className="card-body">
          <div className="list-group">
            <div className="list-group-item mb-2 mt-2 navbarcolor">
              <h5 className="card-title text-white ">{nombre}</h5>
            </div>
          </div>
          <img
            src={foto}
            className="card-img-top rounded-pill"
            style={{ width: 200 }}
            alt={logo}
          />

          <div className="list-group">
            <div className="list-group-item mt-2">
              <p className="card-text">{descripcion}</p>
            </div>
          </div>

          <div className="list-group">
            <div className="list-group-item mt-2">
              <p className="card-text">Precio: ARS $ - {precio}</p>
            </div>
          </div>

          <div className="card-footer">
            <button className="btn btn-outline-dark" onClick={handleEditar}>
              EDITAR
            </button>{" "}
            <button className="btn btn-outline-dark" onClick={handleDelete}>
              BORRAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
