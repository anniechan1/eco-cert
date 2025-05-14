"use client"

import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import "./OrganicCertification.css"
import ScrollToTop from "../ScrollToTop"

function OrganicCertification() {
  const { t } = useTranslation()
  const [activeSection, setActiveSection] = useState("")

  // Function to handle smooth scrolling to section
  const scrollToSection = (e, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(id)
    }
  }

  // Set up hash navigation on page load and scroll tracking
  useEffect(() => {
    // Handle initial hash navigation
    if (window.location.hash) {
      const id = window.location.hash.substring(1)
      const element = document.getElementById(id)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" })
          setActiveSection(id)
        }, 500)
      }
    }

    // Set up scroll tracking for active section
    const handleScroll = () => {
      const sections = ["beekeeping", "crop-production", "processing", "wild-harvest"]

      for (const id of sections) {
        const element = document.getElementById(id)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="page-container">
      <ScrollToTop />
      <div className="page-header">
        <h1>{t("organic_certification.title")}</h1>
        <div className="leaf-divider">
          <span className="divider-line"></span>
          <i className="fas fa-leaf"></i>
          <span className="divider-line"></span>
        </div>
      </div>

      <div className="certification-nav">
        <a
          href="#beekeeping"
          onClick={(e) => scrollToSection(e, "beekeeping")}
          className={activeSection === "beekeeping" ? "active" : ""}
        >
          {t("organic_certification.nav.beekeeping")}
        </a>
        <a
          href="#crop-production"
          onClick={(e) => scrollToSection(e, "crop-production")}
          className={activeSection === "crop-production" ? "active" : ""}
        >
          {t("organic_certification.nav.crop_production")}
        </a>
        <a
          href="#processing"
          onClick={(e) => scrollToSection(e, "processing")}
          className={activeSection === "processing" ? "active" : ""}
        >
          {t("organic_certification.nav.processing")}
        </a>
        <a
          href="#wild-harvest"
          onClick={(e) => scrollToSection(e, "wild-harvest")}
          className={activeSection === "wild-harvest" ? "active" : ""}
        >
          {t("organic_certification.nav.wild_harvest")}
        </a>
      </div>

      <div className="certification-intro">
        <p>{t("organic_certification.intro.text")}</p>
        <ul>
          <li>
            <strong>{t("organic_certification.intro.crop_production.title")}</strong>{" "}
            {t("organic_certification.intro.crop_production.desc")}
          </li>
          <li>
            <strong>{t("organic_certification.intro.beekeeping.title")}</strong>
          </li>
          <li>
            <strong>{t("organic_certification.intro.processing.title")}</strong>{" "}
            {t("organic_certification.intro.processing.desc")}
          </li>
          <li>
            <strong>{t("organic_certification.intro.wild_harvest.title")}</strong>{" "}
            {t("organic_certification.intro.wild_harvest.desc")}
          </li>
        </ul>
        <p>{t("organic_certification.intro.regions")}</p>
      </div>

      <div className="two-column-layout">
        <div className="column-item">
          <div className="image-card">
            <img
              src="/images/bee.webp"
              alt={t("organic_certification.images.beekeeping")}
              className="certification-image"
              loading="lazy"
            />
          </div>
        </div>
        <div className="column-item">
          <div className="image-card">
            <img
              src="/images/bee1.webp"
              alt={t("organic_certification.images.bee_on_flower")}
              className="certification-image"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="certification-types">
        <div id="beekeeping" className="certification-type">
          <h2>{t("organic_certification.beekeeping.title")}</h2>
          <p>{t("organic_certification.beekeeping.intro")}</p>
          <ul>
            <li>
              <strong>{t("organic_certification.beekeeping.location.title")}</strong>{" "}
              {t("organic_certification.beekeeping.location.desc")}
            </li>
            <li>
              <strong>{t("organic_certification.beekeeping.health.title")}</strong>{" "}
              {t("organic_certification.beekeeping.health.desc")}
            </li>
            <li>
              <strong>{t("organic_certification.beekeeping.harvesting.title")}</strong>{" "}
              {t("organic_certification.beekeeping.harvesting.desc")}
            </li>
            <li>
              <strong>{t("organic_certification.beekeeping.traceability.title")}</strong>{" "}
              {t("organic_certification.beekeeping.traceability.desc")}
            </li>
          </ul>

          <div className="highlight-box">
            <h3>{t("organic_certification.beekeeping.impact.title")}</h3>
            <p>{t("organic_certification.beekeeping.impact.intro")}</p>
            <ul>
              <li>{t("organic_certification.beekeeping.impact.markets")}</li>
              <li>{t("organic_certification.beekeeping.impact.biodiversity")}</li>
              <li>{t("organic_certification.beekeeping.impact.reputation")}</li>
            </ul>
          </div>
        </div>

        <div id="crop-production" className="certification-type">
          <h2>{t("organic_certification.crop_production.title")}</h2>
          <p>{t("organic_certification.crop_production.intro")}</p>
          <h3>{t("organic_certification.crop_production.areas_title")}</h3>
          <ul>
            <li>
              <strong>{t("organic_certification.crop_production.soil.title")}</strong>{" "}
              {t("organic_certification.crop_production.soil.desc")}
            </li>
            <li>
              <strong>{t("organic_certification.crop_production.pest.title")}</strong>{" "}
              {t("organic_certification.crop_production.pest.desc")}
            </li>
            <li>
              <strong>{t("organic_certification.crop_production.seed.title")}</strong>{" "}
              {t("organic_certification.crop_production.seed.desc")}
            </li>
            <li>
              <strong>{t("organic_certification.crop_production.water.title")}</strong>{" "}
              {t("organic_certification.crop_production.water.desc")}
            </li>
            <li>
              <strong>{t("organic_certification.crop_production.traceability.title")}</strong>{" "}
              {t("organic_certification.crop_production.traceability.desc")}
            </li>
          </ul>
          <h3>{t("organic_certification.crop_production.benefits_title")}</h3>
          <ul>
            <li>{t("organic_certification.crop_production.benefits.soil")}</li>
            <li>{t("organic_certification.crop_production.benefits.environment")}</li>
            <li>{t("organic_certification.crop_production.benefits.markets")}</li>
          </ul>

          <img
            src="/images/rural.webp"
            alt={t("organic_certification.images.crop_field")}
            className="certification-image rural-image"
            loading="lazy"
          />
        </div>

        <div id="processing" className="certification-type">
          <h2>{t("organic_certification.processing.title")}</h2>
          <p>{t("organic_certification.processing.intro")}</p>
          <h3>{t("organic_certification.processing.areas_title")}</h3>
          <ul>
            <li>
              <strong>{t("organic_certification.processing.integrity.title")}</strong>{" "}
              {t("organic_certification.processing.integrity.desc")}
            </li>
            <li>
              <strong>{t("organic_certification.processing.sanitation.title")}</strong>{" "}
              {t("organic_certification.processing.sanitation.desc")}
            </li>
            <li>
              <strong>{t("organic_certification.processing.verification.title")}</strong>{" "}
              {t("organic_certification.processing.verification.desc")}
            </li>
            <li>
              <strong>{t("organic_certification.processing.storage.title")}</strong>{" "}
              {t("organic_certification.processing.storage.desc")}
            </li>
            <li>
              <strong>{t("organic_certification.processing.traceability.title")}</strong>{" "}
              {t("organic_certification.processing.traceability.desc")}
            </li>
          </ul>
          <h3>{t("organic_certification.processing.scope_title")}</h3>
          <ul>
            <li>{t("organic_certification.processing.scope.food")}</li>
            <li>{t("organic_certification.processing.scope.herbal")}</li>
            <li>{t("organic_certification.processing.scope.fiber")}</li>
            <li>{t("organic_certification.processing.scope.packaging")}</li>
          </ul>
          <p>
            <strong>{t("organic_certification.processing.outcome_title")}</strong>{" "}
            {t("organic_certification.processing.outcome_desc")}
          </p>
        </div>

        <div id="wild-harvest" className="certification-type">
          <h2>{t("organic_certification.wild_harvest.title")}</h2>
          <p>{t("organic_certification.wild_harvest.intro")}</p>
          <h3>{t("organic_certification.wild_harvest.areas_title")}</h3>
          <ul>
            <li>
              <strong>{t("organic_certification.wild_harvest.practices.title")}</strong>{" "}
              {t("organic_certification.wild_harvest.practices.desc")}
            </li>
            <li>
              <strong>{t("organic_certification.wild_harvest.ecosystem.title")}</strong>{" "}
              {t("organic_certification.wild_harvest.ecosystem.desc")}
            </li>
            <li>
              <strong>{t("organic_certification.wild_harvest.training.title")}</strong>{" "}
              {t("organic_certification.wild_harvest.training.desc")}
            </li>
            <li>
              <strong>{t("organic_certification.wild_harvest.traceability.title")}</strong>{" "}
              {t("organic_certification.wild_harvest.traceability.desc")}
            </li>
            <li>
              <strong>{t("organic_certification.wild_harvest.community.title")}</strong>{" "}
              {t("organic_certification.wild_harvest.community.desc")}
            </li>
          </ul>
          <h3>{t("organic_certification.wild_harvest.scope_title")}</h3>
          <ul>
            <li>{t("organic_certification.wild_harvest.scope.medicinal")}</li>
            <li>{t("organic_certification.wild_harvest.scope.edible")}</li>
            <li>{t("organic_certification.wild_harvest.scope.gums")}</li>
            <li>{t("organic_certification.wild_harvest.scope.forest")}</li>
          </ul>
          <p>
            <strong>{t("organic_certification.wild_harvest.impact_title")}</strong>{" "}
            {t("organic_certification.wild_harvest.impact_desc")}
          </p>
        </div>
      </div>
 
    </div>
  )
}

export default OrganicCertification
