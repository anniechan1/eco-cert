import NavbarOption1 from "./components/NavbarOption1"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import History from "./components/pages/History"
import OurMethod from "./components/pages/OurMethod"
import Sustainability from "./components/pages/Sustainability"
import Contact from "./components/pages/Contact"
import Footer from "./components/Footer"
import OrganicCertification from "./components/pages/OrganicCertification"
// Import the ApplicationForm component
import ApplicationForm from "./components/pages/ApplicationForm"
import FarmerTraining from "./components/pages/FarmerTraining"
import CertificationProcess from "./components/pages/CertificationProcess"
import IndependenceIntegrity from "./components/pages/IndependenceIntegrity"
import InternationalStandards from "./components/pages/InternationalStandards"
import DigitalPlatform from "./components/pages/DigitalPlatform"
import Partnerships from "./components/pages/Partnerships"
import Accreditation from "./components/pages/Accreditation"
import ScrollToTop from "./components/ScrollToTop"
import PrivacyPolicy from "./components/pages/PrivacyPolicy"
import TermsOfService from "./components/pages/TermsOfService"
import Sitemap from "./components/pages/Sitemap"
import CookiePolicy from "./components/pages/CookiePolicy"
import CookieConsent from "./components/CookieConsent"
import OurTeam from "./components/pages/OurTeam"
import "./App.css"

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <NavbarOption1 />
        <CookieConsent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/history" element={<History />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/our-method" element={<OurMethod />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/application" element={<ApplicationForm />} />
          <Route path="/organic-certification" element={<OrganicCertification />} />
          <Route path="/services/farmer-training" element={<FarmerTraining />} />
          <Route path="/certification-process" element={<CertificationProcess />} />
          <Route path="/independence-integrity" element={<IndependenceIntegrity />} />
          <Route path="/international-standards" element={<InternationalStandards />} />
          <Route path="/digital-platform" element={<DigitalPlatform />} />
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/accreditation" element={<Accreditation />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/sitemap" element={<Sitemap />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
