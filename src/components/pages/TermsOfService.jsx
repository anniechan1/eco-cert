import { useTranslation } from "react-i18next";
import "../LegalPages.css";

function TermsOfService() {
  const { t } = useTranslation();

  return (
    <div className="legal-page-container">
      <div className="legal-page-header">
        <h1>{t("terms_of_service.title")}</h1>
        <div className="legal-divider"></div>
      </div>

      <div className="legal-content">
        <p className="legal-effective-date">{t("legal.effective_date")}</p>

        <div className="legal-section">
          <h2>{t("terms_of_service.introduction.title")}</h2>
          <p>{t("terms_of_service.introduction.paragraph1")}</p>
          <p>{t("terms_of_service.introduction.paragraph2")}</p>
        </div>

        <div className="legal-section">
          <h2>{t("terms_of_service.about_services.title")}</h2>
          <p>{t("terms_of_service.about_services.paragraph1")}</p>
          <ul>
            {t("terms_of_service.about_services.list_items", { returnObjects: true }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>{t("terms_of_service.about_services.paragraph2")}</p>
        </div>

        <div className="legal-section">
          <h2>{t("terms_of_service.user_accounts.title")}</h2>
          <p>{t("terms_of_service.user_accounts.paragraph1")}</p>
          <p>{t("terms_of_service.user_accounts.paragraph2")}</p>
        </div>

        <div className="legal-section">
          <h2>{t("terms_of_service.application_process.title")}</h2>
          <p>{t("terms_of_service.application_process.paragraph")}</p>
          <ul>
            {t("terms_of_service.application_process.list_items", { returnObjects: true }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>{t("terms_of_service.application_process.paragraph2")}</p>
        </div>

        <div className="legal-section">
          <h2>{t("terms_of_service.intellectual_property.title")}</h2>
          <p>{t("terms_of_service.intellectual_property.paragraph1")}</p>
          <p>{t("terms_of_service.intellectual_property.paragraph2")}</p>
        </div>

        <div className="legal-section">
          <h2>{t("terms_of_service.user_content.title")}</h2>
          <p>{t("terms_of_service.user_content.paragraph1")}</p>
          <p>{t("terms_of_service.user_content.paragraph2")}</p>
          <ul>
            {t("terms_of_service.user_content.list_items", { returnObjects: true }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>{t("terms_of_service.user_content.paragraph3")}</p>
        </div>

        <div className="legal-section">
          <h2>{t("terms_of_service.prohibited_uses.title")}</h2>
          <p>{t("terms_of_service.prohibited_uses.paragraph")}</p>
          <ul>
            {t("terms_of_service.prohibited_uses.list_items", { returnObjects: true }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="legal-section">
          <h2>{t("terms_of_service.limitation_of_liability.title")}</h2>
          <p>{t("terms_of_service.limitation_of_liability.paragraph")}</p>
          <ul>
            {t("terms_of_service.limitation_of_liability.list_items", { returnObjects: true }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>{t("terms_of_service.limitation_of_liability.paragraph2")}</p>
        </div>

        <div className="legal-section">
          <h2>{t("terms_of_service.indemnification.title")}</h2>
          <p>{t("terms_of_service.indemnification.paragraph")}</p>
        </div>

        <div className="legal-section">
          <h2>{t("terms_of_service.governing_law.title")}</h2>
          <p>{t("terms_of_service.governing_law.paragraph1")}</p>
          <p>{t("terms_of_service.governing_law.paragraph2")}</p>
        </div>

        <div className="legal-section">
          <h2>{t("terms_of_service.dispute_resolution.title")}</h2>
          <p>{t("terms_of_service.dispute_resolution.paragraph")}</p>
        </div>

        <div className="legal-section">
          <h2>{t("terms_of_service.termination.title")}</h2>
          <p>{t("terms_of_service.termination.paragraph1")}</p>
          <p>{t("terms_of_service.termination.paragraph2")}</p>
          <p>{t("terms_of_service.termination.paragraph3")}</p>
        </div>

        <div className="legal-section">
          <h2>{t("terms_of_service.changes_to_terms.title")}</h2>
          <p>{t("terms_of_service.changes_to_terms.paragraph1")}</p>
          <p>{t("terms_of_service.changes_to_terms.paragraph2")}</p>
        </div>

        <div className="legal-section">
          <h2>{t("terms_of_service.contact_us.title")}</h2>
          <p>{t("terms_of_service.contact_us.paragraph")}</p>
          <ul>
            {t("terms_of_service.contact_us.list_items", { returnObjects: true }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <p className="legal-last-updated">{t("legal.last_updated")}</p>
      </div>
    </div>
  );
}

export default TermsOfService;