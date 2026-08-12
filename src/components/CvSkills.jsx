import "../styles/CvSkill.css";
export default function CvSkills({ skills }) {
  if (!skills || skills.length === 0) return null;

  return (
    <div className="cv-skills">
        <h2 className="cv-section-title">Key Skills</h2>
      <ul className="cv-skills-grid">
        {skills.map((skill) => (
          <li key={skill} className="cv-skill-list">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
