import "./InternationalStandards.css"

function InternationalStandards() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>International Standard Compliance</h1>
        <div className="leaf-divider">
          <span className="divider-line"></span>
          <i className="fas fa-leaf"></i>
          <span className="divider-line"></span>
        </div>
      </div>

      <div className="standards-container">
        <div className="standards-intro">
          <p>We strictly adhere to:</p>
        </div>

        <div className="logo-grid">
          <div className="logo-item">
            <img src="/images/ISO.jpg" alt="ISO certification" className="logo-image" />
            <h3>ISO/IEC 17065</h3>
            <p>Conformity assessment for certification bodies</p>
          </div>

          <div className="logo-item">
            <img src="/images/IFOAM.png" alt="IFOAM certification" className="logo-image" />
            <h3>IFOAM Norms</h3>
            <p>Best practices in organic certification</p>
          </div>

          <div className="logo-item">
            <img src="/images/eu.jpg" alt="EU Organic certification" className="logo-image" />
            <h3>EU Organic Regulation</h3>
            <p>European standards (2018/848)</p>
          </div>

          <div className="logo-item">
            <img src="/images/usda.jpg" alt="USDA NOP certification" className="logo-image" />
            <h3>USDA NOP</h3>
            <p>US National Organic Program</p>
          </div>
        </div>

        <div className="traceability-section">
          <div className="traceability-content">
            <div className="traceability-header">
              <div className="traceability-icon">
                <i className="fas fa-route"></i>
              </div>
              <h2>Traceability & Transparency</h2>
            </div>
            <div className="traceability-text">
              <p>
                We ensure complete traceability and transparency throughout the supply chain, backed by robust
                documentation and audit trails. Our systems allow for verification at every step of the process, from
                farm to final product, ensuring the integrity of certified products.
              </p>
              <p>
                Our digital platform enhances this traceability by providing real-time access to certification data,
                allowing stakeholders to verify compliance status and track product journeys with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InternationalStandards
