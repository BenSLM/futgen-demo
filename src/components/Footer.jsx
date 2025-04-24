import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer-dark w-100 vw-100">
      <div className="footer-top py-5">
        <div className="container-fluid px-4 px-md-5">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 mb-4 mb-lg-0">
              <div className="d-flex align-items-center mb-3">
                <div className="rounded-circle d-flex align-items-center justify-content-center me-2" style={{width: '40px', height: '40px', backgroundColor: '#ff9d6c'}}>
                  <i className="bi bi-wallet2 text-white fs-5"></i>
                </div>
                <h2 className="text-white fs-3 mb-0">FutGen</h2>
              </div>
              <p className="text-white-50 mb-4">
                Soluciones financieras profesionales para potenciar tu crecimiento económico.
              </p>
            </div>
            
            <div className="col-lg-3 mb-4 mb-lg-0">
              <div className="d-flex align-items-center mb-3">
                <i className="bi bi-envelope-fill me-3 fs-5 text-primary"></i>
                <p className="mb-0 text-white">contact.us@futgenfinancials.net</p>
              </div>
              <div className="d-flex align-items-center mb-3">
                <i className="bi bi-telephone-fill me-3 fs-5 text-primary"></i>
                <p className="mb-0 text-white">+12 345 6789</p>
              </div>
            </div>
            
            <div className="col-lg-3 text-lg-end">
              <div className="mb-3">
                <h6 className="text-white mb-3">SÍGUENOS</h6>
                <div className="d-flex justify-content-lg-end">
                  <a href="#" className="social-icon me-3">
                    <i className="bi bi-instagram text-white fs-5"></i>
                  </a>
                  <a href="#" className="social-icon me-3">
                    <i className="bi bi-facebook text-white fs-5"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="bi bi-twitter-x text-white fs-5"></i>
                  </a>
                </div>
              </div>
              
              <div>
                <h6 className="text-white mb-2">LLÁMANOS</h6>
                <p className="text-white fs-4 mb-0">01 2345 6789</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <hr className="footer-divider my-0" />
      
      <div className="footer-bottom py-3 w-100">
        <div className="container-fluid px-4 px-md-5">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-6">
              <p className="text-white-50 small mb-md-0">© 2025 FutGen. Soluciones Financieras. Todos los derechos reservados</p>
            </div>
            <div className="col-md-6 text-md-end">
              <Link to="/privacy" className="text-white-50 small me-3 text-decoration-none">POLÍTICA DE PRIVACIDAD</Link>
              <Link to="/terms" className="text-white-50 small text-decoration-none">TÉRMINOS Y CONDICIONES</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 