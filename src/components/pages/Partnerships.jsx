import "./Partnerships.css"

function Partnerships() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Partnerships & Collaborations</h1>
        <div className="leaf-divider">
          <span className="divider-line"></span>
          <i className="fas fa-leaf"></i>
          <span className="divider-line"></span>
        </div>
      </div>

      <div className="content-text">
        <p>
          At EcoCertification, we believe in the power of collaboration. Our partnerships with local and international
          organizations strengthen our ability to deliver impactful certification services and support sustainable
          development across Ethiopia.
        </p>
      </div>

      <div className="partnerships-showcase">
        {/* First partnership showcase with large image */}
        <div className="partnership-showcase-item">
          <div className="showcase-content">
            <h3>Local Agricultural Offices & Cooperatives</h3>
            <p>
              We work closely with regional agricultural offices and farmer cooperatives to ensure our certification
              processes are aligned with local needs and realities. These partnerships help us develop certification
              protocols that are both internationally recognized and locally relevant.
            </p>
            <p>
              Through these collaborations, we've established strong networks across Ethiopia's diverse agricultural
              regions, enabling us to provide tailored support to farmers and producers.
            </p>
          </div>
          <img src="/images/messe.jpg" alt="Laboratory work" className="showcase-image" />
        </div>

        {/* Second partnership showcase with right-aligned image grid - International Organizations */}
        <div className="partnership-showcase-item">
          <div className="showcase-content">
            <h3>International Organizations & Accreditation Bodies</h3>
            <p>
              Our collaborations with international certification bodies and sustainability organizations keep us
              connected to global best practices and emerging standards. These relationships ensure that our
              certification processes meet the highest international requirements.
            </p>
            <p>
              We maintain active dialogues with key global players in the organic and sustainability sectors to stay at
              the forefront of certification developments.
            </p>
          </div>
          <div className="showcase-dual-images">
            <div className="showcase-image-small">
              <img
                src="/images/talk1.png"
                alt="Research collaboration"
                className="showcase-image"
                style={{ objectPosition: "center" }}
              />
            </div>
            <div className="showcase-image-small">
              <img
                src="/images/talk2.png"
                alt="Partnership handshake"
                className="showcase-image"
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
            <h3>Universities & Research Institutions</h3>
          </div>
          <p className="gallery-description">
            Collaborations with academic and research institutions help us stay at the forefront of sustainable
            agricultural practices and certification methodologies. These partnerships drive innovation in our
            approaches and ensure our work is backed by sound science.
          </p>

          <div className="image-gallery">
            <div className="gallery-main">
              <img src="/images/lecture.jpg" alt="Quality testing" className="gallery-image main-image" />
            </div>
            <div className="gallery-side">
              <img src="/images/lab3.jpg" alt="Educational lecture" className="gallery-image side-image" />
              <img src="/images/lab4.jpg" alt="Partnership handshake" className="gallery-image side-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partnerships
