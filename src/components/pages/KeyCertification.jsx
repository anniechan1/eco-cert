import React from 'react';
import './KeyCertification.css';
import ScrollToTop from '../ScrollToTop';

function KeyCertification() {
  return (
    <>
      <ScrollToTop />
      <div className="page-container">
        <div className="page-header">
          <h1>KEY CERTIFICATIONS & SERVICES</h1>
          <div className="leaf-divider">
            <span className="divider-line"></span>
            <i className="fas fa-leaf"></i>
            <span className="divider-line"></span>
          </div>
        </div>

        <div className="certifications-grid">
          <div className="certification-item">
            <div className="certification-logo">
              <img src="/images/eu.jpg" alt="EU Organic Logo" />
            </div>
            <div className="certification-title">EU ORGANIC</div>
            <div className="certification-description">
              The first certification we will offer is EU Organic to enable the honey producers of Ethiopia.
            </div>
          </div>
          
          <div className="certification-item">
            <div className="certification-logo">
              <img src="/images/fairtrade-logo.png" alt="Fairtrade Logo" />
            </div>
            <div className="certification-title">FAIRTRADE</div>
            <div className="certification-description">
              Fairtrade certification will be the secondary scheme we offer to further drive better price discovery for Ethiopian farmers.
            </div>
          </div>
          
          <div className="certification-item">
            <div className="certification-logo">
              <img src="/images/afcta-logo.png" alt="AFCTA Logo" />
            </div>
            <div className="certification-title">AFCTA</div>
            <div className="certification-description">
              With the AfCTA being enacted, we will be one of the first African certifiers, designing and certifying for the purposes of the AfCTA.
            </div>
          </div>
          
          <div className="certification-item">
            <div className="certification-logo">
              <img src="/images/ecopia-logo.png" alt="Eco Certification Software Logo" />
            </div>
            <div className="certification-title">ECO CERTIFICATION SOFTWARE</div>
            <div className="certification-description">
              Together with Ecopia, we will roll out our ARGUS DIGITAL Program software that allows easier compliance for farmers and digital-based certification for certifiers.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default KeyCertification;
