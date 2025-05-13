import { useTranslation } from "react-i18next"
import "./Contact.css"
import Footer from "../Footer"
import ScrollToTop from "../ScrollToTop"

const Contact = () => {
  const { t } = useTranslation()

  return (
    <div className="contact-container">
      <ScrollToTop />
      <div className="contact-hero">
        <h1>{t("contact.title")}</h1>
        <p>{t("contact.subtitle")}</p>
      </div>

      <div className="contact-content">
        <div className="contact-info-section">
          <div className="contact-info">
            <h2>{t("contact.info.title")}</h2>
            <div className="contact-details">
              <div className="contact-detail">
                <h3>{t("contact.info.address.title")}</h3>
                <p>{t("contact.info.address.line1")}</p>
                <p>{t("contact.info.address.line2")}</p>
                <p>{t("contact.info.address.line3")}</p>
              </div>
              <div className="contact-detail">
                <h3>{t("contact.info.phone.title")}</h3>
                <p>{t("contact.info.phone.main")}</p>
                <p>{t("contact.info.phone.support")}</p>
              </div>
              <div className="contact-detail">
                <h3>{t("contact.info.email.title")}</h3>
                <p>{t("contact.info.email.general")}</p>
                <p>{t("contact.info.email.support")}</p>
                <p>{t("contact.info.email.sales")}</p>
              </div>
              <div className="contact-detail">
                <h3>{t("contact.info.hours.title")}</h3>
                <p>{t("contact.info.hours.weekdays")}</p>
                <p>{t("contact.info.hours.weekend")}</p>
              </div>
            </div>
          </div>

          <div className="contact-map">
            {/* Map would go here */}
            <p>{t("contact.map.text")}</p>
          </div>
        </div>

        <div className="contact-form-section">
          <h2>{t("contact.form.title")}</h2>
          <p>{t("contact.form.description")}</p>

          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">{t("contact.form.name")}</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t("contact.form.email")}</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">{t("contact.form.subject")}</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">{t("contact.form.message")}</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="contact-form-button">
              {t("contact.form.submit")}
            </button>
          </form>
        </div>

        <div className="contact-offices">
          <h2>{t("contact.offices.title")}</h2>
          <div className="office-locations">
            <div className="office">
              <h3>{t("contact.offices.office1.title")}</h3>
              <p>{t("contact.offices.office1.address")}</p>
              <p>{t("contact.offices.office1.phone")}</p>
            </div>
            <div className="office">
              <h3>{t("contact.offices.office2.title")}</h3>
              <p>{t("contact.offices.office2.address")}</p>
              <p>{t("contact.offices.office2.phone")}</p>
            </div>
            <div className="office">
              <h3>{t("contact.offices.office3.title")}</h3>
              <p>{t("contact.offices.office3.address")}</p>
              <p>{t("contact.offices.office3.phone")}</p>
            </div>
          </div>
        </div>

        <div className="contact-faq">
          <h2>{t("contact.faq.title")}</h2>
          <div className="faq-items">
            <div className="faq-item">
              <h3>{t("contact.faq.question1")}</h3>
              <p>{t("contact.faq.answer1")}</p>
            </div>
            <div className="faq-item">
              <h3>{t("contact.faq.question2")}</h3>
              <p>{t("contact.faq.answer2")}</p>
            </div>
            <div className="faq-item">
              <h3>{t("contact.faq.question3")}</h3>
              <p>{t("contact.faq.answer3")}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
