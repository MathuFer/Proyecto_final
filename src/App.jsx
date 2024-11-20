import "./App.css";
import { Route, Routes } from "react-router-dom";

// importar vistas
import Home from "./views/Home";
import RegistroUsuario from "./views/RegistroUsuario";
import InicioSesion from "./views/InicioSesion";
import Shopping from "./views/Shopping";
import MiPerfil from "./views/MiPerfil";
import Tienda from "./views/Tienda";
import VistaProducto from "./views/VistaProducto";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/registro" element={<RegistroUsuario />} />
        <Route path="/inicioSesion" element={<InicioSesion />} />
        <Route path="/cartShopping" element={<Shopping />} />
        <Route path="/product/:id" element={<VistaProducto />} />
        
        {/* Ruta para el perfil de usuario basado en id */}
        <Route path="/mi-perfil/:id" element={<MiPerfil />} />
      </Routes>
    </div>
  );
}

export default App;
