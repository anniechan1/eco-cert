"use client"
import { useEffect, useRef } from "react"
import { Button } from "./Button"
import "./HeroOption1.css"
import { Link } from "react-router-dom"
import { Trans, useTranslation } from 'react-i18next';


function HeroOption1() {
  const { t } = useTranslation();
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
  <Trans i18nKey="hero_title" components={{ 1: <span className="highlight" /> }} />
</h1>

<p>
  <Trans
    i18nKey="hero_intro"
    components={{
      1: (
        <a
          href="https://ecopiavaluechain.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-link"
           aria-label="Ecopia Value Chain website"
        ></a>
      )
    }}
  />
</p>
         <p>{t('hero_second')}</p>

<p className="join-text">
  <strong>{t('hero_join')}</strong>
</p>

          <div className="hero-cta">
            <Link to="/application">
              <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                  {t('hero_certify_btn')}
              </Button>
            </Link>
             <Link to="/services/farmer-training">
            <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
              {t('hero_explore_btn')}
            </Button>
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="image-frame">
            <img src="/images/eco-hero.webp" alt="farmer" className="hero-image-organic" />
            <div className="image-accent"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroOption1


