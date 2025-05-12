import "./CertificationProcess.css"

function CertificationProcess() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Certification Process</h1>
        <div className="leaf-divider">
          <span className="divider-line"></span>
          <i className="fas fa-leaf"></i>
          <span className="divider-line"></span>
        </div>
      </div>

      <div className="process-container">
        <div className="process-intro">
          <p>We follow a systematic, transparent process:</p>
        </div>

        <div className="process-timeline">
          <div className="timeline-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Application & Document Review</h3>
              <p>
                The first step in your certification journey begins with submitting your application and required
                documentation.
              </p>
            </div>
          </div>

          <div className="timeline-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Pre-Assessment (Gap Analysis)</h3>
              <p>
                We conduct a preliminary assessment to identify any gaps between your current practices and
                certification requirements.
              </p>
            </div>
          </div>

          <div className="timeline-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Onsite Audit</h3>
              <p>Comprehensive inspection of operations to verify compliance with applicable standards.</p>
            </div>
          </div>

          <div className="timeline-step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Evaluation</h3>
              <p>Internal review and risk assessment of all findings from the audit process.</p>
            </div>
          </div>

          <div className="timeline-step">
            <div className="step-number">5</div>
            <div className="step-content">
              <h3>Certification Decision</h3>
              <p>
                Independent decision-making committee reviews all documentation and makes the final certification
                determination.
              </p>
            </div>
          </div>

          <div className="timeline-step">
            <div className="step-number">6</div>
            <div className="step-content">
              <h3>Surveillance Audits & Renewal</h3>
              <p>
                Regular follow-up audits ensure continued compliance, with full renewal assessments at specified
                intervals.
              </p>
            </div>
          </div>
        </div>

        <div className="process-compliance">
          <div className="compliance-icon">
            <i className="fas fa-certificate"></i>
          </div>
          <p>This process is fully aligned with ISO/IEC 17065 and organic standards required by IOAS and EU bodies.</p>
        </div>
      </div>
    </div>
  )
}

export default CertificationProcess
