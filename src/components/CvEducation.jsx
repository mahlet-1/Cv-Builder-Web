import "../styles/CvEducation.css";
export default function CvEducation({ education }) {
  if (education.length === 0) return null;

  return (
    <div className="cv-education">
        <h2 className="cv-section-title">Education</h2>
      
      <div className="cv-education-entries">
        {education.map((education) => (
          <div key={education.id} className="cv-education-entry">
            <div className="cv-education-list"> 
              {education.school} {education.from || education.to ? ` | ${education.from || ""} - ${education.to || ""}` : ""}
            </div>
            <div className="cv-education-degree">
              {education.degree}{education.field ? ` in ${education.field}` : ""}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
