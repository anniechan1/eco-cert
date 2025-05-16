"use client"

import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import "./Footer.css"

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo-section">
          <img src="/images/logo.png" alt="EcoCertification Logo" className="footer-logo-img" />
          <p className="footer-tagline">{t("footer.tagline")}</p>
          <p className="footer-description">{t("footer.description")}</p>
        </div>

        <div className="footer-contact-section">
          <div className="footer-contact-columns">
            <div className="footer-contact-column">
              <h3>{t("footer.ethiopia")}</h3>
              <ul className="contact-info">
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Ecopia PLC, PO Box 1072, Addis Ababa</span>
                </li>
                <li>
                  <i className="fas fa-phone"></i>
                  <span>+251 99 351 4543</span>
                </li>
                <li>
                  <i className="fas fa-envelope"></i>
                  <span>yosheplc@gmail.com</span>
                </li>
              </ul>
            </div>
            <div className="footer-contact-column">
              <h3>{t("footer.germany")}</h3>
              <ul className="contact-info">
                <li>
                  <i className="fas fa-envelope"></i>
                  <span>info@greenacademyafrica.com</span>
                </li>
                <li>
                  <i className="fas fa-phone"></i>
                  <span>+49 1577 3746519</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-legal">
          <Link to="/privacy-policy">{t("legal-line.privacy_policy")}</Link>
          <Link to="/terms-of-service">{t("legal-line.terms_of_service")}</Link>
          <Link to="/cookie-policy">{t("legal-line.cookie_policy")}</Link>
          <Link to="/sitemap">{t("legal-line.sitemap")}</Link>
        </div>
        <p className="copyright">{t("footer.copyright", { year: "2025" })}</p>
      </div>
    </footer>
  )
}

export default Footer