import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../LegalPages.css";

function Sitemap() {
  const { t } = useTranslation();

  return (
    <div className="legal-page-container">
      <div className="legal-page-header">
        <h1>{t("sitemap.title")}</h1>
        <div className="legal-divider"></div>
      </div>

      <div className="legal-content">
        <div className="sitemap-section">
          <h2>{t("sitemap.main_pages.title")}</h2>
          <ul className="sitemap-list">
            <li>
              <Link to="/">{t("sitemap.main_pages.home")}</Link>
            </li>
            <li>
              <Link to="/about">{t("sitemap.main_pages.about")}</Link>
            </li>
            <li>
              <Link to="/history">{t("sitemap.main_pages.history")}</Link>
            </li>
            <li>
              <Link to="/our-method">{t("sitemap.main_pages.our_method")}</Link>
            </li>
            <li>
              <Link to="/digital-platform">{t("sitemap.main_pages.digital_platform")}</Link>
            </li>
            <li>
              <Link to="/sustainability">{t("sitemap.main_pages.sustainability")}</Link>
            </li>
            <li>
              <Link to="/contact">{t("sitemap.main_pages.contact")}</Link>
            </li>
          </ul>
        </div>

        <div className="sitemap-section">
          <h2>{t("sitemap.certification.title")}</h2>
          <ul className="sitemap-list">
            <li>
              <Link to="/organic-certification">{t("sitemap.certification.organic_certification")}</Link>
            </li>
            <li>
              <Link to="/certification-process">{t("sitemap.certification.certification_process")}</Link>
            </li>
            <li>
              <Link to="/independence-integrity">{t("sitemap.certification.independence_integrity")}</Link>
            </li>
            <li>
              <Link to="/international-standards">{t("sitemap.certification.international_standards")}</Link>
            </li>
            <li>
              <Link to="/application-form">{t("sitemap.certification.application")}</Link>
            </li>
          </ul>
        </div>

        <div className="sitemap-section">
          <h2>{t("sitemap.services.title")}</h2>
          <ul className="sitemap-list">
            <li>
              <Link to="/farmer-training">{t("sitemap.services.farmer_training")}</Link>
            </li>
          </ul>
        </div>

        <div className="sitemap-section">
          <h2>{t("sitemap.partners.title")}</h2>
          <ul className="sitemap-list">
            <li>
              <Link to="/partnerships">{t("sitemap.partners.partnerships")}</Link>
            </li>
            <li>
              <Link to="/accreditation">{t("sitemap.partners.accreditation")}</Link>
            </li>
          </ul>
        </div>

        <div className="sitemap-section">
          <h2>{t("sitemap.legal.title")}</h2>
          <ul className="sitemap-list">
            <li>
              <Link to="/privacy-policy">{t("sitemap.legal.privacy_policy")}</Link>
            </li>
            <li>
              <Link to="/terms-of-service">{t("sitemap.legal.terms_of_service")}</Link>
            </li>
            <li>
              <Link to="/cookie-policy">{t("sitemap.legal.cookie_policy")}</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sitemap;