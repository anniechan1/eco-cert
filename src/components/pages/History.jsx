import "./History.css"

function History() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Company History</h1>
        <div className="leaf-divider">
          <span className="divider-line"></span>
          <i className="fas fa-leaf"></i>
          <span className="divider-line"></span>
        </div>
      </div>

      <div className="asymmetric-layout">
        <div className="top-left-image">
          <img src="/images/image.jpg" alt="Team meeting" className="history-image" />
        </div>

        <div className="content-text main-content">
          <p>
            Founded with the vision of creating a certification body that is both credible and collaborative,
            EcoCertification emerged from a network of sustainability experts, agricultural cooperatives, and technology
            partners. Since our beginning, we have expanded our reach across multiple regions, offering tailored certification
            services to producers of all scales.
          </p>
        </div>

        
      </div>
     
    </div>
  )
}

export default History
