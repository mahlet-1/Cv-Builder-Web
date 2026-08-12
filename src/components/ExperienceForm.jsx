import "../styles/ExperienceForm.css";
import ExperienceEntry from './ExperienceEntry';
export default function ExperienceForm({ experience, addExperience, updateExperience, removeExperience }) {
    return (
        <div className="form-card">
            <h2>WorkExperience</h2>
            <div className="form-container">
                {experience.map((experience) => (
                    <ExperienceEntry
                        key={experience.id}
                        experience={experience}
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
