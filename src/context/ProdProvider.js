import ProdContext from "./ProdContext";
import { useEffect, useState } from "react";
import { getProductos } from "../services/getProductos";
import { addProductos } from "../services/addProductos";
import { updateProductos } from "../services/updateProductos";
import { deleteProductos } from "../services/deleteProductos";
import Swal from "sweetalert2";
import { Toast } from "../services/mensaje";

export const initialForm = {
  id: null,
  nombre: "",
  tipo: "",
  comentario: "",
  descripcion: "",
  foto: "",
  precio: "",
};

const ProdProvider = ({ children }) => {
  const [dataBase, setDataBase] = useState([]);

  const [form, setForm] = useState(initialForm);

  const [editar, setEditar] = useState(null);

  const [cargando, setCargando] = useState(false);

  const leerProductos = () => {
    setCargando(true);
    getProductos().then((res) => {
      //console.log("PETICION GET =>", res.data);
      if ((res.statusText = "OK")) {
        setDataBase(res.data);
        setCargando(false);
      } else {
        setDataBase([]);
        Swal.fire("ERROR", "sin conexión con la base de datos", "error");
      }
    });
  };

  useEffect(() => {
    leerProductos();
  }, []);

  useEffect(() => {
    if (editar) {
      setForm(editar);
    } else {
      setForm(initialForm);
    }
  }, [editar]);

  const agregarSanduich = () => {
    addProductos(form).then((res) => {
      console.log("RESPUESTA POST ==>", res);
      if ((res.statusText = "OK")) {
        setDataBase([...dataBase, res.data]);
        Toast.fire({
          icon: "success",
          title: ` "${res.data.message}" `,
        });
        leerProductos();
      } else {
        Swal.fire("ERROR", "no se pudo guardar el sanduich", "error");
      }
    });
  };

  const actualizarSanduich = () => {
    updateProductos(form).then((res) => {
      if ((res.statusText = "OK")) {
        const respuesta = dataBase.map((elem) =>
          elem.id === form.id ? form : elem
        );
        setDataBase(respuesta);
        Toast.fire({
          icon: "success",
          title: ` "${res.data.message}" `,
        });
      } else {
        Swal.fire("ERROR", "no se pudo actualizar el contacto", "error");
      }
    });
  };

  const borrarSanduich = (id) => {
    deleteProductos(id).then((res) => {
      if ((res.statusText = "OK")) {
        const respuesta = dataBase.filter((elem) => elem.id !== id);
        setDataBase(respuesta);

        Toast.fire({
          icon: "success",
          title: ` "${res.data.message}" `,
        });
      } else {
        Swal.fire("ERROR", "no se pudo eliminar el sanduich", "error");
      }
    });
  };

  return (
    <ProdContext.Provider
      value={{
        dataBase,
        form,
        editar,
        cargando,
        setForm,
        setEditar,
        agregarSanduich,
        actualizarSanduich,
        borrarSanduich,
      }}
    >
      {children}
    </ProdContext.Provider>
  );
};

export { ProdProvider };
