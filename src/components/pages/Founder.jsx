import "./Founder.css"
import ScrollToTop from "../ScrollToTop"
import { useTranslation } from "react-i18next"

function Founder() {
  const { t } = useTranslation()

  return (
    <>
      <ScrollToTop />
      <div className="founder-page">
        <div className="founder-header">
          <h1>{t("founder.name")}</h1>
          <h2>{t("founder.title")}</h2>
        </div>

        <div className="founder-container">
          <div className="founder-sidebar">
            <div className="founder-image-container">
              <img src="/images/MKM.png" alt={t("founder.name")} className="founder-image" />
            </div>
            <div className="founder-sidebar-content">
              <div className="founder-roles">
                <p>
                  {t("founder.role_ceo")}{" "}
                  <a
                    href="https://www.ecopia-shop.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="external-link"
                  >
                    Ecopia UG
                  </a>
                </p>
                <p>
                  {t("founder.role_founder")}{" "}
                  <a
                    href="https://www.seratera.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="external-link"
                  >
                    Seratera.com
                  </a>
                </p>
                <p>{t("founder.role_expert")}</p>
              </div>
            </div>
          </div>

          <div className="founder-content">
            <section className="founder-section">
              <p>
                {t("founder.intro_paragraph1_part1")} <strong>{t("founder.intro_paragraph1_strong1")}</strong>
                {t("founder.intro_paragraph1_part2")}
              </p>
              <p>
                {t("founder.intro_paragraph2_part1")}{" "}
                <a
                  href="https://www.ecopia-shop.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external-link"
                >
                  Ecopia
                </a>
                {t("founder.intro_paragraph2_part2")} <strong>{t("founder.intro_paragraph2_strong1")}</strong>{" "}
                {t("founder.intro_paragraph2_part3")} <strong>{t("founder.intro_paragraph2_strong2")}</strong>
                {t("founder.intro_paragraph2_part4")}
              </p>
              <p>
                {t("founder.intro_paragraph3_part1")}{" "}
                <a
                  href="http://www.eljojofe.org/?p=1&lang=EN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external-link"
                >
                  Eljojofe e.V.
                </a>
                {t("founder.intro_paragraph3_part2")} <strong>{t("founder.intro_paragraph3_strong1")}</strong>{" "}
                {t("founder.intro_paragraph3_part3")} <strong>{t("founder.intro_paragraph3_strong2")}</strong>
                {t("founder.intro_paragraph3_part4")}
              </p>
              <p>
                {t("founder.intro_paragraph4_part1")} <strong>{t("founder.intro_paragraph4_strong1")}</strong>
                {t("founder.intro_paragraph4_part2")} <strong>{t("founder.intro_paragraph4_strong2")}</strong>
                {t("founder.intro_paragraph4_part3")}
              </p>
              <p>
                {t("founder.intro_paragraph5_part1")} <strong>{t("founder.intro_paragraph5_strong1")}</strong>
                {t("founder.intro_paragraph5_part2")} <strong>{t("founder.intro_paragraph5_strong2")}</strong>
                {t("founder.intro_paragraph5_part3")}
              </p>
              <p>
                {t("founder.intro_paragraph6_part1")} <strong>{t("founder.intro_paragraph6_strong1")}</strong>
                {t("founder.intro_paragraph6_part2")}
              </p>
              <p>
                {t("founder.intro_paragraph7_part1")} <strong>{t("founder.intro_paragraph7_strong1")}</strong>
                {t("founder.intro_paragraph7_part2")}
              </p>
            </section>

            <section className="founder-section">
              <h2>{t("founder.professional_profile_title")}</h2>
              <p>
                {t("founder.professional_profile_paragraph_part1")}{" "}
                <strong>{t("founder.professional_profile_paragraph_strong1")}</strong>
                {t("founder.professional_profile_paragraph_part2")}{" "}
                <strong>{t("founder.professional_profile_paragraph_strong2")}</strong>
                {t("founder.professional_profile_paragraph_part3")}
              </p>
            </section>

            <section className="founder-section">
              <h2>{t("founder.key_qualifications_title")}</h2>

              <h3>{t("founder.organic_certification_title")}</h3>
              <ul>
                <li>
                  <strong>{t("founder.organic_certification_item1_strong")}</strong>
                  {t("founder.organic_certification_item1_text")}
                </li>
                <li>
                  {t("founder.organic_certification_item2_part1")}{" "}
                  <strong>{t("founder.organic_certification_item2_strong")}</strong>
                  {t("founder.organic_certification_item2_part2")}
                </li>
                <li>
                  {t("founder.organic_certification_item3_part1")}{" "}
                  <strong>{t("founder.organic_certification_item3_strong")}</strong>{" "}
                  {t("founder.organic_certification_item3_part2")}
                </li>
              </ul>

              <h3>{t("founder.verification_compliance_title")}</h3>
              <ul>
                <li>
                  {t("founder.verification_compliance_item1_part1")}{" "}
                  <strong>{t("founder.verification_compliance_item1_strong")}</strong>.
                </li>
                <li>
                  {t("founder.verification_compliance_item2_part1")}{" "}
                  <strong>{t("founder.verification_compliance_item2_strong")}</strong>
                  {t("founder.verification_compliance_item2_part2")}
                </li>
              </ul>

              <h3>{t("founder.sustainable_agritech_title")}</h3>
              <ul>
                <li>
                  {t("founder.sustainable_agritech_item1_part1")}{" "}
                  <strong>{t("founder.sustainable_agritech_item1_strong")}</strong>
                  {t("founder.sustainable_agritech_item1_part2")}
                </li>
              </ul>

              <h3>{t("founder.disarmament_title")}</h3>
              <ul>
                <li>
                  {t("founder.disarmament_item1_part1")} <strong>{t("founder.disarmament_item1_strong")}</strong>.
                </li>
              </ul>

              <h3>{t("founder.strategic_leadership_title")}</h3>
              <ul>
                <li>
                  {t("founder.strategic_leadership_item1_part1")}{" "}
                  <strong>{t("founder.strategic_leadership_item1_strong")}</strong>
                  {t("founder.strategic_leadership_item1_part2")}
                </li>
              </ul>
            </section>

            <section className="founder-section">
              <h2>{t("founder.professional_experience_title")}</h2>

              <div className="experience-item">
                <h3>
                  {t("founder.ecopia_title_part1")}{" "}
                  <a
                    href="https://www.ecopia-shop.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="external-link"
                  >
                    Ecopia UG
                  </a>{" "}
                  {t("founder.ecopia_title_part2")}
                </h3>
                <p className="experience-date">{t("founder.ecopia_date")}</p>
                <ul>
                  <li>
                    {t("founder.ecopia_item1_part1")} <strong>{t("founder.ecopia_item1_strong")}</strong>
                    {t("founder.ecopia_item1_part2")}
                  </li>
                  <li>
                    {t("founder.ecopia_item2_part1")}{" "}
                    <a
                      href="http://www.eljojofe.org/?p=1&lang=EN"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="external-link"
                    >
                      Eljojofe e.V.
                    </a>{" "}
                    {t("founder.ecopia_item2_part2")}
                  </li>
                  <li>
                    {t("founder.ecopia_item3_part1")} <strong>{t("founder.ecopia_item3_strong")}</strong>
                    {t("founder.ecopia_item3_part2")}
                  </li>
                </ul>
              </div>

              <div className="experience-item">
                <h3>{t("founder.advisory_roles_title")}</h3>
                <ul>
                  <li>
                    <strong>{t("founder.advisory_roles_item1_strong")}</strong>:{t("founder.advisory_roles_item1_text")}
                  </li>
                  <li>
                    <a
                      href="http://www.eljojofe.org/?p=1&lang=EN"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="external-link"
                    >
                      Eljojofe e.V.
                    </a>
                    : {t("founder.advisory_roles_item2_text")}
                  </li>
                </ul>
              </div>

              <div className="experience-item">
                <h3>{t("founder.lecturer_speaker_title")}</h3>
                <ul>
                  <li>
                    <strong>{t("founder.lecturer_speaker_item1_strong")}</strong>
                    {t("founder.lecturer_speaker_item1_text")}
                  </li>
                  <li>
                    {t("founder.lecturer_speaker_item2_part1")}{" "}
                    <strong>{t("founder.lecturer_speaker_item2_strong")}</strong>{" "}
                    {t("founder.lecturer_speaker_item2_part2")}
                  </li>
                </ul>
              </div>

              <div className="experience-item">
                <h3>{t("founder.tgm_group_title")}</h3>
                <p className="experience-date">{t("founder.tgm_group_date")}</p>
                <ul>
                  <li>
                    {t("founder.tgm_group_item1_part1")} <strong>{t("founder.tgm_group_item1_strong")}</strong>
                    {t("founder.tgm_group_item1_part2")}
                  </li>
                  <li>
                    {t("founder.tgm_group_item2_part1")} <strong>{t("founder.tgm_group_item2_strong")}</strong>
                    {t("founder.tgm_group_item2_part2")}
                  </li>
                  <li>{t("founder.tgm_group_item3")}</li>
                </ul>
              </div>

              <div className="experience-item">
                <h3>
                  {t("founder.ecopia_seratera_title_part1")}{" "}
                  <a
                    href="https://www.ecopia-shop.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="external-link"
                  >
                    Ecopia UG
                  </a>{" "}
                  {t("founder.ecopia_seratera_title_part2")}{" "}
                  <a
                    href="https://www.seratera.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="external-link"
                  >
                    Seratera.com
                  </a>
                </h3>
                <p className="experience-date">{t("founder.ecopia_seratera_date")}</p>
                <ul>
                  <li>
                    {t("founder.ecopia_seratera_item1_part1")}{" "}
                    <strong>{t("founder.ecopia_seratera_item1_strong")}</strong>
                    {t("founder.ecopia_seratera_item1_part2")}
                  </li>
                  <li>
                    {t("founder.ecopia_seratera_item2_part1")}{" "}
                    <strong>{t("founder.ecopia_seratera_item2_strong")}</strong>
                    {t("founder.ecopia_seratera_item2_part2")}
                  </li>
                  <li>{t("founder.ecopia_seratera_item3")}</li>
                </ul>
              </div>

              <div className="experience-item">
                <h3>{t("founder.advisor_governments_title")}</h3>
                <p className="experience-date">{t("founder.advisor_governments_date")}</p>
                <ul>
                  <li>
                    <strong>{t("founder.advisor_governments_item1_strong")}</strong>
                    {t("founder.advisor_governments_item1_text")}
                  </li>
                  <li>
                    {t("founder.advisor_governments_item2_part1")}{" "}
                    <strong>{t("founder.advisor_governments_item2_strong")}</strong>.
                  </li>
                  <li>
                    {t("founder.advisor_governments_item3_part1")}{" "}
                    <strong>{t("founder.advisor_governments_item3_strong")}</strong>
                    {t("founder.advisor_governments_item3_part2")}
                  </li>
                </ul>
              </div>

              <div className="experience-item">
                <h3>{t("founder.lecturer_public_speaker_title")}</h3>
                <p className="experience-date">{t("founder.lecturer_public_speaker_date")}</p>
                <ul>
                  <li>
                    <strong>{t("founder.lecturer_public_speaker_item1_strong")}</strong>
                    {t("founder.lecturer_public_speaker_item1_text")}
                  </li>
                  <li>
                    {t("founder.lecturer_public_speaker_item2_part1")}{" "}
                    <strong>{t("founder.lecturer_public_speaker_item2_strong")}</strong>
                    {t("founder.lecturer_public_speaker_item2_part2")}
                  </li>
                  <li>
                    {t("founder.lecturer_public_speaker_item3_part1")}{" "}
                    <strong>{t("founder.lecturer_public_speaker_item3_strong")}</strong>
                    {t("founder.lecturer_public_speaker_item3_part2")}
                  </li>
                  <li>
                    {t("founder.lecturer_public_speaker_item4_part1")}{" "}
                    <strong>{t("founder.lecturer_public_speaker_item4_strong")}</strong>
                    {t("founder.lecturer_public_speaker_item4_part2")}
                  </li>
                </ul>
              </div>

              <div className="experience-item">
                <h3>{t("founder.opcw_title")}</h3>
                <p className="experience-date">{t("founder.opcw_date")}</p>
                <ul>
                  <li>
                    {t("founder.opcw_item1_part1")} <strong>{t("founder.opcw_item1_strong")}</strong>
                    {t("founder.opcw_item1_part2")}
                  </li>
                  <li>
                    {t("founder.opcw_item2_part1")} <strong>{t("founder.opcw_item2_strong")}</strong>
                    {t("founder.opcw_item2_part2")}
                  </li>
                  <li>
                    {t("founder.opcw_item3_part1")} <strong>{t("founder.opcw_item3_strong")}</strong>
                    {t("founder.opcw_item3_part2")}
                  </li>
                </ul>
              </div>

              <div className="experience-item">
                <h3>{t("founder.eurocontact_title")}</h3>
                <p className="experience-date">{t("founder.eurocontact_date")}</p>
                <ul>
                  <li>
                    {t("founder.eurocontact_item1_part1")} <strong>{t("founder.eurocontact_item1_strong")}</strong>
                    {t("founder.eurocontact_item1_part2")}
                  </li>
                  <li>
                    {t("founder.eurocontact_item2_part1")} <strong>{t("founder.eurocontact_item2_strong")}</strong>
                    {t("founder.eurocontact_item2_part2")}
                  </li>
                  <li>
                    {t("founder.eurocontact_item3_part1")} <strong>{t("founder.eurocontact_item3_strong")}</strong>
                    {t("founder.eurocontact_item3_part2")}
                  </li>
                </ul>
              </div>

              <div className="experience-item">
                <h3>{t("founder.harvard_sussex_title")}</h3>
                <p className="experience-date">{t("founder.harvard_sussex_date")}</p>
                <ul>
                  <li>
                    {t("founder.harvard_sussex_item1_part1")}{" "}
                    <strong>{t("founder.harvard_sussex_item1_strong")}</strong>
                    {t("founder.harvard_sussex_item1_part2")}
                  </li>
                  <li>
                    {t("founder.harvard_sussex_item2_part1")}{" "}
                    <strong>{t("founder.harvard_sussex_item2_strong")}</strong>
                    {t("founder.harvard_sussex_item2_part2")}
                  </li>
                </ul>
              </div>
            </section>

            <section className="founder-section">
              <h2>{t("founder.recent_initiatives_title")}</h2>
              <ul>
                <li>
                  {t("founder.recent_initiatives_item1_part1")}{" "}
                  <strong>{t("founder.recent_initiatives_item1_strong")}</strong>
                  {t("founder.recent_initiatives_item1_part2")}
                </li>
                <li>
                  {t("founder.recent_initiatives_item2_part1")}{" "}
                  <a
                    href="https://www.seratera.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="external-link"
                  >
                    Seratera.com
                  </a>{" "}
                  {t("founder.recent_initiatives_item2_part2")}
                </li>
                <li>
                  {t("founder.recent_initiatives_item3_part1")}{" "}
                  <strong>{t("founder.recent_initiatives_item3_strong")}</strong>
                  {t("founder.recent_initiatives_item3_part2")}
                </li>
                <li>
                  {t("founder.recent_initiatives_item4_part1")}{" "}
                  <strong>{t("founder.recent_initiatives_item4_strong")}</strong>
                  {t("founder.recent_initiatives_item4_part2")}
                </li>
              </ul>
            </section>

            <section className="founder-section">
              <h2>{t("founder.publications_title")}</h2>

              <h3>{t("founder.disarmament_publications_title")}</h3>
              <ul className="publications-list">
                <li>
                  <strong>{t("founder.publication1_title")}</strong>
                  {t("founder.publication1_text")}
                </li>
                <li>
                  <strong>{t("founder.publication2_title")}</strong>
                  {t("founder.publication2_text")}
                </li>
                <li>
                  <strong>{t("founder.publication3_title")}</strong>
                  {t("founder.publication3_text")}
                </li>
                <li>
                  <strong>{t("founder.publication4_title")}</strong> {t("founder.publication4_text")}
                </li>
                <li>
                  <strong>{t("founder.publication5_title")}</strong>
                  {t("founder.publication5_text")}
                </li>
              </ul>
            </section>

            <section className="founder-section">
              <h2>{t("founder.presentations_title")}</h2>
              <ul>
                <li>
                  <strong>{t("founder.presentation1_title")}</strong>
                  {t("founder.presentation1_text")}
                </li>
                <li>
                  <strong>{t("founder.presentation2_title")}</strong>
                  {t("founder.presentation2_text")}
                </li>
                <li>
                  <strong>{t("founder.presentation3_title")}</strong>
                  {t("founder.presentation3_text")}
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default Founder
