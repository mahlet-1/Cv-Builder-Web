import "../styles/CvHeader.css";
export default function CvHeader({ Personal }) {
  if (!Personal) return null;

  return (
    <div className="cv-header">
      {Personal.name && <h1 className="cv-name">{Personal.name}</h1>}
      <div className="cv-subhead"> 
        {Personal.profession && <h3>{Personal.profession}</h3> } </div>
      
      <div className="cv-contact">
        {Personal.email && <span className="cv-contact-item"> | {Personal.email}</span>}
        {Personal.phone && <span className="cv-contact-item"> | {Personal.phone}</span>}
        {Personal.location && <span className="cv-contact-item"> | {Personal.location}</span>}
        {Personal.linkedin && <span className="cv-contact-item"> | {Personal.linkedin}</span>}
        {Personal.github && <span className="cv-contact-item"> | {Personal.github}</span>}
      </div>
    </div>
  );
}

