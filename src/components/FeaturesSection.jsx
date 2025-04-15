import React from 'react';

function FeaturesSection() {
  return (
    <div className="container py-5">
      <h2 className="section-heading text-center display-5 mt-5">Soluciones Financieras para el Fútbol</h2>
      <p className="text-center mb-5 lead">Diseñadas específicamente para jugadores, clubes y agentes deportivos</p>
      
      <div className="row g-4 mt-4">
        <div className="col-md-6 col-lg-4">
          <div className="card feature-card h-100 p-4">
            <div className="feature-icon">
              <i className="bi bi-currency-exchange"></i>
            </div>
            <h3 className="h4 mb-3">Transferencias Instantáneas</h3>
            <p className="text-muted">
              Envía dinero a familiares en cualquier parte del mundo con tarifas reducidas y conversión de divisas competitiva.
            </p>
          </div>
        </div>
        
        <div className="col-md-6 col-lg-4">
          <div className="card feature-card h-100 p-4">
            <div className="feature-icon">
              <i className="bi bi-wallet2"></i>
            </div>
            <h3 className="h4 mb-3">e-Wallets Multidivisa</h3>
            <p className="text-muted">
              Accede a tus fondos en múltiples monedas. Ideal para jugadores que se trasladan entre países o ligas internacionales.
            </p>
          </div>
        </div>
        
        <div className="col-md-6 col-lg-4">
          <div className="card feature-card h-100 p-4">
            <div className="feature-icon">
              <i className="bi bi-shield-lock-fill"></i>
            </div>
            <h3 className="h4 mb-3">Web3 Auth MPC</h3>
            <p className="text-muted">
              Seguridad avanzada con autenticación multifactor y tecnología de computación multipartita para proteger tus activos.
            </p>
          </div>
        </div>
        
        <div className="col-md-6 col-lg-4">
          <div className="card feature-card h-100 p-4">
            <div className="feature-icon">
              <i className="bi bi-bank"></i>
            </div>
            <h3 className="h4 mb-3">Cuentas Bancarias Tier 1</h3>
            <p className="text-muted">
              Abre cuentas segregadas en bancos de primera categoría con IBANs virtuales para gestionar tus ingresos profesionales.
            </p>
          </div>
        </div>
        
        <div className="col-md-6 col-lg-4">
          <div className="card feature-card h-100 p-4">
            <div className="feature-icon">
              <i className="bi bi-clipboard-data"></i>
            </div>
            <h3 className="h4 mb-3">Gestión de Tesorería</h3>
            <p className="text-muted">
              Para clubes y federaciones: administra pagos de nómina, transferencias, premios y comisiones con total transparencia.
            </p>
          </div>
        </div>
        
        <div className="col-md-6 col-lg-4">
          <div className="card feature-card h-100 p-4">
            <div className="feature-icon">
              <i className="bi bi-shield-check"></i>
            </div>
            <h3 className="h4 mb-3">Compliance Total</h3>
            <p className="text-muted">
              Cumplimiento con GAFI, AML, KYC, KYT, Ley MICA (EU) y normas de viaje para transacciones 100% seguras y reguladas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection; 