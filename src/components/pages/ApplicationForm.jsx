"use client"

import "./ApplicationForm.css"
import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"

function ApplicationForm() {
  const { t } = useTranslation();
  
  const [formData, setFormData] = useState({
    orgName: "",
    orgType: "",
    employees: "",
    address: "",
    city: "",
    country: "",
    firstName: "",
    lastName: "",
    position: "",
    email: "",
    phone: "",
    certType: "",
    products: "",
    landSize: "",
    currentCert: "",
    message: "",
    terms: false,
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
    const { name, value, type, checked } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
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

    // Required fields
    const requiredFields = [
      "orgName",
      "orgType",
      "address",
      "city",
      "country",
      "firstName",
      "lastName",
      "position",
      "email",
      "phone",
      "certType",
      "products",
      "terms",
    ]

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, " $1")} ${t("contact_required")}`
        isValid = false
      }
    })

    // Email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t("contact_invalid_email")
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

      // Prepare template parameters for EmailJS - send each field separately
      const templateParams = {
        // Send each form field as a separate parameter to match the template
        orgName: formData.orgName,
        orgType: formData.orgType,
        employees: formData.employees || "Not specified",
        address: formData.address,
        city: formData.city,
        country: formData.country,
        firstName: formData.firstName,
        lastName: formData.lastName,
        position: formData.position,
        email: formData.email,
        phone: formData.phone,
        certType: formData.certType,
        products: formData.products,
        landSize: formData.landSize || "Not specified",
        currentCert: formData.currentCert || "None",
        message: formData.message || "No additional information provided.",
        terms: formData.terms ? "Agreed" : "Not agreed",
        // Additional parameters for EmailJS
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        subject: `Certification Application - ${formData.orgName}`,
        to_email: "eco-certification@greenacademyafrica.com",
      }

      // Send email using EmailJS
      window.emailjs
        .send(
          "service_ecocert", // Replace with your EmailJS service ID
          "template_cert", // Replace with your EmailJS template ID
          templateParams,
        )
        .then((response) => {
          console.log("Application sent successfully:", response)
          setSubmitStatus("success")

          // Reset form after submission
          setFormData({
            orgName: "",
            orgType: "",
            employees: "",
            address: "",
            city: "",
            country: "",
            firstName: "",
            lastName: "",
            position: "",
            email: "",
            phone: "",
            certType: "",
            products: "",
            landSize: "",
            currentCert: "",
            message: "",
            terms: false,
          })

          // Reset validation state
          setShowValidation(false)
        })
        .catch((error) => {
          console.error("Application sending failed:", error)
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
        <h1>{t("application_title")}</h1>
        <div className="leaf-divider">
          <span className="divider-line"></span>
          <i className="fas fa-leaf"></i>
          <span className="divider-line"></span>
        </div>
      </div>

      <div className="application-content">
        <div className="application-info">
          <h2>{t("application_intro_title")}</h2>
          <p>
            {t("application_intro_text")}
          </p>

          <div className="certification-types">
            <h3>{t("application_cert_types")}</h3>
            <div className="cert-type-grid">
              <div className="cert-type-item">
                <div className="cert-icon">
                  <i className="fa-regular fa-jar"></i>
                </div>
                <div>
                  <h4>{t("application_cert_type_1")}</h4>
                  <p>{t("application_cert_type_1_desc")}</p>
                </div>
              </div>

              <div className="cert-type-item">
                <div className="cert-icon">
                  <i className="fa-solid fa-seedling"></i>
                </div>
                <div>
                  <h4>{t("application_cert_type_2")}</h4>
                  <p>{t("application_cert_type_2_desc")}</p>
                </div>
              </div>

              <div className="cert-type-item">
                <div className="cert-icon">
                  <i className="fas fa-industry"></i>
                </div>
                <div>
                  <h4>{t("application_cert_type_3")}</h4>
                  <p>{t("application_cert_type_3_desc")}</p>
                </div>
              </div>

              <div className="cert-type-item">
                <div className="cert-icon">
                  <i className="fas fa-tree"></i>
                </div>
                <div>
                  <h4>{t("application_cert_type_4")}</h4>
                  <p>{t("application_cert_type_4_desc")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="application-form-container">
          <h2>{t("application_form_title")}</h2>

          {submitStatus === "success" && (
            <div className="success-message">
              <p>
                {t("application_success")}
              </p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="error-summary">
              <p>
                {t("application_error")}
              </p>
            </div>
          )}

          {showValidation && Object.keys(errors).length > 0 && (
            <div className="validation-summary">
              <p>{t("contact_validation")}</p>
              <ul>
                {Object.values(errors).map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          )}

          <form className="application-form" onSubmit={handleSubmit}>
            <div className="form-section">
              <h3>{t("application_org_info")}</h3>

              <div className="form-group">
                <label htmlFor="orgName">{t("application_org_name")}*</label>
                <input
                  type="text"
                  id="orgName"
                  name="orgName"
                  value={formData.orgName}
                  onChange={handleChange}
                  className={errors.orgName && showValidation ? "input-error" : ""}
                  disabled={isSubmitting}
                />
                {errors.orgName && showValidation && <div className="error-message">{errors.orgName}</div>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="orgType">{t("application_org_type")}*</label>
                  <select
                    id="orgType"
                    name="orgType"
                    value={formData.orgType}
                    onChange={handleChange}
                    className={errors.orgType && showValidation ? "input-error" : ""}
                    disabled={isSubmitting}
                  >
                    <option value="">{t("applicationForm.form.selectOption")}</option>
                    <option value="farm">{t("applicationForm.form.farm")}</option>
                    <option value="processor">{t("applicationForm.form.processor")}</option>
                    <option value="cooperative">{t("applicationForm.form.cooperative")}</option>
                    <option value="trader">{t("applicationForm.form.trader")}</option>
                    <option value="other">{t("applicationForm.form.other")}</option>
                  </select>
                  {errors.orgType && showValidation && <div className="error-message">{errors.orgType}</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="employees">{t("application_employees")}</label>
                  <input
                    type="number"
                    id="employees"
                    name="employees"
                    min="1"
                    value={formData.employees}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="address">{t("application_address")}*</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={errors.address && showValidation ? "input-error" : ""}
                  disabled={isSubmitting}
                />
                {errors.address && showValidation && <div className="error-message">{errors.address}</div>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">{t("application_city")}*</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={errors.city && showValidation ? "input-error" : ""}
                    disabled={isSubmitting}
                  />
                  {errors.city && showValidation && <div className="error-message">{errors.city}</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="country">{t("application_country")}*</label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className={errors.country && showValidation ? "input-error" : ""}
                    disabled={isSubmitting}
                  />
                  {errors.country && showValidation && <div className="error-message">{errors.country}</div>}
                </div>
              </div>
            </div>

            <div className="form-section">
              <h3>{t("application_contact_info")}</h3>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">{t("application_first_name")}*</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={errors.firstName && showValidation ? "input-error" : ""}
                    disabled={isSubmitting}
                  />
                  {errors.firstName && showValidation && <div className="error-message">{errors.firstName}</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">{t("application_last_name")}*</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={errors.lastName && showValidation ? "input-error" : ""}
                    disabled={isSubmitting}
                  />
                  {errors.lastName && showValidation && <div className="error-message">{errors.lastName}</div>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="position">{t("application_position")}*</label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className={errors.position && showValidation ? "input-error" : ""}
                  disabled={isSubmitting}
                />
                {errors.position && showValidation && <div className="error-message">{errors.position}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="email">{t("application_email")}*</label>
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
                <label htmlFor="phone">{t("application_phone")}*</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone && showValidation ? "input-error" : ""}
                  disabled={isSubmitting}
                />
                {errors.phone && showValidation && <div className="error-message">{errors.phone}</div>}
              </div>
            </div>

            <div className="form-section">
              <h3>{t("application_cert_details")}</h3>

              <div className="form-group">
                <label htmlFor="certType">{t("application_cert_type")}*</label>
                <select
                  id="certType"
                  name="certType"
                  value={formData.certType}
                  onChange={handleChange}
                  className={errors.certType && showValidation ? "input-error" : ""}
                  disabled={isSubmitting}
                >
                  <option value="">{t("applicationForm.form.selectOption")}</option>
                  <option value="Organic Beekeeping">{t("application_cert_type_1")}</option>
                  <option value="Crop Production">{t("application_cert_type_2")}</option>
                  <option value="Processing & Handling">{t("application_cert_type_3")}</option>
                  <option value="Wild Harvest & Forestry">{t("application_cert_type_4")}</option>
                  <option value="multiple">{t("applicationForm.form.multiple")}</option>
                </select>
                {errors.certType && showValidation && <div className="error-message">{errors.certType}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="products">{t("application_products")}*</label>
                <input
                  type="text"
                  id="products"
                  name="products"
                  placeholder="e.g., Coffee, Cocoa, Honey"
                  value={formData.products}
                  onChange={handleChange}
                  className={errors.products && showValidation ? "input-error" : ""}
                  disabled={isSubmitting}
                />
                {errors.products && showValidation && <div className="error-message">{errors.products}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="landSize">{t("application_land_size")}</label>
                <input
                  type="number"
                  id="landSize"
                  name="landSize"
                  min="0"
                  step="0.1"
                  value={formData.landSize}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="currentCert">{t("application_current_cert")}</label>
                <input
                  type="text"
                  id="currentCert"
                  name="currentCert"
                  placeholder="e.g., Rainforest Alliance, UTZ"
                  value={formData.currentCert}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">{t("application_additional_info")}</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Please provide any additional details that might be relevant to your certification application"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                ></textarea>
              </div>
            </div>

            <div className="form-group checkbox-group">
              <div className="checkbox-wrapper">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  className={errors.terms && showValidation ? "input-error" : ""}
                  disabled={isSubmitting}
                />
                <label htmlFor="terms">{t("application_terms")}*</label>
              </div>
              {errors.terms && showValidation && <div className="error-message">{errors.terms}</div>}
            </div>

            <button type="submit" className="submit-button" disabled={isSubmitting}>
              {isSubmitting ? t("application_submitting") : t("application_submit")}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ApplicationForm
