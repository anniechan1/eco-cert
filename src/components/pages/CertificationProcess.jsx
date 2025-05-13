import { useTranslation } from "react-i18next"
import "./CertificationProcess.css"

function CertificationProcess() {
  const { t } = useTranslation()

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>{t("certification_process.title")}</h1>
        <div className="leaf-divider">
          <span className="divider-line"></span>
          <i className="fas fa-leaf"></i>
          <span className="divider-line"></span>
        </div>
      </div>

      <div className="process-container">
        <div className="process-intro">
          <p>{t("certification_process.intro")}</p>
        </div>

        <div className="process-timeline">
          {t("certification_process.steps", { returnObjects: true }).map((step, index) => (
            <div className="timeline-step" key={index}>
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="process-compliance">
          <div className="compliance-icon">
            <i className={`fas fa-${t("certification_process.compliance.icon")}`}></i>
          </div>
          <p>{t("certification_process.compliance.text")}</p>
        </div>
      </div>
    </div>
  )
}

export default CertificationProcess
