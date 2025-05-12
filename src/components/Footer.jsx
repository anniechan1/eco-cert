"use client"

import "./Footer.css"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo-section">
          <img src="/images/logo.png" alt="EcoCertification Logo" className="footer-logo-img" />

          <p className="footer-tagline">Certifying sustainability, empowering change</p>
          <p className="footer-description">
            EcoCertification provides trusted, transparent, and accessible certification services for a more sustainable
            future.
          </p>
        </div>

        <div className="footer-contact-section">
          <div className="footer-contact-columns">
            {/* Ethiopia Column */}
            <div className="footer-contact-column">
              <h3>Ethiopia</h3>
              <ul className="contact-info">
                <li>
                  <i className="fas fa-user"></i>
                  <span>Yonas Alemu</span>
                </li>
                <li>
                  <i className="fas fa-envelope"></i>
                  <span>yosheplc@gmail.com</span>
                </li>
                <li>
                  <i className="fas fa-phone"></i>
                  <span>+251 97 498 4675</span>
                </li>
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>
                    Ecopia PLC
                    <br />
                    PO Box 1072
                    <br />
                    Addis Ababa
                  </span>
                </li>
              </ul>
            </div>

            {/* Germany Column */}
            <div className="footer-contact-column">
              <h3>Germany</h3>
              <ul className="contact-info">
                <li>
                  <i className="fas fa-user"></i>
                  <span>Dr. Frederike Krammer</span>
                </li>
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
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-service">Terms of Service</Link>
          <Link to="/cookie-policy">Cookie Policy</Link>
          <Link to="/sitemap">Sitemap</Link>
        </div>
        <p className="copyright">&copy; {new Date().getFullYear()} EcoCertification.</p>
      </div>
    </footer>
  )
}

export default Footer
