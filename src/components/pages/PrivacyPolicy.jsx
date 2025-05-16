import { useTranslation } from "react-i18next";
import "../LegalPages.css";

function PrivacyPolicy() {
  const { t } = useTranslation();

  return (
    <div className="legal-page-container">
      <div className="legal-page-header">
        <h1>{t("privacy_policy.title")}</h1>
        <div className="legal-divider"></div>
      </div>

      <div className="legal-content">
        <p className="legal-effective-date">{t("legal.effective_date")}</p>

        <div className="legal-controller">
          <strong>{t("legal.data_controller")}</strong>
          <p>
            Ecopia PLC
            <br />
            PO Box 1072
            <br />
            Addis Ababa
            <br />
            Email: yosheplc@gmail.com
            <br />
            Phone: +251 99 351 4543
          </p>
        </div>

        <div className="legal-section">
          <h2>{t("privacy_policy.introduction.title")}</h2>
          <p>{t("privacy_policy.introduction.paragraph1")}</p>
          <p>{t("privacy_policy.introduction.paragraph2")}</p>
          <p>{t("privacy_policy.introduction.paragraph3")}</p>
        </div>

        <div className="legal-section">
          <h2>{t("privacy_policy.information_collected.title")}</h2>

          <h3>{t("privacy_policy.information_collected.personal_data.title")}</h3>
          <p>{t("privacy_policy.information_collected.personal_data.paragraph1")}</p>
          <ul>
            {t("privacy_policy.information_collected.personal_data.list_items", { returnObjects: true }).map(
              (item, index) => (
                <li key={index}>{item}</li>
              )
            )}
          </ul>
          <p>{t("privacy_policy.information_collected.personal_data.paragraph2")}</p>
          <ul>
            {t("privacy_policy.information_collected.personal_data.list_items2", { returnObjects: true }).map(
              (item, index) => (
                <li key={index}>{item}</li>
              )
            )}
          </ul>

          <h3>{t("privacy_policy.information_collected.automatic_info.title")}</h3>
          <p>{t("privacy_policy.information_collected.automatic_info.paragraph")}</p>
          <ul>
            {t("privacy_policy.information_collected.automatic_info.list_items", { returnObjects: true }).map(
              (item, index) => (
                <li key={index}>{item}</li>
              )
            )}
          </ul>
          <p>{t("privacy_policy.information_collected.automatic_info.paragraph2")}</p>
        </div>

        <div className="legal-section">
          <h2>{t("privacy_policy.information_use.title")}</h2>
          <p>{t("privacy_policy.information_use.paragraph")}</p>
          <ul>
            {t("privacy_policy.information_use.list_items", { returnObjects: true }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>{t("privacy_policy.information_use.paragraph2")}</p>
          <ul>
            {t("privacy_policy.information_use.list_items2", { returnObjects: true }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="legal-section">
          <h2>{t("privacy_policy.cookies.title")}</h2>
          <p>{t("privacy_policy.cookies.paragraph1")}</p>
          <p>{t("privacy_policy.cookies.paragraph2")}</p>
          <ul>
            {t("privacy_policy.cookies.list_items", { returnObjects: true }).map((item, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
          <p>{t("privacy_policy.cookies.paragraph3")}</p>
          <p dangerouslySetInnerHTML={{ __html: t("privacy_policy.cookies.paragraph4") }} />
        </div>

        <div className="legal-section">
          <h2>{t("privacy_policy.data_sharing.title")}</h2>
          <p>{t("privacy_policy.data_sharing.paragraph")}</p>
          <ul>
            {t("privacy_policy.data_sharing.list_items", { returnObjects: true }).map((item, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
          <p>{t("privacy_policy.data_sharing.paragraph2")}</p>
        </div>

        <div className="legal-section">
          <h2>{t("privacy_policy.international_transfers.title")}</h2>
          <p>{t("privacy_policy.international_transfers.paragraph1")}</p>
          <p>{t("privacy_policy.international_transfers.paragraph2")}</p>
          <p>{t("privacy_policy.international_transfers.paragraph3")}</p>
        </div>

        <div className="legal-section">
          <h2>{t("privacy_policy.data_security.title")}</h2>
          <p>{t("privacy_policy.data_security.paragraph1")}</p>
          <p>{t("privacy_policy.data_security.paragraph2")}</p>
        </div>

        <div className="legal-section">
          <h2>{t("privacy_policy.data_retention.title")}</h2>
          <p>{t("privacy_policy.data_retention.paragraph1")}</p>
          <p>{t("privacy_policy.data_retention.paragraph2")}</p>
        </div>

        <div className="legal-section">
          <h2>{t("privacy_policy.data_protection_rights.title")}</h2>
          <p>{t("privacy_policy.data_protection_rights.paragraph")}</p>
          <ul>
            {t("privacy_policy.data_protection_rights.list_items", { returnObjects: true }).map((item, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
          <p>{t("privacy_policy.data_protection_rights.paragraph2")}</p>
          <p>{t("privacy_policy.data_protection_rights.paragraph3")}</p>
        </div>

        <div className="legal-section">
          <h2>{t("privacy_policy.childrens_privacy.title")}</h2>
          <p>{t("privacy_policy.childrens_privacy.paragraph")}</p>
        </div>

        <div className="legal-section">
          <h2>{t("privacy_policy.changes_to_policy.title")}</h2>
          <p>{t("privacy_policy.changes_to_policy.paragraph1")}</p>
          <p>{t("privacy_policy.changes_to_policy.paragraph2")}</p>
        </div>

        <div className="legal-section">
          <h2>{t("privacy_policy.contact_us.title")}</h2>
          <p>{t("privacy_policy.contact_us.paragraph")}</p>
          <ul>
            {t("privacy_policy.contact_us.list_items", { returnObjects: true }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <p className="legal-last-updated">{t("legal.last_updated")}</p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;