import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <div className="rounded-circle d-flex align-items-center justify-content-center me-2" style={{width: '36px', height: '36px', background: 'var(--btn-gradient)'}}>
            <i className="bi bi-wallet2 text-white fs-5"></i>
          </div>
          <span className="fw-bold">FutGen Hub</span>
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
        
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/player">Jugadores</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/club">Clubes</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/agent">Agentes</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/technology">Tecnología</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/about">Nosotros</Link>
            </li>
          </ul>
        </div>
        
        <div className="d-flex align-items-center">
          <div className="dropdown me-3">
            <button className="btn btn-sm btn-dark border rounded-pill px-2 py-1 d-flex align-items-center" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="bi bi-globe2 me-1"></i> ES
            </button>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark" aria-labelledby="dropdownMenuButton">
              <li><a className="dropdown-item" href="#">EN</a></li>
              <li><a className="dropdown-item" href="#">ES</a></li>
            </ul>
          </div>
          
          <Link to="/demo" className="btn btn-sm btn-outline-light rounded-pill px-3 py-1 me-2">Demo</Link>
          <Link to="/signup" className="btn btn-sm btn-primary rounded-pill px-4 py-1">Registrarse</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 