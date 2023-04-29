import clienteAxios from "../config/Axios";

export const deleteProductos = async (id) => {
  try {
    const response = await clienteAxios.delete(`/productos/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
