import "./History.css"
import { useTranslation } from "react-i18next"

function History() {
  const { t } = useTranslation()

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>{t("history_title")}</h1>
        <div className="leaf-divider">
          <span className="divider-line"></span>
          <i className="fas fa-leaf"></i>
          <span className="divider-line"></span>
        </div>
      </div>

      <div className="asymmetric-layout">
        <div className="top-left-image">
          <img src="/images/image.jpg" alt={t("history_image_alt")} className="history-image" />
        </div>

        <div className="content-text main-content">
          <p>{t("history_content")}</p>
        </div>
      </div>
    </div>
  )
}

export default History
