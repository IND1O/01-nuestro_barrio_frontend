import { Link } from "react-router-dom";

export const BarrioNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbarcolor">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand text-white" href="#">
          Nuestro Barrio
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/sanduich"
                className="nav-link"
                aria-current="page"
                href="#"
              >
                Sanduich
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/papa" className="nav-link" href="#">
                Papas
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/bebida" className="nav-link" href="#">
                Bebidas
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
