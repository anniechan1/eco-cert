"use client"

import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import "./CookieConsent.css"

function CookieConsent() {
  const [showPopup, setShowPopup] = useState(false)
  const location = useLocation()

  useEffect(() => {
    // Check if user has already made a cookie choice
    const cookieConsent = localStorage.getItem("cookieConsent")

    // Only show on homepage and if no consent has been given
    if (!cookieConsent && location.pathname === "/") {
      // Short delay to ensure the page loads first
      const timer = setTimeout(() => {
        setShowPopup(true)
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [location.pathname])

  const acceptAllCookies = () => {
    localStorage.setItem("cookieConsent", "all")
    setShowPopup(false)
    // Here you would enable all cookies
  }

  const acceptEssentialCookies = () => {
    localStorage.setItem("cookieConsent", "essential")
    setShowPopup(false)
    // Here you would disable non-essential cookies
  }

  // If popup shouldn't show, return null
  if (!showPopup) return null

  return (
    <div className="cookie-overlay">
      <div className="cookie-popup">
        <div className="cookie-popup-header">
          <h3 className="cookie-popup-title">Cookie Consent</h3>
        </div>
        <div className="cookie-text">
          <p>
            We use cookies to enhance your experience on our website. By clicking "Accept All", you consent to the use
            of ALL cookies. Click "Essential Only" to only allow cookies necessary for the website to function.
          </p>
          <p>
            <Link to="/cookie-policy" className="cookie-link">
              Learn more about our Cookie Policy
            </Link>
          </p>
        </div>
        <div className="cookie-buttons">
          <button className="cookie-btn essential-only" onClick={acceptEssentialCookies}>
            Essential Only
          </button>
          <button className="cookie-btn accept-all" onClick={acceptAllCookies}>
            Accept All
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent
