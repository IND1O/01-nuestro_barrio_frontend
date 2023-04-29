import logo from "../assets/imagen/logoBarrio.jpg";
import { BarrioNavbar } from "./BarrioNavbar";

export const BarrioPrincipal = () => {
  return (
    <>
      <BarrioNavbar />
      <h1>Barrio Principal.js</h1>
      <img
        src={logo}
        alt="no_data"
        className="card-img-top rounded-pill"
        style={{ width: 200 }}
      />
    </>
  );
};
