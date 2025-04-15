import React from 'react';

function ContactForm() {
  return (
    <div id="contacto" className="container-fluid bg-light py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 mb-5 mb-lg-0 text-center text-lg-start">
            <h2 className="display-5 fw-bold mb-4">Contáctanos</h2>
            <p className="lead mb-4">
              Estamos aquí para responder tus preguntas y ayudarte a comenzar tu camino hacia un futuro financiero seguro.
            </p>
          </div>
          <div className="col-lg-7">
            <div className="card contact-form border-0">
              <div className="card-body p-4 p-md-5">
                <h3 className="card-title mb-4 text-start">Formulario de Contacto</h3>
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="name" className="form-label">Nombre completo</label>
                      <input type="text" className="form-control" id="name" placeholder="Ingresa tu nombre" required />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="email" className="form-label">Correo electrónico</label>
                      <input type="email" className="form-control" id="email" placeholder="Ingresa tu email" required />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Teléfono</label>
                    <input type="tel" className="form-control" id="phone" placeholder="Ingresa tu teléfono" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Mensaje</label>
                    <textarea className="form-control" id="message" rows="4" placeholder="¿En qué podemos ayudarte?" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg w-100 rounded-pill gradient-button">Enviar mensaje</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm; 