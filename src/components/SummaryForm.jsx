import '../styles/SummaryForm.css';
export default function SummaryForm({ summary, updateSummary }) {
    const handleChange = (e) => {
        const { value } = e.target;
        updateSummary(value);
    };

  return (
    <div className="form-card">
      <h2>Professional Summary</h2>
      <div className="form-group">
        <label className="form-label" htmlFor="summary">
          Summary:
        </label>
        <textarea
          id="summary"
          name="summary"
          rows="6"
          placeholder="Enter a brief professional summary"
          value={summary}
          onChange={handleChange}
          className="form-input"
        />
      </div>
    </div>
  );
}
