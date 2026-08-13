import ExperienceEntry from './ExperienceEntry';
export default function ExperienceForm({ experience, addExperience, updateExperience, removeExperience }) {
    return (
        <div className="form-card">
            <h2>Work Experience</h2>
            <div className="form-container">
                {experience.map((exp) => (
                    <ExperienceEntry
                        key={exp.id}
                        experience={exp}
                        updateExperience={updateExperience}
                        removeExperience={removeExperience}
                    />
                ))}

                <button type="button" onClick={addExperience} className="btn-add">
                    Add Experience
                </button>
            </div>
        </div>
    );
}
