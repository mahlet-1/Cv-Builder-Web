import EducationEntry from "./EducationEntry";
export default function EducationForm({ education, updateEducation, addEducation, removeEducation }) {
    return (
        <div className="form-card">
            <h2>Education</h2>
            <div className="form-container">
                {education.map((edu) => (
                    <EducationEntry
                        key={edu.id}
                        education={edu}
                        updateEducation={updateEducation}
                        removeEducation={removeEducation}
                    />
                ))}

                <button type="button" onClick={addEducation} className="btn-add">
                    Add Education
                </button>
            </div>
        </div>
    );
}