"use client"
import { useEffect, useRef } from "react"
import { Button } from "./Button"
import "./HeroOption1.css"
import { Link } from "react-router-dom"

function HeroOption1() {
  const leafRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (leafRef.current && textRef.current) {
        const scrollPosition = window.scrollY
        // Parallax effect for decorative elements
        leafRef.current.style.transform = `translateY(${scrollPosition * 0.05}px) rotate(${scrollPosition * 0.02}deg)`
        // Remove this line to prevent text from fading when scrolling
        // textRef.current.style.opacity = 1 - scrollPosition * 0.002
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="hero-container-organic">
      <div className="hero-background">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div ref={leafRef} className="decorative-leaf">
          <i className="fas fa-leaf"></i>
        </div>
      </div>

      <div className="hero-content-organic">
        <div ref={textRef} className="hero-text-organic">
          <h1>
            Welcome to <span className="highlight">EcoCertification</span>
          </h1>
          <p>
            At EcoCertification, we are dedicated to enabling a more sustainable future through trusted, transparent,
            and accessible certification services. As a certification body cooperating closely with platforms like
            <a href="https://ecopiavaluechain.com/" target="_blank" rel="noopener noreferrer" className="text-link">
              {" "}
              Ecopia Value Chain (EVC)
            </a>
            , we support farmers, producers, and businesses in meeting internationally recognized standards for organic
            farming, ethical trade, and deforestation-free sourcing.
          </p>
          <p>
            We bring a fresh, digital-first approach to eco-certification—combining environmental integrity with
            user-friendly tools designed for real-world impact.
          </p>
          <p className="join-text">
            <strong>Join us on the path to sustainability.</strong>
          </p>
          <div className="hero-cta">
            <Link to="/application">
              <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                Get Certified
              </Button>
            </Link>
             <Link to="/services/farmer-training">
            <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
              Explore Our Services
            </Button>
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="image-frame">
            <img src="/images/eco-hero.jpg" alt="Eco landscape" className="hero-image-organic" />
            <div className="image-accent"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroOption1



// "use client"
// import { useEffect, useRef } from "react"
// import { Button } from "./Button"
// import "./HeroOption1.css"
// import { Link } from "react-router-dom"

// function HeroOption1() {
//   const leafRef = useRef(null)
//   const textRef = useRef(null)

//   useEffect(() => {
//     const handleScroll = () => {
//       if (leafRef.current && textRef.current) {
//         const scrollPosition = window.scrollY
//         // Parallax effect for decorative elements
//         leafRef.current.style.transform = `translateY(${scrollPosition * 0.05}px) rotate(${scrollPosition * 0.02}deg)`
//         // Remove this line to prevent text from fading when scrolling
//         // textRef.current.style.opacity = 1 - scrollPosition * 0.002
//       }
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   return (
//     <div className="hero-container-organic">
//       <div className="hero-background">
//         <div className="shape shape-1"></div>
//         <div className="shape shape-2"></div>
//         <div className="shape shape-3"></div>
//         <div ref={leafRef} className="decorative-leaf">
//           <i className="fas fa-leaf"></i>
//         </div>
//       </div>

//       <div className="hero-content-organic">
//         <div ref={textRef} className="hero-text-organic">
//           <h1>
//             Welcome to <span className="highlight">EcoCertification</span>
//           </h1>
//           <p>
//             At EcoCertification, we are dedicated to enabling a more sustainable future through trusted, transparent,
//             and accessible certification services. As a certification body cooperating closely with platforms like
//             <a href="https://ecopiavaluechain.com/" target="_blank" rel="noopener noreferrer" className="text-link">
//               {" "}
//               Ecopia Value Chain (EVC)
//             </a>
//             , we support farmers, producers, and businesses in meeting internationally recognized standards for organic
//             farming, ethical trade, and deforestation-free sourcing.
//           </p>
//           <p>
//             We bring a fresh, digital-first approach to eco-certification—combining environmental integrity with
//             user-friendly tools designed for real-world impact.
//           </p>
//           <p className="join-text">
//             <strong>Join us on the path to sustainability.</strong>
//           </p>
//           <div className="hero-cta">
//             <Link to="/application">
//               <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
//                 Get Certified
//               </Button>
//             </Link>
//             <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
//               Explore Our Services
//             </Button>
//           </div>
//         </div>

//         <div className="hero-visual">
//           <div className="image-frame">
//             <img src="/images/eco-hero.jpg" alt="Eco landscape" className="hero-image-organic" />
//             <div className="image-accent"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default HeroOption1



// "use client"
// import { useEffect, useRef } from "react"
// import { Button } from "./Button"
// import "./HeroOption1.css"

// function HeroOption1() {
//   const leafRef = useRef(null)
//   const textRef = useRef(null)

//   useEffect(() => {
//     const handleScroll = () => {
//       if (leafRef.current && textRef.current) {
//         const scrollPosition = window.scrollY
//         // Parallax effect for decorative elements
//         leafRef.current.style.transform = `translateY(${scrollPosition * 0.05}px) rotate(${scrollPosition * 0.02}deg)`
      
       
//       }
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   return (
//     <div className="hero-container-organic">
//       <div className="hero-background">
//         <div className="shape shape-1"></div>
//         <div className="shape shape-2"></div>
//         <div className="shape shape-3"></div>
//         <div ref={leafRef} className="decorative-leaf">
//           <i className="fas fa-leaf"></i>
//         </div>
//       </div>

//       <div className="hero-content-organic">
//         <div ref={textRef} className="hero-text-organic">
//           <h1>
//             Welcome to <span className="highlight">EcoCertification</span>
//           </h1>
//           <p>
//             At EcoCertification, we are dedicated to enabling a more sustainable future through trusted, transparent,
//             and accessible certification services.</p>
            
//             <p>As a certification body cooperating closely with platforms like
//             <a href="https://ecopiavaluechain.com/" target="_blank" rel="EVC site" className="text-link">
//               {" "}
//               Ecopia Value Chain (EVC)
//             </a>
//             , we support farmers, producers, and businesses in meeting internationally recognized standards for organic
//             farming, ethical trade, and deforestation-free sourcing.
//           </p>
//           <p>
//             We bring a fresh, digital-first approach to eco-certification—combining environmental integrity with
//             user-friendly tools designed for real-world impact.
//           </p>
//           <p className="join-text">
//             <strong>Join us on the path to sustainability.</strong>
//           </p>
//           <div className="hero-cta">
//             <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
//               Get Certified
//             </Button>
//             <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
//               Explore Our Services
//             </Button>
//           </div>
//         </div>

//         <div className="hero-visual">
//           <div className="image-frame">
//             <img src="/images/eco-hero.jpg" alt="Eco landscape" className="hero-image-organic" />
//             <div className="image-accent"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default HeroOption1