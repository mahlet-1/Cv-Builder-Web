import "../styles/CvSummary.css";
export default function CvSummary({ summary }) {
  if (!summary) return null;

  return (
    <div className="cv-summary">
      <h2 className="cv-section-title">Professional Summary</h2>
      <p className="cv-summary-text">{summary}</p>
    </div>
  );
}
