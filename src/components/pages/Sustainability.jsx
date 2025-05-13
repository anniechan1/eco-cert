import "./Sustainability.css"
import { useTranslation } from "react-i18next"

function Sustainability() {
  const { t } = useTranslation()

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>{t("sustainability_title")}</h1>
        <div className="leaf-divider">
          <span className="divider-line"></span>
          <i className="fas fa-leaf"></i>
          <span className="divider-line"></span>
        </div>
      </div>

      <div className="sustainability-intro">
        <p>{t("sustainability_intro")}</p>
      </div>

      <div className="commitment-showcase">
        <div className="commitment-item">
          <div className="commitment-image">
            <img src="/images/cows.webp" alt={t("sustainability_image_1_alt")} />
          </div>
          <div className="commitment-content">
            <div className="commitment-icon">
              <i className="fas fa-seedling"></i>
            </div>
            <h3>{t("sustainability_commitment_1_title")}</h3>
            <p>{t("sustainability_commitment_1_text")}</p>
          </div>
        </div>

        <div className="commitment-item reverse">
          <div className="commitment-image">
            <img src="/images/kid.webp" alt={t("sustainability_image_2_alt")} loading="lazy" />
          </div>
          <div className="commitment-content">
            <div className="commitment-icon">
              <i className="fas fa-handshake"></i>
            </div>
            <h3>{t("sustainability_commitment_2_title")}</h3>
            <p>{t("sustainability_commitment_2_text")}</p>
          </div>
        </div>

        <div className="commitment-item">
          <div className="commitment-image">
            <img src="/images/mom.webp" alt={t("sustainability_image_3_alt")} loading="lazy" />
          </div>
          <div className="commitment-content">
            <div className="commitment-icon">
              <i className="fas fa-users"></i>
            </div>
            <h3>{t("sustainability_commitment_3_title")}</h3>
            <p>{t("sustainability_commitment_3_text")}</p>
          </div>
        </div>

        <div className="commitment-item reverse">
          <div className="commitment-image">
            <img src="/images/produce.webp" alt={t("sustainability_image_4_alt")} loading="lazy" />
          </div>
          <div className="commitment-content">
            <div className="commitment-icon">
              <i className="fas fa-project-diagram"></i>
            </div>
            <h3>{t("sustainability_commitment_4_title")}</h3>
            <p>{t("sustainability_commitment_4_text")}</p>
          </div>
        </div>

        <div className="commitment-item">
          <div className="commitment-image">
            <img src="/images/teach.webp" alt={t("sustainability_image_5_alt")} loading="lazy" />
          </div>
          <div className="commitment-content">
            <div className="commitment-icon">
              <i className="fas fa-chalkboard-teacher"></i>
            </div>
            <h3>{t("sustainability_commitment_5_title")}</h3>
            <p>{t("sustainability_commitment_5_text")}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sustainability
