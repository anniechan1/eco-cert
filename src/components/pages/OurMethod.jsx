import "./OurMethod.css"

function OurMethod() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Digitally-Driven Certification</h1>
        <div className="leaf-divider">
          <span className="divider-line"></span>
          <i className="fas fa-leaf"></i>
          <span className="divider-line"></span>
        </div>
      </div>

      <div className="digital-intro">
        <div className="digital-animation">
          <div className="digital-certificate">
            <div className="certificate-body">
              <div className="certificate-icon">
                <i className="fas fa-award"></i>
              </div>
              <div className="certificate-lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="certificate-badge">
              <i className="fas fa-check"></i>
            </div>
          </div>
        </div>
        <div className="intro-text">
          <p>
            At EcoCertification, we streamline certification through digital innovation. Our online platform—built in
            cooperation with{" "}
            <a
              href="https://ecopiavaluechain.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link"
            >
              EVC (Ecopia Value Chain)
            </a>
            —simplifies communication, documentation, and tracking throughout the certification process.
          </p>
          <p>From application to final approval, our digital tools:</p>
        </div>
      </div>

      <div className="digital-features">
        <div className="feature-item">
          <div className="feature-icon">
            <i className="fas fa-file-alt"></i>
          </div>
          <div className="feature-content">
            <h3>Reduce paperwork</h3>
          </div>
        </div>

        <div className="feature-item">
          <div className="feature-icon">
            <i className="fas fa-chart-line"></i>
          </div>
          <div className="feature-content">
            <h3>Improve data accuracy</h3>
          </div>
        </div>

        <div className="feature-item">
          <div className="feature-icon">
            <i className="fas fa-sync-alt"></i>
          </div>
          <div className="feature-content">
            <h3>Real-time status updates</h3>
          </div>
        </div>

        <div className="feature-item">
          <div className="feature-icon">
            <i className="fas fa-search"></i>
          </div>
          <div className="feature-content">
            <h3>Increase transparency</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurMethod
