import "./OurTeam.css"

function OurTeam() {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Mitslal Kifleyesus",
      title: "Founder",
      description:
        "Our founder is a pioneering leader in organic certification and sustainable agri-tech, having spearheaded Ethiopia's first organic certification framework and implemented digital ICS solutions for over 11,000 smallholder farmers. With a PhD in international verification regimes and a background in disarmament and strategic leadership, they bring a rare blend of technical expertise and visionary policy advocacy to transform East Africa's agricultural landscape.",
      image: "/images/MKM.png", // Placeholder - replace with actual image later
    },
    {
      id: 2,
      name: "Dr. Frederike Kramer",
      title: "Chief Auditor",
      description:
        "With a PHD in Biochemistry, as well as more than 6 years of experience as a forensic auditor, she is our auditor ensuring compliance with EU standards.",
      image: "/images/auditor.png", // Placeholder - replace with actual image later
    },
    {
      id: 3,
      name: "Yonas Alemu",
      title: "COO",
      description:
        "Our COO for Certification is a seasoned executive with over 20 years of leadership experience in both the public and private sectors in Ethiopia. His work at Dashen and Habesha Beer stands out, bringing vital expertise in downstream feedstock value chain management and a deep understanding of industrial-scale fermentation — critical for ensuring quality and compliance in certified agri-processing.",
      image: "/images/yonas.png", // Placeholder - replace with actual image later
    },
    {
      id: 4,
      name: "Tekalgin Werdofa",
      title: "Chief Inspector",
      description:
        "An experienced PHD researcher and former COO at Chilalo Food Complex as well as an IOM certified inspector, Mr. Werdofa leads on the ground inspections.",
      image: "/images/tek.png", // Placeholder - replace with actual image later
    },
  ]

  return (
    <div className="team-container">
      <div className="team-header">
        <h1>Our Team</h1>
        <div className="team-divider"></div>
        <p className="team-intro">
          Meet the experts behind EcoCertification. Our team brings together decades of experience in organic
          certification, sustainable agriculture, and quality assurance to provide you with the highest level of service
          and expertise.
        </p>
      </div>

      <div className="team-members">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-member">
            <div className="member-image-container">
              <img src={member.image || "/placeholder.svg"} alt={member.name} className="member-image" />
            </div>
            <h2 className="member-name">{member.name}</h2>
            <h3 className="member-title">{member.title}</h3>
            <p className="member-description">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurTeam
