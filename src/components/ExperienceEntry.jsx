import '../styles/ExperienceForm.css';
export default function ExperienceEntry({ experience, updateExperience, removeExperience }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        updateExperience(experience.id, name, value);
    };

    return (
        <div className="entry-card">
            <label className="form-label" htmlFor={`company-${experience.id}`}>
                Company:
            </label>
            <input
                type="text"
                id={`company-${experience.id}`}
                name="company"
                placeholder="Enter the company name"
                value={experience.company}
                onChange={handleChange}
                className="form-input"
            />
            <label className="form-label" htmlFor={`position-${experience.id}`}>
                Position:
            </label>
            <input
                type="text"
                id={`position-${experience.id}`}        
                name="position"
                placeholder="Enter your position"
                value={experience.position}
                onChange={handleChange}
                className="form-input"
            />
            <div className="form-row">
                <div className="form-group">
                    <label className="form-label" htmlFor={`from-${experience.id}`}>        
                        From:
                    </label>
                    <input
                        type="date"
                        id={`from-${experience.id}`}
                        name="from"
                        value={experience.from}
                        onChange={handleChange}
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor={`to-${experience.id}`}>
                        To:
                    </label>
                    <input
                        type="date"
                        id={`to-${experience.id}`}
                        name="to"
                        value={experience.to}
                        onChange={handleChange}
                        className="form-input"
                    />

                    <label className="form-label" htmlFor={`description-${experience.id}`}>
                        Experience Description:
                    </label>
                    <input
                        type="text"
                        id= {`description-${experience.id}`}
                        name="description"
                        value={experience.description}
                        onChange={handleChange}
                        className="form-input"
                    
                    />

                    </div>

                    <button
                        type="button"
                        className="btn-delete"
                        onClick={() => removeExperience(experience.id)}
                    >
                        Remove Experience
                    </button>
            </div>
        </div>
    );
}