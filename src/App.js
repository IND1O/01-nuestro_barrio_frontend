import "./App.css";
import "../src/style/style.css";
import "./style/BotonA.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BarrioPrincipal } from "./components/BarrioPrincipal";
import { BarrioSanduich } from "./components/BarrioSanduich";
import { BarrioPapa } from "./components/BarrioPapa";
import { BarrioBebida } from "./components/BarrioBebida";
import { BarrioFormulario } from "./components/BarrioFormulario";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BarrioPrincipal />} />
          <Route path="/sanduich" element={<BarrioSanduich />} />
          <Route path="/papa" element={<BarrioPapa />} />
          <Route path="/bebida" element={<BarrioBebida />} />
          <Route path="/agregarsan" element={<BarrioFormulario />} />
          <Route path="/actualizarsan/:id" element={<BarrioFormulario />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
