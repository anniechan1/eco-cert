import { useTranslation } from "react-i18next"
import "./FarmerTraining.css"
import ScrollToTop from "../ScrollToTop"


function FarmerTraining() {
  const { t } = useTranslation()

  return (
    <>
      <ScrollToTop />
      <div className="training-container">
        <div className="page-header">
          <h1>{t("farmer_training.title")}</h1>
          <div className="leaf-divider">
            <span className="divider-line"></span>
            <i className="fas fa-leaf"></i>
            <span className="divider-line"></span>
          </div>
        </div>

        <div className="training-intro">
          <p>{t("farmer_training.intro")}</p>
          <p>{t("farmer_training.description")}</p>
        </div>

        <div className="training-sections">
          {/* Farmers & Producers Section */}
          <div className="training-card">
            <div className="card-header">
              <i className="fas fa-seedling"></i>
              <h2>{t("farmer_training.farmers.title")}</h2>
            </div>
            <div className="card-content">
              <p>{t("farmer_training.farmers.intro")}</p>
              <ul>
                {t("farmer_training.farmers.points", { returnObjects: true }).map((point, index) => (
                  <li key={index}>
                    <strong>{point.title}</strong> {point.description}
                  </li>
                ))}
              </ul>

              <h3>{t("farmer_training.farmers.programs_title")}</h3>
              <ul>
                {t("farmer_training.farmers.programs", { returnObjects: true }).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <div className="training-image-grid three-images">
                <div className="training-image-item">
                  <img
                    src="/images/girl.webp"
                    alt={t("farmer_training.farmers.images.young_farmer")}
                    className="training-img"
                    loading="lazy"
                  />
                </div>
                <div className="training-image-item">
                  <img
                    src="/images/lesson.webp"
                    alt={t("farmer_training.farmers.images.workshop")}
                    className="training-img"
                    loading="lazy"
                  />
                </div>
                <div className="training-image-item">
                  <img
                    src="/images/lab1.webp"
                    alt={t("farmer_training.farmers.images.sustainable_practices")}
                    className="training-img"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Inspectors Section */}
          <div className="training-card">
            <div className="card-header">
              <i className="fas fa-search"></i>
              <h2>{t("farmer_training.inspectors.title")}</h2>
            </div>
            <div className="card-content">
              <p>{t("farmer_training.inspectors.intro")}</p>
              <ul>
                {t("farmer_training.inspectors.points", { returnObjects: true }).map((point, index) => (
                  <li key={index}>
                    <strong>{point.title}</strong> {point.description}
                  </li>
                ))}
              </ul>

              <h3>{t("farmer_training.inspectors.courses_title")}</h3>
              <ul>
                {t("farmer_training.inspectors.courses", { returnObjects: true }).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <div className="training-image-grid">
                <div className="training-image-item">
                  <img
                    src="/images/discuss.webp"
                    alt={t("farmer_training.inspectors.images.discussion")}
                    className="training-img"
                    loading="lazy"
                  />
                </div>
                <div className="training-image-item">
                  <img
                    src="/images/talk.webp"
                    alt={t("farmer_training.inspectors.images.field_training")}
                    className="training-img"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Auditors Section */}
          <div className="training-card">
            <div className="card-header">
              <i className="fas fa-clipboard-check"></i>
              <h2>{t("farmer_training.auditors.title")}</h2>
            </div>
            <div className="card-content">
              <p>{t("farmer_training.auditors.intro")}</p>
              <ul>
                {t("farmer_training.auditors.points", { returnObjects: true }).map((point, index) => (
                  <li key={index}>
                    <strong>{point.title}</strong> {point.description}
                  </li>
                ))}
              </ul>

              <div className="auditor-content-layout">
                <div className="auditor-text">
                  <h3>{t("farmer_training.auditors.training_title")}</h3>
                  <ul>
                    {t("farmer_training.auditors.training", { returnObjects: true }).map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="auditor-image">
                  <div className="training-image-item">
                    <img
                      src="/images/group.webp"
                      alt={t("farmer_training.auditors.image")}
                      className="training-img"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Learning Platform Section */}
          <div className="platform-section">
            <h2>{t("farmer_training.platform.title")}</h2>
            <div className="platform-content">
              <div className="platform-text">
                <p>{t("farmer_training.platform.intro")}</p>
                <ul>
                  {t("farmer_training.platform.features", { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <div className="feature-grid">
                  {t("farmer_training.platform.grid", { returnObjects: true }).map((feature, index) => (
                    <div className="feature-item" key={index}>
                      <div className="feature-icon">
                        <i className={`fas fa-${feature.icon}`}></i>
                      </div>
                      <div className="feature-text">{feature.text}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="platform-image">
                <div className="training-image-item">
                  <img
                    src="/images/mobile.webp"
                    alt={t("farmer_training.platform.image")}
                    className="training-img"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Get Involved Section */}
        <div className="get-involved">
          <h2>{t("farmer_training.get_involved.title")}</h2>
          <p>{t("farmer_training.get_involved.description")}</p>
          <ul>
            {t("farmer_training.get_involved.options", { returnObjects: true }).map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
          <p>{t("farmer_training.get_involved.updates")}</p>
          <a href="https://www.seratera.com/" target="_blank" rel="noopener noreferrer">
            <button className="cta-button">{t("farmer_training.get_involved.button")}</button>
          </a>
        </div>
      </div>

    </>
  )
}

export default FarmerTraining
