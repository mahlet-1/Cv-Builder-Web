import "../styles/CvExperience.css";
export default function CvExperience({ experience }) {
  if (!experience || experience.length === 0) return null;

  return (
    <div className="cv-experience">
        <h2 className="cv-section-title">Work Experience</h2>
      
      <div className="cv-experience-entries">
        {experience.map((experience) => (
          <div key={experience.id} className="cv-experience-entry">
            <div className="cv-experience-list">
              {experience.company}{experience.from || experience.to ? ` | ${experience.from || ""} --- ${experience.to || ""}` : ""}
            </div>
            <div className="cv-experience-position">
              {experience.position}
            </div>
            <ul>
                <li>
                    {experience.description && (
                    <p className="cv-experience-description">
                    {experience.description} </p>
                    )}
                  </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
