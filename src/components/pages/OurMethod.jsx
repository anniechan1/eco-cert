import "./OurMethod.css"
import { useTranslation } from "react-i18next"

function OurMethod() {
  const { t } = useTranslation()

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>{t("method_title")}</h1>
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
            {t("method_intro_1")}
            <a
              href="https://ecopiavaluechain.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link"
            >
              {t("method_evc_link")}
            </a>
            {t("method_intro_2")}
          </p>
          <p>{t("method_intro_3")}</p>
        </div>
      </div>

      <div className="digital-features">
        <div className="feature-item">
          <div className="feature-icon">
            <i className="fas fa-file-alt"></i>
          </div>
          <div className="feature-content">
            <h3>{t("method_feature_1")}</h3>
          </div>
        </div>

        <div className="feature-item">
          <div className="feature-icon">
            <i className="fas fa-chart-line"></i>
          </div>
          <div className="feature-content">
            <h3>{t("method_feature_2")}</h3>
          </div>
        </div>

        <div className="feature-item">
          <div className="feature-icon">
            <i className="fas fa-sync-alt"></i>
          </div>
          <div className="feature-content">
            <h3>{t("method_feature_3")}</h3>
          </div>
        </div>

        <div className="feature-item">
          <div className="feature-icon">
            <i className="fas fa-search"></i>
          </div>
          <div className="feature-content">
            <h3>{t("method_feature_4")}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurMethod
