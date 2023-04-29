import { useContext } from "react";
import { BarrioNavbar } from "./BarrioNavbar";
import { useNavigate } from "react-router-dom";
import { initialForm } from "../context/ProdProvider";
import ProdContext from "../context/ProdContext";
import Swal from "sweetalert2";

export const BarrioFormulario = () => {
  const {
    form,
    setForm,
    agregarSanduich,
    editar,
    setEditar,
    actualizarSanduich,
  } = useContext(ProdContext);
  const { id, nombre, tipo, foto, comentario, descripcion, precio } = form;

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleReset = (e) => {
    setForm(initialForm);
    setEditar(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !descripcion || !tipo || precio <= 0) {
      Swal.fire(
        "ERROR",
        "nombre, descripcion, tipo y precio son obligatorios",
        "error"
      );
      return;
    } else if (id === null) {
      agregarSanduich(form);
    } else {
      actualizarSanduich(form);
    }
    handleReset();
    navigate("/sanduich");
  };

  return (
    <>
      <BarrioNavbar />
      <div className="parent">
        <div className="container mt-4 mb-4">
          <div className="row">
            <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
              <div className="col">
                <div className="card">
                  <div className="card-header bg-curso navbarcolor">
                    {editar ? (
                      <h4 className="card-title text-white">Editar Sanduich</h4>
                    ) : (
                      <h4 className="card-title text-white">
                        Agregar Sanduich
                      </h4>
                    )}
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="form-group">
                        <input
                          className="form-control mt-2 mb-2"
                          type="text"
                          placeholder="Nombre del sanduich"
                          name="nombre"
                          value={nombre}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control mt-2 mb-2"
                          type="text"
                          placeholder="Descripción del Sanduich"
                          name="descripcion"
                          value={descripcion}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control mt-2 mb-2"
                          type="text"
                          placeholder="Tipo de Sanduich (ej): simple, doble, etc."
                          name="tipo"
                          value={tipo}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control mt-2 mb-2"
                          type="text"
                          placeholder="Comentario"
                          name="comentario"
                          value={comentario}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control mt-2 mb-2"
                          type="number"
                          placeholder="Precio de Sanduich"
                          name="precio"
                          value={precio}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control mt-2 mb-2"
                          type="text"
                          placeholder="Foto: URL de la imagen (ej): https://unareceta.com/wp-content/uploads/2016/10/hamburguesa.jpg"
                          name="foto"
                          value={foto}
                          onChange={handleChange}
                        />
                      </div>
                    </form>
                  </div>
                  <div className="card-footer">
                    <button
                      className="btn btn-outline-dark"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      AGREGAR
                    </button>
                    {"  "}
                    <button
                      className="btn btn-outline-dark"
                      onClick={() => handleReset()}
                    >
                      {" "}
                      LIMPIAR
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
