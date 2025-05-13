import "./About.css"

function About() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Who We Are</h1>
        <div className="leaf-divider">
          <span className="divider-line"></span>
          <i className="fas fa-leaf"></i>
          <span className="divider-line"></span>
        </div>
      </div>

      <div className="image-grid-three">
        <div className="grid-image-item">
          <img src="/images/beans.webp" alt="Coffee beans" className="grid-image"  />
        </div>
        <div className="grid-image-item">
          <img src="/images/beans1.webp" alt="Coffee beans close-up" className="grid-image" />
        </div>
        <div className="grid-image-item">
          <img src="/images/cooperate.webp" alt="Cooperation" className="grid-image" />
        </div>
      </div>

      <div className="content-text">
        <p>
          EcoCertification is a modern certification company with deep roots in sustainability and digital innovation.
          Our mission is to guide and support stakeholders across agricultural, forestry, and apiculture value chains in
          achieving meaningful certification that reflects ecological responsibility and social fairness.
        </p>
        <p>
          We believe certification should not be a burden—it should be a tool for empowerment. That's why we work
          closely with farmers, cooperatives, and businesses to ensure that certification processes are accessible,
          efficient, and adapted to local realities. Through partnerships like with the{" "}
          <a href="https://ecopiavaluechain.com/" target="_blank" rel="noopener noreferrer" className="highlight-link">
            Ecopia Value Chain (EVC)
          </a>{" "}
          platform, we help bridge the gap between compliance and long-term impact.
        </p>
      </div>

      <div className="section-divider"></div>

      <div className="content-text">
        <h2 className="section-title">Our Mission</h2>
        <p>
          We are Ethiopia's first dedicated eco-certification body, established to empower local producers and
          processors with internationally recognized organic certification. Our mission is to foster sustainability,
          enhance market access, and build trust through transparent and credible certification.
        </p>
        <ul className="mission-list">
          <li>Certify in line with global standards.</li>
          <li>Empower Ethiopian producers to compete globally.</li>
          <li>Advance ecological, social, and economic sustainability.</li>
        </ul>
      </div>

      <div className="two-column-layout">
        <div className="column-item">
          <div className="image-card">
            <img src="/images/tree.webp" alt="Tree" className="small-image" loading="lazy" />
          </div>
        </div>

        <div className="column-item">
          <div className="image-card">
            <img src="/images/field.webp" alt="Field" className="small-image" loading="lazy"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
