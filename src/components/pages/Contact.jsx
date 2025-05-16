"use client"

import "./Contact.css"
import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"

function Contact() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState({})
  const [showValidation, setShowValidation] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Initialize EmailJS when component mounts
  useEffect(() => {
    // Load EmailJS script
    const script = document.createElement("script")
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      // Initialize EmailJS with your public key
      window.emailjs.init("9rX_ZOw8GlIAm-RGb") // Replace with your actual EmailJS public key
    }

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))

    // Clear error for this field if it was previously marked as an error
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    let isValid = true

    // Check each required field
    if (!formData.name.trim()) {
      newErrors.name = t("contact_page.errors.name_required")
      isValid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = t("contact_page.errors.email_required")
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t("contact_page.errors.email_invalid")
      isValid = false
    }

    if (!formData.subject.trim()) {
      newErrors.subject = t("contact_page.errors.subject_required")
      isValid = false
    }

    if (!formData.message.trim()) {
      newErrors.message = t("contact_page.errors.message_required")
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowValidation(true)
    setSubmitStatus(null)

    if (validateForm()) {
      setIsSubmitting(true)

      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: "eco-certification@greenacademyafrica.com", // Updated email address
      }

      // Send email using EmailJS
      window.emailjs
        .send(
          "service_ecocert", // Replace with your EmailJS service ID
          "template_qavuten", // Replace with your EmailJS template ID
          templateParams,
        )
        .then((response) => {
          console.log("Email sent successfully:", response)
          setSubmitStatus("success")

          // Reset form after submission
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          })

          // Reset validation state
          setShowValidation(false)
        })
        .catch((error) => {
          console.error("Email sending failed:", error)
          setSubmitStatus("error")
        })
        .finally(() => {
          setIsSubmitting(false)
        })
    } else {
      // Scroll to the first error
      const firstErrorField = document.querySelector(".error-message")
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: "smooth", block: "center" })
      }
    }
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>{t("contact_page.title")}</h1>
        <div className="page-header-line"></div>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2>{t("contact_page.get_in_touch")}</h2>
          <p>{t("contact_page.intro")}</p>

          <div className="contact-details">
            <div className="contact-columns">
              {/* Ethiopia Column */}
              <div className="contact-column">
                <h3>{t("contact_page.ethiopia")}</h3>

                <div className="contact-item">
                  <i className="fas fa-user"></i>
                  <p>{t("contact_page.contact_details.yonas")}</p>
                </div>

                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <p>{t("contact_page.contact_details.yonas_email")}</p>
                </div>

                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <p>{t("contact_page.contact_details.yonas_phone")}</p>
                </div>

                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <p>
                    {t("contact_page.contact_details.ecopia_address")}
                    <br />
                    {t("contact_page.contact_details.po_box")}
                    <br />
                    {t("contact_page.contact_details.addis_ababa")}
                    <br />
                    {t("contact_page.contact_details.ethiopia")}
                  </p>
                </div>
              </div>

              {/* Germany Column */}
              <div className="contact-column">
                <h3>{t("contact_page.germany")}</h3>

                <div className="contact-item">
                  <i className="fas fa-user"></i>
                  <p>{t("contact_page.contact_details.frederike")}</p>
                </div>

                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <p>{t("contact_page.contact_details.frederike_email")}</p>
                </div>

                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <p>{t("contact_page.contact_details.frederike_phone")}</p>
                </div>
              </div>
            </div>
          </div>

          <style jsx>{`
            .contact-columns {
              display: flex;
              flex-wrap: wrap;
              gap: 2rem;
              margin-top: 1.5rem;
            }

            .contact-column {
              flex: 1;
              min-width: 250px;
              background-color: #f9f9f9;
              padding: 1.5rem;
              border-radius: 8px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
            }

            .contact-column h3 {
              margin-bottom: 1.5rem;
              padding-bottom: 0.5rem;
              border-bottom: 2px solid #4caf50;
              color: #333;
            }

            .contact-item {
              display: flex;
              align-items: flex-start;
              margin-bottom: 1rem;
              gap: 0.1rem; /* Further reduced from 0.3rem */
            }

            .contact-item i {
              margin-right: 0.1rem; /* Reduced from 0.3rem */
              color: #4caf50;
              font-size: 1.2rem;
              margin-top: 0.2rem;
            }

            @media (max-width: 768px) {
              .contact-columns {
                flex-direction: column;
              }
            }
          `}</style>
        </div>

        <div className="contact-form-container">
          <h2>{t("contact_page.form.title")}</h2>
          {submitStatus === "success" && (
            <div className="success-message">
              <p>{t("contact_page.form.success")}</p>
            </div>
          )}
          {submitStatus === "error" && (
            <div className="error-summary">
              <p>{t("contact_page.form.error")}</p>
            </div>
          )}
          {showValidation && Object.keys(errors).length > 0 && (
            <div className="validation-summary">
              <p>{t("contact_page.form.validation")}</p>
              <ul>
                {Object.values(errors).map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          )}
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">{t("contact_page.form.name")}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name && showValidation ? "input-error" : ""}
                disabled={isSubmitting}
              />
              {errors.name && showValidation && <div className="error-message">{errors.name}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="email">{t("contact_page.form.email")}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email && showValidation ? "input-error" : ""}
                disabled={isSubmitting}
              />
              {errors.email && showValidation && <div className="error-message">{errors.email}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="subject">{t("contact_page.form.subject")}</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={errors.subject && showValidation ? "input-error" : ""}
                disabled={isSubmitting}
              />
              {errors.subject && showValidation && <div className="error-message">{errors.subject}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="message">{t("contact_page.form.message")}</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className={errors.message && showValidation ? "input-error" : ""}
                disabled={isSubmitting}
              ></textarea>
              {errors.message && showValidation && <div className="error-message">{errors.message}</div>}
            </div>

            <button type="submit" className="submit-button" disabled={isSubmitting}>
              {isSubmitting ? t("contact_page.form.sending") : t("contact_page.form.send")}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
