"use client"

import "./DigitalPlatform.css"
import { useEffect, useRef } from "react"

function DigitalPlatform() {
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
        <h1>Eco Certification Digital Platform</h1>
        <div className="leaf-divider">
          <span className="divider-line"></span>
          <i className="fas fa-leaf"></i>
          <span className="divider-line"></span>
        </div>
      </div>

      <div className="platform-hero">
        <div className="platform-hero-content">
          <h2>Pioneering Home-Based Organic Certification in Africa</h2>
          <p className="platform-subtitle">An Innovative Digital Solution for Organic Farming Compliance</p>

          <div className="digital-badge">
            <div className="badge-icon">
              <i className="fas fa-award"></i>
            </div>
            <span>First in Africa</span>
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
        <h3>Introduction</h3>
        <p>
          The Eco Certification ICS platform is the <span className="text-emphasis">first in Africa</span> to offer a{" "}
          <span className="text-emphasis">
            home-based organic certification system, fully supported by digital technology
          </span>
          . It is designed to assist associations, cooperatives, and producer groups in efficiently managing their{" "}
          <span className="text-emphasis">Internal Control System (ICS)</span>—a crucial component in organic farming to
          ensure compliance with international organic standards.
        </p>
        <p>
          The platform enables organizations to monitor and verify that all farming practices meet the requirements of
          organic certification bodies in a <span className="text-emphasis">systematic and reliable way</span>.
        </p>
      </div>

      <div className="key-functions">
        <h3>Key Functions</h3>

        <div className="function-card">
          <div className="function-number">1️⃣</div>
          <div className="function-content">
            <h4>Internal Inspections (Mobile Application)</h4>
            <ul>
              <li>
                Conduct inspections <span className="text-emphasis">offline</span>, ideal for remote areas.
              </li>
              <li>
                Use <span className="text-emphasis">GPS mapping</span> to register fields, plots, and relevant data.
              </li>
              <li>Record detailed information on producers, crops, and environmental conditions.</li>
              <li>
                Implement <span className="text-emphasis">custom questionnaires</span> and risk assessments.
              </li>
            </ul>
          </div>
        </div>

        <div className="function-card">
          <div className="function-number">2️⃣</div>
          <div className="function-content">
            <h4>Staff & Inspection Management</h4>
            <ul>
              <li>
                Manage your organization's <span className="text-emphasis">structure, staff, and roles</span>.
              </li>
              <li>Set access controls and permissions.</li>
              <li>
                Monitor <span className="text-emphasis">performance</span> and manage inspection assignments.
              </li>
            </ul>
          </div>
        </div>

        <div className="function-card">
          <div className="function-number">3️⃣</div>
          <div className="function-content">
            <h4>Certification Preparation</h4>
            <ul>
              <li>
                Customize <span className="text-emphasis">multi-standard questionnaires</span> tailored to specific
                certification schemes.
              </li>
              <li>
                Manage <span className="text-emphasis">non-conformities, corrective actions, and sanctions</span>.
              </li>
              <li>
                <span className="text-emphasis">Organize</span> data and documentation for smooth{" "}
                <span className="text-emphasis">external audits</span>.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="core-features">
        <h3>Core Features</h3>
        <div className="features-grid">
          <div className="feature-item-animated">
            <div className="feature-icon-animated" ref={(el) => (featureIconsRef.current[0] = el)}>
              <i className="fa-solid fa-wifi"></i>
            </div>
            <div className="feature-text">
              <span className="feature-title">Offline Capability:</span> Full functionality without internet connection.
            </div>
          </div>

          <div className="feature-item-animated">
            <div className="feature-icon-animated" ref={(el) => (featureIconsRef.current[1] = el)}>
              <i className="fas fa-database"></i>
            </div>
            <div className="feature-text">
              <span className="feature-title">Field Data Collection:</span> Accurate, real-time collection of all
              field-related data.
            </div>
          </div>

          <div className="feature-item-animated">
            <div className="feature-icon-animated" ref={(el) => (featureIconsRef.current[2] = el)}>
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="feature-text">
              <span className="feature-title">Plot Mapping:</span> Advanced polygon mapping with GPS, supporting precise
              measurement and field visualization.
            </div>
          </div>

          <div className="feature-item-animated">
            <div className="feature-icon-animated" ref={(el) => (featureIconsRef.current[3] = el)}>
              <i className="fas fa-project-diagram"></i>
            </div>
            <div className="feature-text">
              <span className="feature-title">Organizational Structure:</span> Flexible setup to reflect your
              organization's hierarchy or divisions.
            </div>
          </div>

          <div className="feature-item-animated">
            <div className="feature-icon-animated" ref={(el) => (featureIconsRef.current[4] = el)}>
              <i className="fas fa-language"></i>
            </div>
            <div className="feature-text">
              <span className="feature-title">Multilingual System:</span> Supports English, French, Spanish, and
              customizable local languages.
            </div>
          </div>

          <div className="feature-item-animated">
            <div className="feature-icon-animated" ref={(el) => (featureIconsRef.current[5] = el)}>
              <i className="fas fa-chart-bar"></i>
            </div>
            <div className="feature-text">
              <span className="feature-title">Comprehensive Reporting:</span> Generate and export data in various
              formats, providing insights through tables, charts, and maps.
            </div>
          </div>
        </div>
      </div>

      <div className="compliance-section">
        <h3>Compliance & Adaptability</h3>
        <p>The platform is designed to be future-proof and adaptable to changing regulations, including:</p>
        <div className="compliance-badges">
          <div className="compliance-badge">
            <div className="badge-icon">
              <i className="fas fa-leaf"></i>
            </div>
            <span>
              New <span className="text-emphasis">EU Organic Regulations</span>
            </span>
          </div>

          <div className="compliance-badge">
            <div className="badge-icon">
              <i className="fas fa-check-circle"></i>
            </div>
            <span>
              <span className="text-emphasis">NOP (National Organic Program)</span>
            </span>
          </div>

          <div className="compliance-badge">
            <div className="badge-icon">
              <i className="fas fa-tree"></i>
            </div>
            <span>
              <span className="text-emphasis">EU Anti-Deforestation Regulation</span>
            </span>
          </div>

          <div className="compliance-badge">
            <div className="badge-icon">
              <i className="fas fa-users"></i>
            </div>
            <span>
              <span className="text-emphasis">Human Rights Due Diligence (HRDD)</span>
            </span>
          </div>
        </div>
      </div>

      <div className="platform-conclusion">
        <p>
          The Eco Certification Digital Platform provides a{" "}
          <span className="text-emphasis">robust, transparent, and efficient</span> way for African farming organizations to prepare for and achieve{" "}
          <span className="text-emphasis">organic certification</span>. As the{" "}
          <span className="text-emphasis">first home-based digital certification system in Africa</span>, it empowers
          farmers and cooperatives to ensure compliance, improve operations, and demonstrate commitment to global
          organic standards.
        </p>

        <div className="cta-container">
          {/* Removed Contact Us button and kept Learn More without external link */}
          <button className="platform-cta secondary">Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default DigitalPlatform
