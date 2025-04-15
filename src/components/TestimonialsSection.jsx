import React from 'react';

function TestimonialsSection() {
  return (
    <div className="container py-5">
      <h2 className="section-heading text-center display-5 mb-5">Opiniones de Clientes</h2>
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card feature-card p-4">
            <div className="d-flex align-items-center mb-3">
              <img 
                src="https://randomuser.me/api/portraits/men/32.jpg" 
                alt="Cliente" 
                className="rounded-circle me-3" 
                width="60" 
                height="60" 
              />
              <div className="text-start">
                <h5 className="mb-0">Roberto García</h5>
                <small className="text-muted">Cliente desde 2020</small>
              </div>
            </div>
            <p className="text-start">
              "Excelente servicio, me siento seguro invirtiendo en mi futuro con Futgen Financials. La plataforma es intuitiva y me permite realizar seguimiento de mis inversiones fácilmente."
            </p>
            <div className="text-warning text-start mb-0">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card feature-card p-4">
            <div className="d-flex align-items-center mb-3">
              <img 
                src="https://randomuser.me/api/portraits/women/44.jpg" 
                alt="Cliente" 
                className="rounded-circle me-3" 
                width="60" 
                height="60" 
              />
              <div className="text-start">
                <h5 className="mb-0">Marta Rodríguez</h5>
                <small className="text-muted">Cliente desde 2021</small>
              </div>
            </div>
            <p className="text-start">
              "La atención al cliente es excepcional, siempre dispuestos a ayudar con mis inversiones. He visto un crecimiento constante en mi portafolio desde que empecé a trabajar con ellos."
            </p>
            <div className="text-warning text-start mb-0">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsSection; 