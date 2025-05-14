import { useTranslation } from "react-i18next";
import "./Partnerships.css";
import ScrollToTop from "../ScrollToTop";


function Partnerships() {
  const { t } = useTranslation();

  return (
    <>
      <ScrollToTop />
      <div className="page-container">
        <div className="page-header">
          <h1>{t("partnerships.title")}</h1>
          <div className="leaf-divider">
            <span className="divider-line"></span>
            <i className="fas fa-leaf"></i>
            <span className="divider-line"></span>
          </div>
        </div>

        <div className="content-text">
          <p>{t("partnerships.intro")}</p>
        </div>

        <div className="partnerships-showcase">
          {/* First partnership showcase with large image */}
          <div className="partnership-showcase-item">
            <div className="showcase-content">
              <h3>{t("partnerships.local.title")}</h3>
              <p>{t("partnerships.local.text1")}</p>
              <p>{t("partnerships.local.text2")}</p>
            </div>
            <img src="/images/messe.webp" alt={t("partnerships.images.fair")} className="showcase-image" />
          </div>

          {/* Second partnership showcase with right-aligned image grid - International Organizations */}
          <div className="partnership-showcase-item">
            <div className="showcase-content">
              <h3>{t("partnerships.international.title")}</h3>
              <p>{t("partnerships.international.text1")}</p>
              <p>{t("partnerships.international.text2")}</p>
            </div>
            <div className="showcase-dual-images">
              <div className="showcase-image-small">
                <img
                  src="/images/talk1.webp"
                  alt={t("partnerships.images.research")}
                  className="showcase-image"
                  loading="lazy"
                  style={{ objectPosition: "center" }}
                />
              </div>
              <div className="showcase-image-small">
                <img
                  src="/images/talk2.webp"
                  alt={t("partnerships.images.handshake")}
                  className="showcase-image"
                  loading="lazy"
                  style={{ objectPosition: "center" }}
                />
              </div>
            </div>
          </div>

          {/* Third partnership with image gallery - Universities & Research */}
          <div className="partnership-gallery-section">
            <div className="gallery-header">
              <div className="gallery-icon">
                <i className="fas fa-university"></i>
              </div>
              <h3>{t("partnerships.universities.title")}</h3>
            </div>
            <p className="gallery-description">
              {t("partnerships.universities.description")}
            </p>

            <div className="image-gallery">
              <div className="gallery-main">
                <img
                  src="/images/lecture.webp"
                  alt={t("partnerships.images.quality_testing")}
                  className="gallery-image main-image"
                  loading="lazy"
                />
              </div>
              <div className="gallery-side">
                <img
                  src="/images/lab3.webp"
                  alt={t("partnerships.images.lecture")}
                  className="gallery-image side-image"
                  loading="lazy"
                />
                <img
                  src="/images/lab4.webp"
                  alt={t("partnerships.images.handshake")}
                  className="gallery-image side-image"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  
    </>
  );
}

export default Partnerships;