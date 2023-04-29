import clienteAxios from "../config/Axios";

export const addProductos = async (form) => {
  try {
    const response = await clienteAxios.post("/productos", form);
    return response;
  } catch (error) {
    console.log(error);
  }
};
