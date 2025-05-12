import "../LegalPages.css"
import { Link } from "react-router-dom"

function Sitemap() {
  return (
    <div className="legal-page-container">
      <div className="legal-page-header">
        <h1>Sitemap</h1>
        <div className="legal-divider"></div>
      </div>

      <div className="legal-content">
        <section className="sitemap-section">
          <h2>Main Pages</h2>
          <ul className="sitemap-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/history">History and Our Team</Link>
            </li>
            <li>
              <Link to="/our-method">Our Method</Link>
            </li>
            <li>
              <Link to="/digital-platform">Eco Certification Digital Platform</Link>
            </li>
            <li>
              <Link to="/sustainability">Our Commitment</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </section>

        <section className="sitemap-section">
          <h2>Certification</h2>
          <ul className="sitemap-list">
            <li>
              <Link to="/organic-certification">Scope of Certification</Link>
            </li>
            <li>
              <Link to="/certification-process">Certification Process</Link>
            </li>
            <li>
              <Link to="/independence-integrity">Independence & Integrity</Link>
            </li>
            <li>
              <Link to="/international-standards">International Standards</Link>
            </li>
            <li>
              <Link to="/application">Get Certified</Link>
            </li>
          </ul>
        </section>

        <section className="sitemap-section">
          <h2>Services</h2>
          <ul className="sitemap-list">
            <li>
              <Link to="/services/farmer-training">Training Programs</Link>
            </li>
          </ul>
        </section>

        <section className="sitemap-section">
          <h2>Partners & Accreditations</h2>
          <ul className="sitemap-list">
            <li>
              <Link to="/partnerships">Partnerships & Collaborations</Link>
            </li>
            <li>
              <Link to="/accreditation">Accreditation</Link>
            </li>
          </ul>
        </section>

        <section className="sitemap-section">
          <h2>Legal</h2>
          <ul className="sitemap-list">
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms-of-service">Terms of Service</Link>
            </li>
            <li>
              <Link to="/cookie-policy">Cookie Policy</Link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default Sitemap
