import {useState} from "react";
import "../styles/SkillForm.css";
export default function SkillsForm({ skills, addSkill, removeSkill}) {
    const [Skill, setSkill] = useState("");
    const handleAddSkill = () => {
        if (Skill.trim() !== "") {
            addSkill(Skill);
            setSkill("");
        }
    };
    return (
        <div className="form-card">
            <h2>Skills</h2> 
            <div className="form-container">
                <div className="skills-list">
                    <input
                        type="text"
                        placeholder="Enter a skill"
                        value={Skill}
                        onChange={(e) => setSkill(e.target.value)}
                        className="form-input"
                    />

                    <button type="button" onClick={handleAddSkill} className="btn-add">
                        Add Skill
                    </button>
                </div>
                <div className="skills-container">
                    {skills.map(skill => (
                        <span key={skill} className="skill-item">
                            {skill}
                            <button type="button" onClick={() => removeSkill(skill)} className="btn-remove">
                                Remove Skill
                            </button>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
