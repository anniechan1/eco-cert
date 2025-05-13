"use client"
import React, { useState, useEffect, useRef } from "react"
import { useTranslation } from 'react-i18next'
import { Link } from "react-router-dom"
// eslint-disable-next-line no-unused-vars

import i18n from 'i18next';
import "./NavbarOption1.css"



function NavbarOption1() {
   const { t, i18n } = useTranslation();
  const [click, setClick] = useState(false)
  const [searchActive, setSearchActive] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [showResults, setShowResults] = useState(false)
  const searchInputRef = useRef(null)
  const [pageContent, setPageContent] = useState([])

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)



  // Index the page content when the component mounts
  useEffect(() => {
    // Function to extract text from DOM elements
    const extractTextFromDOM = () => {
      const textNodes = []

      // Get all text from paragraphs, headings, list items, etc.
      const elements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, li, a, span, div")

      elements.forEach((el) => {
        // Skip elements in the search results or navbar
        if (el.closest(".search-results") || el.closest(".navbar-organic") || el.closest(".search-overlay")) {
          return
        }

        // Get the visible text content
        const text = el.textContent.trim()
        if (text) {
          // Create a path for the element (could be improved)
          const path = el.closest("a") ? el.closest("a").getAttribute("href") : window.location.pathname

          textNodes.push({
            title: el.tagName === "H1" || el.tagName === "H2" || el.tagName === "H3" ? text : "Page Content",
            content: text,
            path: path || window.location.pathname,
            element: el,
          })
        }
      })

      return textNodes
    }

    // Initial extraction
    setPageContent(extractTextFromDOM())

    // Set up a mutation observer to watch for DOM changes
    const observer = new MutationObserver(() => {
      setPageContent(extractTextFromDOM())
    })

    // Start observing the document body for changes
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    })

    // Clean up the observer when component unmounts
    return () => observer.disconnect()
  }, [])

  const toggleSearch = () => {
    setSearchActive(!searchActive)
    if (!searchActive) {
      setTimeout(() => {
        searchInputRef.current && searchInputRef.current.focus()
      }, 300)
    }
  }

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()

    if (!searchQuery.trim()) return

    // Perform search with case-insensitive matching
    const results = performSearch(searchQuery.trim())
    console.log("Search results:", results)

    setSearchResults(results)
    setShowResults(true)
  }

  // Update the performSearch function to search the actual page content
  const performSearch = (query) => {
    query = query.toLowerCase().trim()

    // Combine the real page content with our predefined mock data
    const pages = [
      {
        title: "Home",
        path: "/",
        content: "EcoCertification home page with information about our services.",
      },
      {
        title: "About Us",
        path: "/about",
        content: "Learn about our company, mission, and values. We focus on underwriting sustainable practices.",
      },
      {
        title: "Organic Certification",
        path: "/organic-certification",
        content:
          "Information about organic certification processes and standards. We provide specialized certification for organic beekeeping (apiaries), ensuring that honey and bee products meet strict international organic standards. Our documentation and report writing services help farmers maintain compliance.",
      },
      {
        title: "Certification Process",
        path: "/certification-process",
        content:
          "Step by step guide to getting certified with us, including documentation writing and submission requirements.",
      },
      {
        title: "Farmer Training",
        path: "/services/farmer-training",
        content:
          "Training programs for farmers on sustainable practices and Universities partnerships. We offer workshops on report writing and documentation.",
      },
      {
        title: "Digital Platform",
        path: "/digital-platform",
        content:
          "Our innovative digital certification platform simplifies the writing and submission of required documentation.",
      },
      {
        title: "Contact",
        path: "/contact",
        content: "Get in touch with our team for inquiries and support.",
      },
      {
        title: "Beekeeping Certification",
        path: "/organic-certification#beekeeping",
        content:
          "We provide specialized certification for organic beekeeping (apiaries), ensuring that honey and bee products meet strict international organic standards.",
      },
      {
        title: "Partnerships & Collaborations",
        path: "/partnerships",
        content:
          "Learn about our partnerships and collaborations with local and international organizations including Universities and research institutions.",
      },
      {
        title: "Accreditation",
        path: "/accreditation",
        content: "Information about our accreditation journey and status.",
      },
      {
        title: "International Standards",
        path: "/international-standards",
        content:
          "Details about the international standards we adhere to in our certification processes, including USDA NOP (National Organic Program) and EU Organic Regulation.",
      },
      {
        title: "Independence & Integrity",
        path: "/independence-integrity",
        content: "Our commitment to maintaining independence and integrity in our certification processes.",
      },
      {
        title: "Universities & Research",
        path: "/partnerships",
        content:
          "Collaborations with academic and research institutions help us stay at the forefront of sustainable agricultural practices.",
      },
      {
        title: "Documentation Services",
        path: "/services/documentation",
        content: "We assist with writing and preparing all necessary documentation for certification applications.",
      },
      ...pageContent, // Add the extracted page content
    ]

    // Search through all content
    return pages.filter((page) => {
      // Convert title and content to lowercase for case-insensitive comparison
      const titleLower = (page.title || "").toLowerCase()
      const contentLower = (page.content || "").toLowerCase()

      // Check if query is contained anywhere in title or content
      return titleLower.includes(query) || contentLower.includes(query)
    })
  }

  const closeSearchResults = () => {
    setShowResults(false)
  }

  const handleResultClick = (path) => {
    setSearchQuery("")
    setShowResults(false)
    setSearchActive(false)
    closeMobileMenu()
  }

  // Function to highlight search terms in text
  const highlightText = (text, query) => {
    if (!query || !text) return text
    query = query.toLowerCase().trim()

    // If the query isn't found in the text at all, return the original text
    if (!text.toLowerCase().includes(query)) return text

    // Split text into parts based on the query
    const parts = []
    let lastIndex = 0
    let index = text.toLowerCase().indexOf(query)

    while (index !== -1) {
      // Add text before the match
      parts.push(text.substring(lastIndex, index))

      // Add the highlighted match
      parts.push(
        <span key={index} className="highlight-text">
          {text.substring(index, index + query.length)}
        </span>,
      )

      lastIndex = index + query.length
      index = text.toLowerCase().indexOf(query, lastIndex)
    }

    // Add the remaining text
    parts.push(text.substring(lastIndex))

    return parts
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target) &&
        !event.target.classList.contains("search-icon") &&
        !event.target.closest(".search-results")
      ) {
        setSearchActive(false)
        setShowResults(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <nav className="navbar-organic">
   

      <div className="navbar-container-organic">
        <Link to="/" className="navbar-logo-organic" onClick={closeMobileMenu}>
          <img src="/images/logo.png" alt="EcoCertification Logo" className="logo-img" />
        </Link>

        <div className="menu-icon-organic" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} aria-hidden="true" />
        </div>

        <ul className={click ? "nav-menu-organic active" : "nav-menu-organic"}>
          <li className="nav-item-organic">
            <span className="nav-links-organic">
              {t('about')}<i className="fas fa-caret-down"></i>
            </span>
            <div className="dropdown-menu-organic">
              <Link to="/about" className="dropdown-link-organic" onClick={closeMobileMenu}>
        {t('about_who')}
      </Link>
      <Link to="/history" className="dropdown-link-organic" onClick={closeMobileMenu}>
        {t('about_history')}
      </Link>
      <Link to="/our-team" className="dropdown-link-organic" onClick={closeMobileMenu}>
        {t('about_team')}
      </Link>
      <Link to="/our-method" className="dropdown-link-organic" onClick={closeMobileMenu}>
        {t('about_method')}
      </Link>
      <Link to="/digital-platform" className="dropdown-link-organic" onClick={closeMobileMenu}>
        {t('about_platform')}
      </Link>
      <Link to="/sustainability" className="dropdown-link-organic" onClick={closeMobileMenu}>
        {t('about_commitment')}
      </Link>
            </div>
          </li>

          <li className="nav-item-organic">
             <span className="nav-links-organic">
      {t('certifications')} <i className="fas fa-caret-down"></i>
    </span>
    <div className="dropdown-menu-organic">
      <Link to="/organic-certification" className="dropdown-link-organic" onClick={closeMobileMenu}>
        {t('cert_scope')}
      </Link>
      <Link to="/certification-process" className="dropdown-link-organic" onClick={closeMobileMenu}>
        {t('cert_process')}
      </Link>
      <Link to="/independence-integrity" className="dropdown-link-organic" onClick={closeMobileMenu}>
        {t('cert_integrity')}
      </Link>
      <Link to="/international-standards" className="dropdown-link-organic" onClick={closeMobileMenu}>
        {t('cert_standards')}
      </Link>
            </div>
          </li>

          <li className="nav-item-organic">
             <span className="nav-links-organic">
      {t('services')} <i className="fas fa-caret-down"></i>
    </span>
    <div className="dropdown-menu-organic">
      <Link to="/services/farmer-training" className="dropdown-link-organic" onClick={closeMobileMenu}>
        {t('services_training')}
      </Link>
            
            </div>
          </li>

          <li className="nav-item-organic">
            <span className="nav-links-organic">
      {t('partners')} <i className="fas fa-caret-down"></i>
    </span>
    <div className="dropdown-menu-organic">
      <Link to="/partnerships" className="dropdown-link-organic" onClick={closeMobileMenu}>
        {t('partners_collab')}
      </Link>
      <Link to="/accreditation" className="dropdown-link-organic" onClick={closeMobileMenu}>
        {t('partners_accreditation')}
      </Link>
            </div>
          </li>
        </ul>

        <div className="nav-icons-organic">
          <div className="search-container-organic">
            <i className="fas fa-search search-icon" onClick={toggleSearch}></i>
            <div className={`search-overlay ${searchActive ? "active" : ""}`}>
              <form onSubmit={handleSearchSubmit} className="search-input-wrapper">
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search for ..."
                  className="search-input-organic"
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                />
                <button type="submit" className="search-button">
                  <i className="fas fa-search"></i>
                </button>
              </form>
            </div>
          </div>
          <Link to="/contact" className="contact-link-organic">
               {t('contact')}
          </Link>
         

           <div className="language-dropdown-organic">
            <i className="fas fa-globe"></i>
            <div className="language-menu-organic">
              <div className="language-option-organic" onClick={() => handleLanguageChange('en')}>
      EN
    </div>
             <div className="language-option-organic" onClick={() => handleLanguageChange('de')}>
      DE
    </div>
            </div>
          </div>
        </div>
      </div>

      {showResults && (
        <div className="search-results">
          <div className="search-results-header">
 <h3>{t('search_results')}</h3>
            <button className="close-results" onClick={closeSearchResults}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          {searchResults.length > 0 ? (
            <ul className="results-list">
              {searchResults.map((result, index) => (
                <li key={index}>
                  <Link to={result.path} onClick={() => handleResultClick(result.path)}>
                    <h4>{highlightText(result.title, searchQuery)}</h4>
                    <p>
                      {highlightText(
                        result.content.length > 150 ? result.content.substring(0, 150) + "..." : result.content,
                        searchQuery,
                      )}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
             <p className="no-results">{t('no_results')} "{searchQuery}"</p>
          )}
        </div>
      )}
    </nav>
  )
}

export default NavbarOption1
