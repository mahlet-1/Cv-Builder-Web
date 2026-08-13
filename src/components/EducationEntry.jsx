import '../styles/EducationForm.css';
export default function EducationEntry({ education, updateEducation, removeEducation }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateEducation(education.id, name, value);
  };

  return (
    <div className="entry-card">
      <div className="form-group">
        <label className="form-label" htmlFor={`school-${education.id}`}> School: </label>
        <input
          type="text"
          id={`school-${education.id}`}
          name="school"
          placeholder="Enter your school name"
          value={education.school}
          onChange={handleChange}
          className="form-input"
        />
      </div>

        <label className="form-label" htmlFor={`degree-${education.id}`}> Degree:</label>
        <input
          type="text"
          id={`degree-${education.id}`}
          name="degree"
          placeholder="Enter your degree"
          value={education.degree}
          onChange={handleChange}
          className="form-input"
        />
        
        <label className="form-label" htmlFor={`field-${education.id}`}>
          Field of Study:
        </label>
        <input
          type="text"
          id={`field-${education.id}`}
          name="field"
          placeholder="Enter your field of study"
          value={education.field}
          onChange={handleChange}
          className="form-input"
        />

        <div className="form-group">
          <label className="form-label" htmlFor={`from-${education.id}`}>
            From:
          </label>
          <input
            type="date"
            id={`from-${education.id}`}
            name="from"
            value={education.from}
            onChange={handleChange}
            className="form-input"
          />

          <label className="form-label" htmlFor={`to-${education.id}`}>
            To:
          </label>
          <input
            type="date"
            id={`to-${education.id}`}
            name="to"
            value={education.to}
            onChange={handleChange}
            className="form-input"
          />
      </div>

      <button type="button" onClick={() => removeEducation(education.id)} className="btn-delete" >
        Remove Education
      </button>
    </div>
  );
}