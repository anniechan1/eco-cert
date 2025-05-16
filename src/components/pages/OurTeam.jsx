import "./OurTeam.css"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom";

function OurTeam() {
  const { t } = useTranslation()

  const teamMembers = [
    {
      id: 1,
      name: "Dr. Mitslal Kifleyesus",
      title: t("team_founder"),
      description: t("team_founder_desc"),
      image: "/images/MKM.png",
      path: "/founder"
    },
    {
      id: 2,
      name: "Dr. Frederike Kramer",
      title: t("team_auditor"),
      description: t("team_auditor_desc"),
      image: "/images/auditor.png",
      
    },
    {
      id: 3,
      name: "Yonas Alemu",
      title: t("team_coo"),
      description: t("team_coo_desc"),
      image: "/images/yonas.png",
    
    },
    {
      id: 4,
      name: "Tekalgin Werdofa",
      title: t("team_inspector"),
      description: t("team_inspector_desc"),
      image: "/images/tek.png",
     
    },
  ]

  return (
    <div className="team-container">
      <div className="team-header">
        <h1>{t("team_title")}</h1>
        <div className="team-divider"></div>
        <p className="team-intro">{t("team_intro")}</p>
      </div>

      <div className="team-members">
        {teamMembers.map((member) => (
          <Link 
            to={member.path} 
            key={member.id} 
            className="team-member-link"
          >
            <div className="team-member">
              <div className="member-image-container">
                <img src={member.image || "/placeholder.svg"} alt={member.name} className="member-image" />
              </div>
              <h2 className="member-name">{member.name}</h2>
              <h3 className="member-title">{member.title}</h3>
              <p className="member-description">{member.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default OurTeam