import "./HomeAboutSection.css"
import { useTranslation } from 'react-i18next';

function HomeAboutSection() {
const { t } = useTranslation();

  return (
    <section className="about-section design-two">
      <div className="organic-shape top-shape"></div>

      <div className="about-container">
        <div className="about-intro-centered">
          <p>
             {t('roots_intro')}
          </p>
        </div>

        <div className="timeline-container">
          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-icon">
                <i className="fas fa-seedling"></i>
              </div>
         <h3>{t('roots_title')}</h3>
              <p>
  {t('roots_paragraph1_part1')}
  <span className="emphasis">{t('roots_paragraph1_emphasis1')}</span>
  {t('roots_paragraph1_part2')}
  <span className="emphasis">{t('roots_paragraph1_emphasis2')}</span>
  {t('roots_paragraph1_part3')}
</p>
            </div>
            <div className="timeline-image">
              <div className="image-grid">
                <div className="image-item">
                  <img src="/images/coffee.webp" alt="coffee" className="small-image" loading="lazy"/>
                </div>
                <div className="image-item">
                  <img src="/images/crops.webp" alt="crops" className="small-image" loading="lazy" />
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-item reverse">
            <div className="timeline-content">
              <div className="timeline-icon">
                <i className="fas fa-award"></i>
              </div>
             <h3>{t('track_title')}</h3>
<p>
  {t('track_intro_part1')}
  <a
    href="http://www.eljojofe.org/index.php?p=1&lang=EN#home-section"
    target="_blank"
    rel="noopener noreferrer"
    className="emphasis-link"
  >
    <span className="emphasis">{t('track_link_text')}</span>
  </a>
  {t('track_intro_part2')}
</p>
              <ul className="eco-list">
                <li>
  {t('track_list_item1_part1')}
  <span className="emphasis">{t('track_list_item1_emphasis')}</span>
  {t('track_list_item1_part2')}
</li>
<li>
  {t('track_list_item2_part1')}
  <span className="emphasis">{t('track_list_item2_emphasis')}</span>
  {t('track_list_item2_part2')}
</li>
              </ul>
            </div>
            <div className="timeline-image">
              <div className="image-placeholder">
                <img src="/images/farmers.webp" alt="farmers" className="small-image" loading="lazy" />
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-icon">
                <i className="fas fa-store"></i>
              </div>
              <h3>{t('market_title')}</h3>
<p>{t('market_intro')}</p>
<ul className="eco-list">
  <li>
    {t('market_list1_part1')}
    <span className="emphasis">{t('market_list1_emphasis')}</span>
    {t('market_list1_part2')}
    <a
      href="http://www.de.ecopia.de/"
      target="_blank"
      rel="noopener noreferrer"
      className="emphasis-link"
    >
      <span className="emphasis">{t('market_list1_link_text')}</span>
    </a>
    {t('market_list1_part3')}
  </li>
  <li>{t('market_list2')}</li>
</ul>
            </div>
            <div className="timeline-image">
              <div className="image-grid">
                <div className="image-item">
                  <img src="/images/market.webp" alt="market" className="small-image" loading="lazy" />
                </div>
                <div className="image-item">
                  <img src="/images/soap.webp" alt="soap" className="small-image" loading="lazy"/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mission-banner">
          <div className="mission-icon">
            <i className="fas fa-compass"></i>
          </div>
          <h3>{t('mission_title')}</h3>
<p>
  {t('mission_part1')}
  <span className="emphasis">{t('mission_emphasis1')}</span>
  {t('mission_part2')}
  <span className="emphasis">{t('mission_emphasis2')}</span>
  {t('mission_part3')}
</p>
        </div>
      </div>

      <div className="organic-shape bottom-shape"></div>
    </section>
  )
}

export default HomeAboutSection
