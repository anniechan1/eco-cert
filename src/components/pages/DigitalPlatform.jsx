"use client"

import "./DigitalPlatform.css"
import { useEffect, useRef } from "react"
import { useTranslation } from "react-i18next"

function DigitalPlatform() {
  const { t } = useTranslation()
  // Refs for animation elements
  const featureIconsRef = useRef([])

  // Animation effect for feature icons
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.2 },
    )

    const featureIcons = document.querySelectorAll(".feature-icon-animated")
    featureIcons.forEach((icon) => {
      observer.observe(icon)
    })

    return () => {
      featureIcons.forEach((icon) => {
        observer.unobserve(icon)
      })
    }
  }, [])

  return (
    <div className="platform-container">
      <div className="page-header">
        <h1>{t("platform_title")}</h1>
        <div className="leaf-divider">
          <span className="divider-line"></span>
          <i className="fas fa-leaf"></i>
          <span className="divider-line"></span>
        </div>
      </div>

      <div className="platform-hero">
        <div className="platform-hero-content">
          <h2>{t("platform_hero_title")}</h2>
          <p className="platform-subtitle">{t("platform_subtitle")}</p>

          <div className="digital-badge">
            <div className="badge-icon">
              <i className="fas fa-award"></i>
            </div>
            <span>{t("platform_badge")}</span>
          </div>
        </div>
        <div className="platform-hero-visual">
          <div className="floating-device">
            <div className="device-screen">
              <div className="screen-content">
                <div className="app-header"></div>
                <div className="app-body">
                  <div className="app-item"></div>
                  <div className="app-item"></div>
                  <div className="app-item"></div>
                </div>
              </div>
            </div>
            <div className="device-home-button"></div>
          </div>
          <div className="device-shadow"></div>
        </div>
      </div>

      <div className="platform-intro">
        <h3>{t("platform_intro_title")}</h3>
        <p>
          {t("platform_intro_1")} <span className="text-emphasis">{t("platform_intro_emphasis_1")}</span>{" "}
          <span className="text-emphasis">{t("platform_intro_emphasis_2")}</span>. {t("platform_intro_2")}{" "}
          <span className="text-emphasis">{t("platform_intro_emphasis_3")}</span>
          {t("platform_intro_3")}
        </p>
        <p>
          {t("platform_intro_4")} <span className="text-emphasis">{t("platform_intro_emphasis_4")}</span>.
        </p>
      </div>

      <div className="key-functions">
        <h3>{t("platform_functions_title")}</h3>

        <div className="function-card">
          <div className="function-number">1️⃣</div>
          <div className="function-content">
            <h4>{t("platform_function_1_title")}</h4>
            <ul>
              <li>
                {t("platform_function_1_item_1_1")}{" "}
                <span className="text-emphasis">{t("platform_function_1_item_1_2")}</span>
                {t("platform_function_1_item_1_3")}
              </li>
              <li>
                {t("platform_function_1_item_2_1")}{" "}
                <span className="text-emphasis">{t("platform_function_1_item_2_2")}</span>
                {t("platform_function_1_item_2_3")}
              </li>
              <li>{t("platform_function_1_item_3")}</li>
              <li>
                {t("platform_function_1_item_4_1")}{" "}
                <span className="text-emphasis">{t("platform_function_1_item_4_2")}</span>
                {t("platform_function_1_item_4_3")}
              </li>
            </ul>
          </div>
        </div>

        <div className="function-card">
          <div className="function-number">2️⃣</div>
          <div className="function-content">
            <h4>{t("platform_function_2_title")}</h4>
            <ul>
              <li>
                {t("platform_function_2_item_1_1")}{" "}
                <span className="text-emphasis">{t("platform_function_2_item_1_2")}</span>.
              </li>
              <li>{t("platform_function_2_item_2")}</li>
              <li>
                {t("platform_function_2_item_3_1")}{" "}
                <span className="text-emphasis">{t("platform_function_2_item_3_2")}</span>
                {t("platform_function_2_item_3_3")}
              </li>
            </ul>
          </div>
        </div>

        <div className="function-card">
          <div className="function-number">3️⃣</div>
          <div className="function-content">
            <h4>{t("platform_function_3_title")}</h4>
            <ul>
              <li>
                {t("platform_function_3_item_1_1")}{" "}
                <span className="text-emphasis">{t("platform_function_3_item_1_2")}</span>
                {t("platform_function_3_item_1_3")}
              </li>
              <li>
                {t("platform_function_3_item_2_1")}{" "}
                <span className="text-emphasis">{t("platform_function_3_item_2_2")}</span>.
              </li>
              <li>
                <span className="text-emphasis">{t("platform_function_3_item_3_1")}</span>{" "}
                {t("platform_function_3_item_3_2")}{" "}
                <span className="text-emphasis">{t("platform_function_3_item_3_3")}</span>.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="core-features">
        <h3>{t("platform_features_title")}</h3>
        <div className="features-grid">
          <div className="feature-item-animated">
            <div className="feature-icon-animated" ref={(el) => (featureIconsRef.current[0] = el)}>
              <i className="fa-solid fa-wifi"></i>
            </div>
            <div className="feature-text">
              <span className="feature-title">{t("platform_feature_1_title")}</span> {t("platform_feature_1_text")}
            </div>
          </div>

          <div className="feature-item-animated">
            <div className="feature-icon-animated" ref={(el) => (featureIconsRef.current[1] = el)}>
              <i className="fas fa-database"></i>
            </div>
            <div className="feature-text">
              <span className="feature-title">{t("platform_feature_2_title")}</span> {t("platform_feature_2_text")}
            </div>
          </div>

          <div className="feature-item-animated">
            <div className="feature-icon-animated" ref={(el) => (featureIconsRef.current[2] = el)}>
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="feature-text">
              <span className="feature-title">{t("platform_feature_3_title")}</span> {t("platform_feature_3_text")}
            </div>
          </div>

          <div className="feature-item-animated">
            <div className="feature-icon-animated" ref={(el) => (featureIconsRef.current[3] = el)}>
              <i className="fas fa-project-diagram"></i>
            </div>
            <div className="feature-text">
              <span className="feature-title">{t("platform_feature_4_title")}</span> {t("platform_feature_4_text")}
            </div>
          </div>

          <div className="feature-item-animated">
            <div className="feature-icon-animated" ref={(el) => (featureIconsRef.current[4] = el)}>
              <i className="fas fa-language"></i>
            </div>
            <div className="feature-text">
              <span className="feature-title">{t("platform_feature_5_title")}</span> {t("platform_feature_5_text")}
            </div>
          </div>

          <div className="feature-item-animated">
            <div className="feature-icon-animated" ref={(el) => (featureIconsRef.current[5] = el)}>
              <i className="fas fa-chart-bar"></i>
            </div>
            <div className="feature-text">
              <span className="feature-title">{t("platform_feature_6_title")}</span> {t("platform_feature_6_text")}
            </div>
          </div>
        </div>
      </div>

      <div className="compliance-section">
        <h3>{t("platform_compliance_title")}</h3>
        <p>{t("platform_compliance_text")}</p>
        <div className="compliance-badges">
          <div className="compliance-badge">
            <div className="badge-icon">
              <i className="fas fa-leaf"></i>
            </div>
            <span>
              {t("platform_compliance_badge_1_1")}{" "}
              <span className="text-emphasis">{t("platform_compliance_badge_1_2")}</span>
            </span>
          </div>

          <div className="compliance-badge">
            <div className="badge-icon">
              <i className="fas fa-check-circle"></i>
            </div>
            <span>
              <span className="text-emphasis">{t("platform_compliance_badge_2")}</span>
            </span>
          </div>

          <div className="compliance-badge">
            <div className="badge-icon">
              <i className="fas fa-tree"></i>
            </div>
            <span>
              <span className="text-emphasis">{t("platform_compliance_badge_3")}</span>
            </span>
          </div>

          <div className="compliance-badge">
            <div className="badge-icon">
              <i className="fas fa-users"></i>
            </div>
            <span>
              <span className="text-emphasis">{t("platform_compliance_badge_4")}</span>
            </span>
          </div>
        </div>
      </div>

      <div className="platform-conclusion">
        <p>
          {t("platform_conclusion_1")} <span className="text-emphasis">{t("platform_conclusion_emphasis_1")}</span>{" "}
          {t("platform_conclusion_2")} <span className="text-emphasis">{t("platform_conclusion_emphasis_2")}</span>.{" "}
          {t("platform_conclusion_3")} <span className="text-emphasis">{t("platform_conclusion_emphasis_3")}</span>
          {t("platform_conclusion_4")}
        </p>

        <div className="cta-container">
          <button className="platform-cta secondary">{t("platform_cta")}</button>
        </div>
      </div>
    </div>
  )
}

export default DigitalPlatform
