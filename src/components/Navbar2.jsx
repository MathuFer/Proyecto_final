import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <div className="navbar fixed-top bg-black text-white py-3">
      <div className="container d-flex">
        <div className="d-flex justify-content-start align-items-center">
          <Link to="/" className="logo-nombre mx-1 mb-0">
            <h4 className="mb-0">Pixel Negro |</h4>
          </Link>

          <Link to="/" className="logo-nombre mx-1 mb-0">
            <h4 className="mb-0">Inicio |</h4>
          </Link>

          <Link to="/" className="logo-nombre mx-1 mb-0">
            <h4 className="mb-0">Tienda |</h4>
          </Link>

          <Link to="/" className="logo-nombre mx-1 mb-0">
            <h4 className="mb-0">Contacto |</h4>
          </Link>

          <Link to="/shopping" className="logo-nombre mx-1 mb-0">
            <h4 className="mb-0">Carrito &#128722;</h4>
          </Link>
        </div>
        <div className="d-flex justify-content-end align-items-center">
          <Link to="/InicioSesion" className="logo-nombre mx-1 mb-0">
            <h4> Mi Perfil</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
