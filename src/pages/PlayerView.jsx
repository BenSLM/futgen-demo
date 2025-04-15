import React from 'react';
import Footer from '../components/Footer';

function PlayerView() {
  return (
    <div>
      <div className="hero-section" style={{minHeight: '40vh'}}>
        <div className="container py-5">
          <div className="row align-items-center py-5 hero-content">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="display-4 fw-bold mb-3 text-white">Soluciones para Jugadores</h1>
              <p className="lead text-white mb-0">
                FutGen Hub brinda herramientas financieras diseñadas específicamente para futbolistas profesionales
              </p>
            </div>
          </div>
        </div>
        <div className="wave-bg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
      </div>

      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-lg-10 mx-auto text-center">
            <h2 className="section-heading mb-4">Gestiona tus finanzas profesionales</h2>
            <p className="lead mb-0">
              Como futbolista profesional, sabemos que tu carrera demanda todo tu tiempo y concentración. 
              FutGen Hub te ofrece soluciones diseñadas para proteger tu patrimonio y facilitar tus transacciones globales.
            </p>
          </div>
        </div>

        <div className="row g-4 mb-5">
          <div className="col-md-6 col-lg-4">
            <div className="card feature-card h-100 p-4">
              <div className="feature-icon">
                <i className="bi bi-cash-stack"></i>
              </div>
              <h3 className="h4 mb-3">Envío de Dinero Instantáneo</h3>
              <p className="text-muted">
                Transfiere dinero a tu familia en tu país de origen con tarifas mínimas, sin importar dónde estés jugando.
              </p>
              <div className="mt-auto pt-3 border-top">
                <div className="badge bg-primary mb-1">Ahorra hasta 80% en comisiones</div>
                <div className="badge bg-success">Transferencias en minutos, no semanas</div>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 col-lg-4">
            <div className="card feature-card h-100 p-4">
              <div className="feature-icon">
                <i className="bi bi-wallet2"></i>
              </div>
              <h3 className="h4 mb-3">Wallet Multidivisa</h3>
              <p className="text-muted">
                Mantén tus ingresos en múltiples monedas y realiza cambios cuando las tasas sean favorables.
              </p>
              <div className="mt-auto pt-3 border-top">
                <div className="badge bg-primary mb-1">Soporta +40 divisas</div>
                <div className="badge bg-success">Tipos de cambio preferenciales</div>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 col-lg-4">
            <div className="card feature-card h-100 p-4">
              <div className="feature-icon">
                <i className="bi bi-shield-lock"></i>
              </div>
              <h3 className="h4 mb-3">Seguridad en Cada Transacción</h3>
              <p className="text-muted">
                Autenticación Web3 de múltiples factores asegura que solo tú puedas acceder y autorizar operaciones.
              </p>
              <div className="mt-auto pt-3 border-top">
                <div className="badge bg-primary mb-1">Tecnología MPC avanzada</div>
                <div className="badge bg-success">Cumplimiento con normas globales</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row mb-5">
          <div className="col-lg-10 mx-auto">
            <div className="card border-0 bg-light p-4 rounded-4">
              <div className="row align-items-center">
                <div className="col-md-7">
                  <h3>Tarjeta FutGen Players</h3>
                  <p>Gestiona tus gastos diarios con nuestra tarjeta especializada para futbolistas profesionales, con beneficios exclusivos:</p>
                  <ul className="mb-0">
                    <li>Sin comisiones en pagos internacionales</li>
                    <li>Reintegro en comercios seleccionados</li>
                    <li>Seguro médico deportivo incluido</li>
                    <li>Asistencia en viajes 24/7</li>
                  </ul>
                </div>
                <div className="col-md-5 text-center mt-4 mt-md-0">
                  <div className="card shadow-lg" style={{
                    width: '280px', 
                    height: '170px', 
                    margin: '0 auto', 
                    background: 'var(--btn-gradient)', 
                    borderRadius: '12px',
                    position: 'relative'
                  }}>
                    <div className="card-body position-relative" style={{color: 'white'}}>
                      <div className="position-absolute" style={{top: '15px', right: '15px'}}>
                        <i className="bi bi-wifi fs-3"></i>
                      </div>
                      <div className="position-absolute" style={{bottom: '15px', left: '15px'}}>
                        <p className="mb-0 fw-bold">FutGen PLAYERS</p>
                        <p className="mb-0 small">**** **** **** 7890</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h3 className="mb-4">Protege tu patrimonio para el largo plazo</h3>
            <p>78% de los jugadores profesionales enfrentan dificultades financieras 5 años después del retiro. FutGen Hub te ayuda a evitar ser parte de esta estadística.</p>
            <div className="d-flex justify-content-center gap-3 mt-4">
              <a href="#" className="btn btn-primary rounded-pill px-4 py-2 gradient-button">Comenzar ahora</a>
              <a href="#" className="btn btn-outline-primary rounded-pill px-4 py-2">Solicitar demostración</a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default PlayerView; 