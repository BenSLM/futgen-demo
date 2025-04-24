import React from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function DashboardView() {
  // Datos simulados para el dashboard
  const financialData = {
    balance: 245800,
    monthlyIncome: 32500,
    pendingPayments: 12000,
    savingsGoal: 75,
    upcomingPayments: [
      { id: 1, concept: "Impuesto sobre la Renta", amount: 8500, dueDate: "28/04/2025", status: "pendiente" },
      { id: 2, concept: "Seguro Deportivo", amount: 2300, dueDate: "15/04/2025", status: "pendiente" },
      { id: 3, concept: "Cuota Agente", amount: 1200, dueDate: "05/05/2025", status: "pendiente" }
    ],
    recentTransactions: [
      { id: 1, concept: "Salario Club", amount: 32500, date: "01/04/2025", type: "ingreso" },
      { id: 2, concept: "Patrocinio Nike", amount: 5000, date: "03/04/2025", type: "ingreso" },
      { id: 3, concept: "Impuestos", amount: -7800, date: "10/03/2025", type: "gasto" },
      { id: 4, concept: "Inversión Inmobiliaria", amount: -50000, date: "15/03/2025", type: "gasto" }
    ],
    assetDistribution: [
      { type: "Efectivo", percentage: 15 },
      { type: "Inmobiliario", percentage: 40 },
      { type: "Inversiones", percentage: 30 },
      { type: "Otros", percentage: 15 }
    ]
  };

  // Función para formatear moneda
  const formatCurrency = (amount) => {
    // Formatear primero con el formato estándar
    const formatted = new Intl.NumberFormat('en-US', { 
      style: 'currency', 
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(amount);
    
    // Reemplazar comas por puntos
    return formatted.replace(/,/g, '.');
  };

  return (
    <div>
      <div className="container py-5 mt-5">
        {/* Resumen Financiero */}
        <div className="row mb-4">
          <div className="col-md-3 mb-4 mb-md-0">
            <div className="card h-100 border-0 shadow-sm rounded-4">
              <div className="card-body text-center p-4">
                <div className="rounded-circle bg-light d-flex align-items-center justify-content-center mx-auto mb-3" style={{width: '60px', height: '60px'}}>
                  <i className="bi bi-wallet fs-3 text-primary"></i>
                </div>
                <h6 className="text-muted mb-1">Balance Total</h6>
                <h3 className="mb-0">{formatCurrency(financialData.balance)}</h3>
              </div>
            </div>
          </div>
          
          <div className="col-md-3 mb-4 mb-md-0">
            <div className="card h-100 border-0 shadow-sm rounded-4">
              <div className="card-body text-center p-4">
                <div className="rounded-circle bg-light d-flex align-items-center justify-content-center mx-auto mb-3" style={{width: '60px', height: '60px'}}>
                  <i className="bi bi-graph-up-arrow fs-3 text-primary"></i>
                </div>
                <h6 className="text-muted mb-1">Ingreso Mensual</h6>
                <h3 className="mb-0">{formatCurrency(financialData.monthlyIncome)}</h3>
              </div>
            </div>
          </div>
          
          <div className="col-md-3 mb-4 mb-md-0">
            <div className="card h-100 border-0 shadow-sm rounded-4">
              <div className="card-body text-center p-4">
                <div className="rounded-circle bg-light d-flex align-items-center justify-content-center mx-auto mb-3" style={{width: '60px', height: '60px'}}>
                  <i className="bi bi-calendar-check fs-3 text-primary"></i>
                </div>
                <h6 className="text-muted mb-1">Pagos Pendientes</h6>
                <h3 className="mb-0">{formatCurrency(financialData.pendingPayments)}</h3>
              </div>
            </div>
          </div>
          
          <div className="col-md-3">
            <div className="card h-100 border-0 shadow-sm rounded-4">
              <div className="card-body text-center p-4">
                <div className="rounded-circle bg-light d-flex align-items-center justify-content-center mx-auto mb-3" style={{width: '60px', height: '60px'}}>
                  <i className="bi bi-piggy-bank fs-3 text-primary"></i>
                </div>
                <h6 className="text-muted mb-1">Meta de Ahorro</h6>
                <h3 className="mb-0">{financialData.savingsGoal}%</h3>
              </div>
            </div>
          </div>
        </div>
        
        {/* Gráfico y Distribución de Activos */}
        <div className="row mb-4">
          <div className="col-lg-8 mb-4 mb-lg-0">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <div className="card-body p-4">
                <h5 className="mb-4">Flujo de Ingresos y Gastos</h5>
                <div className="chart-placeholder">
                  <div style={{position: 'relative', height: '250px', marginTop: '20px'}}>
                    {/* Pie Chart - Representación básica con HTML/CSS */}
                    <div style={{
                      position: 'relative',
                      width: '200px',
                      height: '200px',
                      borderRadius: '50%',
                      margin: '0 auto',
                      background: 'conic-gradient(var(--primary-blue) 0% 15%, #ff9d6c 15% 55%, var(--accent-blue) 55% 85%, #aaa 85% 100%)'
                    }}>
                      <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        backgroundColor: 'white'
                      }}></div>
                    </div>
                    
                    {/* Leyenda */}
                    <div className="d-flex justify-content-center flex-wrap mt-4">
                      <div className="d-flex align-items-center me-4 mb-2">
                        <div style={{width: '15px', height: '15px', backgroundColor: 'var(--primary-blue)', borderRadius: '3px'}}></div>
                        <span className="ms-2">Efectivo (15%)</span>
                      </div>
                      <div className="d-flex align-items-center me-4 mb-2">
                        <div style={{width: '15px', height: '15px', backgroundColor: '#ff9d6c', borderRadius: '3px'}}></div>
                        <span className="ms-2">Inmobiliario (40%)</span>
                      </div>
                      <div className="d-flex align-items-center me-4 mb-2">
                        <div style={{width: '15px', height: '15px', backgroundColor: 'var(--accent-blue)', borderRadius: '3px'}}></div>
                        <span className="ms-2">Inversiones (30%)</span>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <div style={{width: '15px', height: '15px', backgroundColor: '#aaa', borderRadius: '3px'}}></div>
                        <span className="ms-2">Otros (15%)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <div className="card-body p-4">
                <h5 className="mb-4">Distribución de Activos</h5>
                <div>
                  {financialData.assetDistribution.map((asset, index) => (
                    <div key={index} className="mb-3">
                      <div className="d-flex justify-content-between mb-1">
                        <span>{asset.type}</span>
                        <span>{asset.percentage}%</span>
                      </div>
                      <div className="progress" style={{height: '10px', borderRadius: '5px'}}>
                        <div 
                          className="progress-bar" 
                          role="progressbar" 
                          style={{
                            width: `${asset.percentage}%`, 
                            background: 'var(--btn-gradient)'
                          }} 
                          aria-valuenow={asset.percentage} 
                          aria-valuemin="0" 
                          aria-valuemax="100">
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Pagos Próximos y Transacciones Recientes */}
        <div className="row">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h5 className="mb-0">Pagos Próximos</h5>
                  <button className="btn btn-sm btn-outline-primary rounded-pill">Ver todos</button>
                </div>
                
                <div className="table-responsive">
                  <table className="table table-borderless">
                    <thead className="text-muted small">
                      <tr>
                        <th>Concepto</th>
                        <th>Monto</th>
                        <th>Fecha</th>
                        <th>Estado</th>
                      </tr>
                    </thead>
                    <tbody>
                      {financialData.upcomingPayments.map(payment => (
                        <tr key={payment.id}>
                          <td>{payment.concept}</td>
                          <td>{formatCurrency(payment.amount)}</td>
                          <td>{payment.dueDate}</td>
                          <td>
                            <span className="badge bg-warning text-dark rounded-pill px-3 py-2">
                              {payment.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h5 className="mb-0">Transacciones Recientes</h5>
                  <button className="btn btn-sm btn-outline-primary rounded-pill">Ver todas</button>
                </div>
                
                <div className="table-responsive">
                  <table className="table table-borderless">
                    <thead className="text-muted small">
                      <tr>
                        <th>Concepto</th>
                        <th>Monto</th>
                        <th>Fecha</th>
                        <th>Tipo</th>
                      </tr>
                    </thead>
                    <tbody>
                      {financialData.recentTransactions.map(transaction => (
                        <tr key={transaction.id}>
                          <td>{transaction.concept}</td>
                          <td className={transaction.type === 'ingreso' ? 'text-success fw-bold' : 'text-danger fw-bold'}>
                            {formatCurrency(transaction.amount)}
                          </td>
                          <td>{transaction.date}</td>
                          <td>
                            <span className={`badge rounded-pill px-3 py-2 ${transaction.type === 'ingreso' ? 'bg-success' : 'bg-danger'}`}>
                              {transaction.type}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default DashboardView; 