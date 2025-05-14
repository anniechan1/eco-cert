import { useTranslation } from "react-i18next";
import "../LegalPages.css";

function CookiePolicy() {
  const { t } = useTranslation();

  return (
    <div className="legal-page-container">
      <div className="legal-page-header">
        <h1>{t("cookie_policy.title")}</h1>
        <div className="legal-divider"></div>
      </div>

      <div className="legal-content">
        <p className="legal-effective-date">{t("legal.effective_date")}</p>

        <div className="legal-section">
          <h2>{t("cookie_policy.introduction.title")}</h2>
          <p>{t("cookie_policy.introduction.paragraph")}</p>
        </div>

        <div className="legal-section">
          <h2>{t("cookie_policy.what_are_cookies.title")}</h2>
          <p>{t("cookie_policy.what_are_cookies.paragraph")}</p>
        </div>

        <div className="legal-section">
          <h2>{t("cookie_policy.types_of_cookies.title")}</h2>

          <h3>{t("cookie_policy.types_of_cookies.essential.title")}</h3>
          <p>{t("cookie_policy.types_of_cookies.essential.paragraph1")}</p>
          <p>{t("cookie_policy.types_of_cookies.essential.paragraph2")}</p>

          <h3>{t("cookie_policy.types_of_cookies.analytics.title")}</h3>
          <p>{t("cookie_policy.types_of_cookies.analytics.paragraph1")}</p>
          <p>{t("cookie_policy.types_of_cookies.analytics.paragraph2")}</p>

          <h3>{t("cookie_policy.types_of_cookies.functional.title")}</h3>
          <p>{t("cookie_policy.types_of_cookies.functional.paragraph1")}</p>
          <p>{t("cookie_policy.types_of_cookies.functional.paragraph2")}</p>
        </div>

        <div className="legal-section">
          <h2>{t("cookie_policy.third_party_cookies.title")}</h2>
          <p>{t("cookie_policy.third_party_cookies.paragraph1")}</p>
          <p dangerouslySetInnerHTML={{ __html: t("cookie_policy.third_party_cookies.paragraph2") }} />
        </div>

        <div className="legal-section">
          <h2>{t("cookie_policy.managing_cookies.title")}</h2>
          <p>{t("cookie_policy.managing_cookies.paragraph")}</p>

          <h3>{t("cookie_policy.managing_cookies.consent.title")}</h3>
          <p>{t("cookie_policy.managing_cookies.consent.paragraph")}</p>

          <h3>{t("cookie_policy.managing_cookies.browser_settings.title")}</h3>
          <p>{t("cookie_policy.managing_cookies.browser_settings.paragraph1")}</p>
          <ul>
            {t("cookie_policy.managing_cookies.browser_settings.list_items", { returnObjects: true }).map(
              (item, index) => (
                <li key={index}>{item}</li>
              )
            )}
          </ul>
          <p>{t("cookie_policy.managing_cookies.browser_settings.paragraph2")}</p>
          <ul>
            {t("cookie_policy.managing_cookies.browser_settings.browser_links", { returnObjects: true }).map(
              (item, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
              )
            )}
          </ul>
        </div>

        <div className="legal-section">
          <h2>{t("cookie_policy.legal_basis.title")}</h2>
          <p>{t("cookie_policy.legal_basis.paragraph")}</p>
        </div>

        <div className="legal-section">
          <h2>{t("cookie_policy.contact_us.title")}</h2>
          <p>{t("cookie_policy.contact_us.paragraph")}</p>
          <ul>
            {t("cookie_policy.contact_us.list_items", { returnObjects: true }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <p className="legal-last-updated">{t("legal.last_updated")}</p>
      </div>
    </div>
  );
}

export default CookiePolicy;