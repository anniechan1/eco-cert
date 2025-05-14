import "./KeyCertification.css"
import ScrollToTop from "../ScrollToTop"
import { useTranslation } from "react-i18next"

function KeyCertification() {
  const { t } = useTranslation()

  return (
    <>
      <ScrollToTop />
      <div className="page-container">
        <div className="page-header">
          <h1>{t("key_certification.title")}</h1>
          <div className="leaf-divider">
            <span className="divider-line"></span>
            <i className="fas fa-leaf"></i>
            <span className="divider-line"></span>
          </div>
        </div>

        <div className="certifications-grid">
          <div className="certification-item">
            <div className="certification-logo">
              <img src="/images/eu.jpg" alt={t("key_certification.eu_organic.alt")} />
            </div>
            <div className="certification-title">{t("key_certification.eu_organic.title")}</div>
            <div className="certification-description">{t("key_certification.eu_organic.description")}</div>
          </div>

          <div className="certification-item">
            <div className="certification-logo">
              <img src="/images/fairtrade-logo.png" alt={t("key_certification.fairtrade.alt")} />
            </div>
            <div className="certification-title">{t("key_certification.fairtrade.title")}</div>
            <div className="certification-description">{t("key_certification.fairtrade.description")}</div>
          </div>

          <div className="certification-item">
            <div className="certification-logo">
              <img src="/images/afcta-logo.png" alt={t("key_certification.afcta.alt")} />
            </div>
            <div className="certification-title">{t("key_certification.afcta.title")}</div>
            <div className="certification-description">{t("key_certification.afcta.description")}</div>
          </div>

          <div className="certification-item">
            <div className="certification-logo">
              <img src="/images/ecopia-logo.png" alt={t("key_certification.eco_software.alt")} />
            </div>
            <div className="certification-title">{t("key_certification.eco_software.title")}</div>
            <div className="certification-description">{t("key_certification.eco_software.description")}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default KeyCertification
