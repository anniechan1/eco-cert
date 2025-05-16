import { useTranslation } from "react-i18next"
import "./IndependenceIntegrity.css"

function IndependenceIntegrity() {
  const { t } = useTranslation()

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>{t("independence_integrity.title")}</h1>
        <div className="leaf-divider">
          <span className="divider-line"></span>
          <i className="fas fa-leaf"></i>
          <span className="divider-line"></span>
        </div>
      </div>

      <div className="integrity-section">
        <div className="integrity-header">
          <i className="fas fa-shield-alt integrity-icon"></i>
          <h2>{t("independence_integrity.commitment.title")}</h2>
        </div>
        <p className="integrity-intro">{t("independence_integrity.commitment.intro")}</p>

        <div className="principles-container">
          <div className="principles-list">
            {t("independence_integrity.commitment.principles", { returnObjects: true }).map((principle, index) => (
              <div className="principle-item" key={index}>
                <div className="principle-icon">
                  <i className={`fas fa-${principle.icon}`}></i>
                </div>
                <div className="principle-text">
                  <p>{principle.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="principles-image">
            <img
              src={t("independence_integrity.commitment.image.src") || "/placeholder.svg"}
              alt={t("independence_integrity.commitment.image.alt")}
              className="principles-image-placeholder"
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default IndependenceIntegrity