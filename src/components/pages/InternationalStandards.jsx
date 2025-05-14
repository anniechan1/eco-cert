import { useTranslation } from "react-i18next"
import "./InternationalStandards.css"
import ScrollToTop from "../ScrollToTop"
import Footer from "../Footer"

function InternationalStandards() {
  const { t } = useTranslation()

  return (
    <>
      <ScrollToTop />
      <div className="page-container">
        <div className="page-header">
          <h1>{t("international_standards.title")}</h1>
          <div className="leaf-divider">
            <span className="divider-line"></span>
            <i className="fas fa-leaf"></i>
            <span className="divider-line"></span>
          </div>
        </div>

        <div className="standards-container">
          <div className="standards-intro">
            <p>{t("international_standards.intro")}</p>
          </div>

          <div className="logo-grid">
            {t("international_standards.standards", { returnObjects: true }).map((standard, index) => (
              <div className="logo-item" key={index}>
                <img
                  src={`/images/${index === 0 ? "ISO.jpg" : index === 1 ? "IFOAM.png" : index === 2 ? "eu.jpg" : "usda.jpg"}`}
                  alt={t(
                    `international_standards.logos.${index === 0 ? "iso" : index === 1 ? "ifoam" : index === 2 ? "eu" : "usda"}`,
                  )}
                  className="logo-image"
                />
                <h3>{standard.name}</h3>
                <p>{standard.description}</p>
              </div>
            ))}
          </div>

          <div className="traceability-section">
            <div className="traceability-content">
              <div className="traceability-header">
                <div className="traceability-icon">
                  <i className="fas fa-route"></i>
                </div>
                <h2>{t("international_standards.traceability.title")}</h2>
              </div>
              <div className="traceability-text">
                <p>{t("international_standards.traceability.paragraph1")}</p>
                <p>{t("international_standards.traceability.paragraph2")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default InternationalStandards
