import "./IndependenceIntegrity.css"

function IndependenceIntegrity() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Independence & Integrity</h1>
        <div className="leaf-divider">
          <span className="divider-line"></span>
          <i className="fas fa-leaf"></i>
          <span className="divider-line"></span>
        </div>
      </div>

      <div className="integrity-section">
        <div className="integrity-header">
          <i className="fas fa-shield-alt integrity-icon"></i>
          <h2>Our Commitment to Impartiality</h2>
        </div>
        <p className="integrity-intro">We maintain rigorous impartiality through:</p>

        <div className="principles-container">
          <div className="principles-list">
            <div className="principle-item">
              <div className="principle-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <div className="principle-text">
                <p>Separation of certification and consultancy services.</p>
              </div>
            </div>

            <div className="principle-item">
              <div className="principle-icon">
                <i className="fas fa-user-shield"></i>
              </div>
              <div className="principle-text">
                <p>Auditor independence, with rotation policies to prevent bias.</p>
              </div>
            </div>

            <div className="principle-item">
              <div className="principle-icon">
                <i className="fas fa-balance-scale"></i>
              </div>
              <div className="principle-text">
                <p>A robust conflict-of-interest policy.</p>
              </div>
            </div>

            <div className="principle-item">
              <div className="principle-icon">
                <i className="fas fa-comments"></i>
              </div>
              <div className="principle-text">
                <p>Transparent appeals and complaints processes.</p>
              </div>
            </div>
          </div>

          <div className="principles-image">
            <img
              src="/images/cal.jpg"
              alt="Handshake representing integrity and partnership"
              className="principles-image-placeholder"
            />
          </div>
        </div>

        <div className="governance-section">
          <div className="governance-header">
            <i className="fas fa-landmark governance-icon"></i>
            <h2>Governance Structure</h2>
          </div>

          <div className="governance-content full-width">
            <div className="governance-text">
              <p>
                Our governance structure includes an oversight committee to ensure objectivity and continuous
                compliance. This committee consists of independent experts who review our certification processes, audit
                our operations, and provide guidance on maintaining the highest standards of integrity and impartiality.
              </p>
              <p>
                The committee meets quarterly to review our operations and ensure that all certification decisions are
                made with complete independence and adherence to international standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndependenceIntegrity
