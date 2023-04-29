import clienteAxios from "../config/Axios";

export const getProductos = async () => {
  try {
    const response = await clienteAxios.get("/productos");
    return response;
  } catch (error) {
    console.log(error);
  }
};
