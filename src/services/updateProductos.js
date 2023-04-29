import clienteAxios from "../config/Axios";

export const updateProductos = async (form) => {
  try {
    const response = await clienteAxios.put(`/productos/${form.id}`, form);
    return response;
  } catch (error) {
    console.log(error);
  }
};
