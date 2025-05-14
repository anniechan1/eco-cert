import { useTranslation } from "react-i18next"
import "./Accreditation.css"
import ScrollToTop from "../ScrollToTop"

function Accreditation() {
  const { t } = useTranslation()

  return (
    <>
      <ScrollToTop />
      <div className="accreditation-container">
        <div className="page-header">
          <h1>{t("accreditation.title")}</h1>
          <div className="leaf-divider">
            <span className="divider-line"></span>
            <i className="fas fa-leaf"></i>
            <span className="divider-line"></span>
          </div>
        </div>

        <div className="accreditation-content">
          <div className="accreditation-text">
            <p className="intro-text">{t("accreditation.content.intro")}</p>
            <ul className="accreditation-list">
              {t("accreditation.content.points", { returnObjects: true }).map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            <p className="commitment-text">{t("accreditation.content.commitment")}</p>
            <p className="thank-you">{t("accreditation.content.thank_you")}</p>
          </div>
          <div className="accreditation-image">
            <img src="/images/flower.jpg" alt={t("accreditation.images.flower")} className="accreditation-img" />
          </div>
        </div>
      </div>

    </>
  )
}

export default Accreditation
