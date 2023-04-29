import { useContext } from "react";
import { BarrioNavbar } from "./BarrioNavbar";
import { CompLinea } from "./CompLinea";
import ProdContext from "../context/ProdContext";
import { CardSanduich } from "./CardSanduich";
import { BotonA } from "./BotonA";
import { CompLoader } from "./CompLoader";
import { CompFooter } from "./CompFooter";

export const BarrioSanduich = () => {
  const { dataBase, cargando } = useContext(ProdContext);

  return (
    <>
      <BarrioNavbar />
      <h1 className="mt-4">Sanduichs</h1>
      <BotonA />
      <CompLinea />
      <div className="container mb-5 p-2 mt-2">
        <div className="row">
          {dataBase.map((elem) => (
            <CardSanduich key={elem.id} elem={elem} />
          ))}
        </div>
      </div>
      {cargando && <CompLoader />}
      <CompLinea />
      <CompFooter />
    </>
  );
};
