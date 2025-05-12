"use client"

import "./Contact.css"
import { useState, useEffect } from "react"

function Contact() {
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
      newErrors.name = "Name is required"
      isValid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
      isValid = false
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
      isValid = false
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
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
        <h1>Contact Us</h1>
        <div className="page-header-line"></div>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            We're here to answer any questions you may have about our certification services. Reach out to us and we'll
            respond as soon as possible.
          </p>

          <div className="contact-details">
            <div className="contact-columns">
              {/* Ethiopia Column */}
              <div className="contact-column">
                <h3>Ethiopia</h3>

                <div className="contact-item">
                  <i className="fas fa-user"></i>
                  <p>Yonas Alemu</p>
                </div>

                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <p>yosheplc@gmail.com</p>
                </div>

                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <p>+251 97 498 4675</p>
                </div>

                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <p>
                    Ecopia PLC
                    <br />
                    PO Box 1072
                    <br />
                    Addis Ababa
                    <br />
                    Ethiopia
                  </p>
                </div>
              </div>

              {/* Germany Column */}
              <div className="contact-column">
                <h3>Germany</h3>

                <div className="contact-item">
                  <i className="fas fa-user"></i>
                  <p>Dr. Frederike Krammer</p>
                </div>

                 <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <p>info@greenacademyafrica.com</p>
                </div>

                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <p>+49 1577 3746519</p>
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
            }

            .contact-item i {
              margin-right: 0.75rem;
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
          <h2>Send Us a Message</h2>
          {submitStatus === "success" && (
            <div className="success-message">
              <p>
                Thank you for your message! We have received your inquiry and will get back to you as soon as possible.
              </p>
            </div>
          )}
          {submitStatus === "error" && (
            <div className="error-summary">
              <p>
                There was a problem sending your message. Please try again or contact us directly at yosheplc@gmail.com
              </p>
            </div>
          )}
          {showValidation && Object.keys(errors).length > 0 && (
            <div className="validation-summary">
              <p>Please correct the following errors:</p>
              <ul>
                {Object.values(errors).map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          )}
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">Name*</label>
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
              <label htmlFor="email">Email*</label>
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
              <label htmlFor="subject">Subject*</label>
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
              <label htmlFor="message">Message*</label>
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
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
