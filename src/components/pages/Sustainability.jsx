import "./Sustainability.css"

function Sustainability() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Our Commitment</h1>
        <div className="leaf-divider">
          <span className="divider-line"></span>
          <i className="fas fa-leaf"></i>
          <span className="divider-line"></span>
        </div>
      </div>

      <div className="sustainability-intro">
        <p>
          Sustainability is at the core of our mission. Our certifications are designed not only to meet global market
          standards but to drive real ecological and social change. 
          By cooperating with initiatives like Ecopia Value
          Chain, we ensure our certifications align with broader efforts to build resilient, fair, and environmentally
          sound value chains.
        </p>
      </div>

      <div className="commitment-showcase">
        <div className="commitment-item">
          <div className="commitment-image">
            <img src="/images/cows.jpg" alt="Farmer working in field" />
          </div>
          <div className="commitment-content">
            <div className="commitment-icon">
              <i className="fas fa-seedling"></i>
            </div>
            <h3>Biodiversity protection</h3>
            <p>Supporting farming practices that preserve natural ecosystems and promote biodiversity.</p>
          </div>
        </div>

        <div className="commitment-item reverse">
          <div className="commitment-image">
            <img src="/images/kid.jpg" alt="Ethical labor practices" />
          </div>
          <div className="commitment-content">
            <div className="commitment-icon">
              <i className="fas fa-handshake"></i>
            </div>
            <h3>Ethical labor practices</h3>
            <p>
              Promoting fair wages, safe working conditions, and respect for workers' rights throughout the supply
              chain.
            </p>
          </div>
        </div>

        <div className="commitment-item">
          <div className="commitment-image">
            <img src="/images/mom.jpg" alt="Local empowerment" />
          </div>
          <div className="commitment-content">
            <div className="commitment-icon">
              <i className="fas fa-users"></i>
            </div>
            <h3>Local empowerment</h3>
            <p>Building capacity within communities to manage their resources sustainably and improve livelihoods.</p>
          </div>
        </div>

        <div className="commitment-item reverse">
          <div className="commitment-image">
            <img src="/images/produce.jpg" alt="Transparent supply chains" />
          </div>
          <div className="commitment-content">
            <div className="commitment-icon">
              <i className="fas fa-project-diagram"></i>
            </div>
            <h3>Transparent supply chains</h3>
            <p>Creating visibility from producer to consumer through digital tracking and verification systems.</p>
          </div>
        </div>

        <div className="commitment-item">
          <div className="commitment-image">
            <img src="/images/teach.jpg" alt="Education and training" />
          </div>
          <div className="commitment-content">
            <div className="commitment-icon">
              <i className="fas fa-chalkboard-teacher"></i>
            </div>
            <h3>Education & knowledge sharing</h3>
            <p>Providing training and resources to promote sustainable agricultural practices.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sustainability
