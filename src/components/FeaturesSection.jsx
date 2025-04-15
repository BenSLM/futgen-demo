import React from 'react';

function FeaturesSection() {
  return (
    <div className="container py-5">
      <h2 className="section-heading text-center display-5 mt-5">Servicios Financieros Avanzados</h2>
      <div className="row g-4 mt-4">
        <div className="col-md-6 col-lg-4">
          <div className="card feature-card h-100 p-4">
            <div className="feature-icon">
              <i className="bi bi-graph-up-arrow"></i>
            </div>
            <h3 className="h4 mb-3">Inversiones Rentables</h3>
            <p className="text-muted">
              Ofrecemos un portafolio de servicios financieros diseñados para maximizar el retorno de tus inversiones a corto y largo plazo.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="card feature-card h-100 p-4">
            <div className="feature-icon">
              <i className="bi bi-shield-lock"></i>
            </div>
            <h3 className="h4 mb-3">Seguridad y Privacidad</h3>
            <p className="text-muted">
              Tus datos financieros están protegidos con encriptación avanzada, garantizando la máxima seguridad en cada transacción.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="card feature-card h-100 p-4">
            <div className="feature-icon">
              <i className="bi bi-phone"></i>
            </div>
            <h3 className="h4 mb-3">Gestión Móvil</h3>
            <p className="text-muted">
              Administra tus inversiones desde cualquier lugar con nuestra plataforma optimizada para dispositivos móviles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection; 