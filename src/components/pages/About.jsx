import "./About.css"
import { useTranslation } from "react-i18next"

function About() {
  const { t } = useTranslation()

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>{t("about_page_title")}</h1>
        <div className="leaf-divider">
          <span className="divider-line"></span>
          <i className="fas fa-leaf"></i>
          <span className="divider-line"></span>
        </div>
      </div>

      <div className="image-grid-three">
        <div className="grid-image-item">
          <img src="/images/beans.webp" alt="Coffee beans" className="grid-image" />
        </div>
        <div className="grid-image-item">
          <img src="/images/beans1.webp" alt="Coffee beans close-up" className="grid-image" />
        </div>
        <div className="grid-image-item">
          <img src="/images/cooperate.webp" alt="Cooperation" className="grid-image" />
        </div>
      </div>

      <div className="content-text">
        <p>{t("about_intro_1")}</p>
        <p>
          {t("about_intro_2").split("Ecopia Value Chain (EVC)")[0]}
          <a href="https://ecopiavaluechain.com/" target="_blank" rel="noopener noreferrer" className="highlight-link">
            Ecopia Value Chain (EVC)
          </a>
          {t("about_intro_2").split("Ecopia Value Chain (EVC)")[1]}
        </p>
      </div>

      <div className="section-divider"></div>

      <div className="content-text">
        <h2 className="section-title">{t("mission_title")}</h2>
        <p>{t("mission_text")}</p>
        <ul className="mission-list">
          <li>{t("mission_list_1")}</li>
          <li>{t("mission_list_2")}</li>
          <li>{t("mission_list_3")}</li>
        </ul>
      </div>

      <div className="two-column-layout">
        <div className="column-item">
          <div className="image-card">
            <img src="/images/tree.webp" alt="Tree" className="small-image" loading="lazy" />
          </div>
        </div>

        <div className="column-item">
          <div className="image-card">
            <img src="/images/field.webp" alt="Field" className="small-image" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
