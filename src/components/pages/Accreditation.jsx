import "./Accreditation.css"

function Accreditation() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Accreditation Journey</h1>
        <div className="leaf-divider">
          <span className="divider-line"></span>
          <i className="fas fa-leaf"></i>
          <span className="divider-line"></span>
        </div>
      </div>

      <div className="accreditation-section">
        <div className="accreditation-content">
          <div className="accreditation-text">
            <p>We are advancing through the final stages of the accreditation process with:</p>
            <ul>
              <li>Pre-assessment audits underway with IOAS and the German accreditation body.</li>
              <li>Completion of documentation and process alignment for compliance.</li>
              <li>Open collaboration with accreditation auditors and ongoing system refinement.</li>
            </ul>
            <p>
              We remain steadfast in our commitment to transparency, quality, and sustainable growth for Ethiopia's
              organic sector.
            </p>
            <p className="thank-you">We thank you for considering our company as a trusted certification partner.</p>
          </div>
          <div className="accreditation-image animate-float">
            <img src="/images/flower.jpg" alt="Organic flower" className="flower-img" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accreditation
