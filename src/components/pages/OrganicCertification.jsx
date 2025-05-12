"use client"

import { useEffect, useState } from "react"
import "./OrganicCertification.css"

function OrganicCertification() {
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
      <div className="page-header">
        <h1>Organic Certification</h1>
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
          Organic Beekeeping
        </a>
        <a
          href="#crop-production"
          onClick={(e) => scrollToSection(e, "crop-production")}
          className={activeSection === "crop-production" ? "active" : ""}
        >
          Organic Crop Production
        </a>
        <a
          href="#processing"
          onClick={(e) => scrollToSection(e, "processing")}
          className={activeSection === "processing" ? "active" : ""}
        >
          Processing & Handling
        </a>
        <a
          href="#wild-harvest"
          onClick={(e) => scrollToSection(e, "wild-harvest")}
          className={activeSection === "wild-harvest" ? "active" : ""}
        >
          Wild Harvest & Forestry
        </a>
      </div>

      <div className="certification-intro">
        <p>Our eco-certification services cover:</p>
        <ul>
          <li>
            <strong>Organic Crop Production:</strong> Sustainable soil and plant health management.
          </li>
          <li>
            <strong>Organic Beekeeping (Apiary Certification)</strong>
          </li>
          <li>
            <strong>Processing & Handling:</strong> Preservation of organic integrity throughout the supply chain.
          </li>
          <li>
            <strong>Wild Harvest & Forestry:</strong> Responsible wild collection and sustainability.
          </li>
        </ul>
        <p>
          We work with smallholder cooperatives, commercial farms, and processors across Ethiopia's diverse regions.
        </p>
      </div>

      <div className="two-column-layout">
        <div className="column-item">
          <div className="image-card">
            <img src="/images/bee.jpg" alt="Organic beekeeping" className="certification-image" />
          </div>
        </div>
        <div className="column-item">
          <div className="image-card">
            <img src="/images/bee1.jpg" alt="Bee on flower" className="certification-image" />
          </div>
        </div>
      </div>

      <div className="certification-types">
        <div id="beekeeping" className="certification-type">
          <h2>Organic Beekeeping (Apiary Certification)</h2>
          <p>
            We provide specialized certification for organic beekeeping (apiaries), ensuring that honey and bee products
            meet strict international organic standards. Our certification covers:
          </p>
          <ul>
            <li>
              <strong>Hive Location & Environment:</strong> Ensuring apiaries are situated in clean, chemical-free zones
              with abundant organic forage.
            </li>
            <li>
              <strong>Bee Health & Welfare:</strong> Natural methods for disease control and hive management without
              synthetic chemicals or antibiotics.
            </li>
            <li>
              <strong>Harvesting & Processing:</strong> Gentle and hygienic honey extraction, processing, and packaging
              to maintain organic integrity.
            </li>
            <li>
              <strong>Traceability & Documentation:</strong> Full record-keeping of hive management, foraging areas, and
              honey batches.
            </li>
          </ul>

          <div className="highlight-box">
            <h3>Our Impact</h3>
            <p>This service supports Ethiopian beekeepers to:</p>
            <ul>
              <li>Access premium organic honey markets.</li>
              <li>Preserve biodiversity and pollination health.</li>
              <li>Uphold Ethiopia's reputation as a leading honey producer in Africa.</li>
            </ul>
          </div>
        </div>

        <div id="crop-production" className="certification-type">
          <h2>Organic Crop Production</h2>
          <p>
            Our certification for Organic Crop Production focuses on sustainable, eco-friendly practices that protect
            soil health, biodiversity, and environmental integrity.
          </p>
          <h3>Key Certification Areas Include:</h3>
          <ul>
            <li>
              <strong>Sustainable Soil Management:</strong> Emphasis on composting, crop rotation, green manures, and
              natural soil fertility enhancement.
            </li>
            <li>
              <strong>Plant Health & Pest Management:</strong> Non-chemical pest and disease control using biological
              methods, companion planting, and resistant crop varieties.
            </li>
            <li>
              <strong>Seed Integrity:</strong> Use of organic or untreated non-GMO seeds and planting materials.
            </li>
            <li>
              <strong>Water Conservation:</strong> Eco-friendly irrigation and water management practices.
            </li>
            <li>
              <strong>Traceability:</strong> Full documentation from planting to harvest to ensure compliance with
              international organic standards.
            </li>
          </ul>
          <h3>Benefits:</h3>
          <ul>
            <li>Enhances soil fertility and long-term farm productivity.</li>
            <li>Reduces environmental impact and promotes biodiversity.</li>
            <li>Opens access to certified organic markets globally.</li>
          </ul>

          <img src="/images/rural.jpg" alt="Organic crop field" className="certification-image rural-image" />
        </div>

        <div id="processing" className="certification-type">
          <h2>Processing & Handling</h2>
          <p>
            We provide certification for Processing & Handling operations to ensure that organic integrity is preserved
            from farm to final product.
          </p>
          <h3>Key Certification Areas Include:</h3>
          <ul>
            <li>
              <strong>Organic Integrity:</strong> Strict separation of organic and non-organic materials at every stage
              of processing.
            </li>
            <li>
              <strong>Sanitation & Hygiene:</strong> Use of cleaning agents and procedures that comply with organic
              standards, ensuring no contamination.
            </li>
            <li>
              <strong>Ingredient Verification:</strong> Ensuring all additives, processing aids, and packaging materials
              meet organic requirements.
            </li>
            <li>
              <strong>Storage & Transportation:</strong> Certified systems for maintaining organic status during
              storage, warehousing, and shipping.
            </li>
            <li>
              <strong>Traceability:</strong> Full documentation and record-keeping from raw material intake to product
              output.
            </li>
          </ul>
          <h3>Scope:</h3>
          <ul>
            <li>Food & beverage processors.</li>
            <li>Herbal and natural cosmetics manufacturers.</li>
            <li>Fiber and textile processors (if applicable).</li>
            <li>Packaging and labeling operations.</li>
          </ul>
          <p>
            <strong>Outcome:</strong> This certification ensures consumer trust by maintaining organic authenticity
            throughout the supply chain and supports market access to certified organic channels both locally and
            internationally.
          </p>
        </div>

        <div id="wild-harvest" className="certification-type">
          <h2>Wild Harvest & Forestry</h2>
          <p>
            Our certification for Wild Harvest & Forestry ensures that the collection of wild plants, herbs, and forest
            products is conducted responsibly, sustainably, and in harmony with nature.
          </p>
          <h3>Key Certification Areas Include:</h3>
          <ul>
            <li>
              <strong>Sustainable Harvesting Practices:</strong> Guidelines to prevent overharvesting and ensure natural
              regeneration of wild species.
            </li>
            <li>
              <strong>Ecosystem Protection:</strong> Safeguarding biodiversity, habitats, and soil health in collection
              areas.
            </li>
            <li>
              <strong>Collector Training:</strong> Equipping harvesters with knowledge on sustainable methods and
              traceability requirements.
            </li>
            <li>
              <strong>Traceability & Documentation:</strong> Ensuring full transparency from wild collection to market,
              in compliance with international organic standards.
            </li>
            <li>
              <strong>Community Involvement:</strong> Promoting fair benefit-sharing with local communities and respect
              for traditional knowledge.
            </li>
          </ul>
          <h3>Scope:</h3>
          <ul>
            <li>Medicinal & aromatic plants.</li>
            <li>Edible wild plants and fruits.</li>
            <li>Natural gums and resins (e.g., myrrh, frankincense).</li>
            <li>Non-timber forest products.</li>
          </ul>
          <p>
            <strong>Impact:</strong> This certification enhances access to premium markets while protecting Ethiopia's
            rich biodiversity and supporting sustainable livelihoods for rural and forest-dependent communities.
          </p>
        </div>
      </div>
    </div>
  )
}

export default OrganicCertification
