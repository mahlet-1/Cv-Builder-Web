import { useState } from "react";
import FormPanel from "./components/FormPanel";
import CvPreview from "./components/CvPreview";

const sampleData = {
  personal: {
    name: "Abebe Kebede",
    profession: "Front-end developer",
    email: "abebe.kebede@example.com",
    phone: "+251 90985 1357",
    location: "Addis Ababa, Ethiopia",
    linkedin: "://linkedin.com",
    github: "://github.com"
  },

  summary: 
    "I am a passionate frontend developer with foundation in React and modern web technologies. My goal is to continuously improve my skills and contribute to innovative projects.",
  
  education: [
    {
      id: Date.now(),
      school: "Addis Ababa University",
      degree: "Bachelor of Science",
      field: "Computer Science",
      from: "2022-09-15",
      to: "2026-07-10"
    }
  ],
  experience: [
    {
      id: Date.now(),
      company: "Nexus Tutorial",
      position: "Frontend Developer Intern",
      from: "2025-01-05",
      to: "2026-06-30",
      description: "Built responsive websites using modern React states."
    }
  ],
  skills: ["React", "JavaScript", "CSS", "Git"]
};

const emptyData = {
  personal: { name: "", profession: "" , email: "", phone: "", location: "", linkedin: "", github: ""},
  summary: "",
  education: [],
  experience: [],
  skills: []
};

export default function App() {
  const [cvData, setCvData] = useState(sampleData);
  const [isEditMode, setIsEditMode] = useState(true);

  const updatePersonalField = (name, value) => {
    setCvData((prev) => ({
      ...prev,
      personal: { ...prev.personal, [name]: value }
    }));
  };

  const updateSummary = (value) => {
    setCvData((prev) => ({
      ...prev,
      summary: value
    }));
  };

  const addEducation = () => {
    const newEdu = { id: Date.now(), school: "", degree: "", field: "", from: "", to: "" };
    setCvData((prev) => ({ ...prev, education: [...prev.education, newEdu] }));
  };

  const updateEducation = (id, name, value) => {
    setCvData((prev) => ({
      ...prev,
      education: prev.education.map((item) =>
        item.id === id ? { ...item, [name]: value } : item
      )
    }));
  };

  const removeEducation = (id) => {
    setCvData((prev) => ({
      ...prev,
      education: prev.education.filter((item) => item.id !== id)
    }));
  };

  const addExperience = () => {
    const newExp = { id: Date.now(), company: "", position: "", from: "", to: "", description: "" };
    setCvData((prev) => ({ ...prev, experience: [...prev.experience, newExp] }));
  };

  const updateExperience = (id, name, value) => {
    setCvData((prev) => ({
      ...prev,
      experience: prev.experience.map((item) =>
        item.id === id ? { ...item, [name]: value } : item )
    }));
  };

  const removeExperience = (id) => {
    setCvData((prev) => ({
      ...prev,
      experience: prev.experience.filter((item) => item.id !== id)
    }));
  };

  const addSkillTag = (skillName) => {
    if (!skillName.trim() || cvData.skills.includes(skillName)) return;
    setCvData((prev) => ({ ...prev, skills: [...prev.skills, skillName] }));
  };

  const removeSkillTag = (skillName) => {
    setCvData((prev) => ({ ...prev, skills: prev.skills.filter((s) => s !== skillName) }));
  };

  return (
    <div className="app-container">
      
      <div className="top-bar">
        <button onClick={() => setIsEditMode(!isEditMode)}>
          {isEditMode ? "View Full CV Preview" : "Back to Edit Mode"}
        </button>
        <button onClick={() => setCvData(sampleData)}>Load Example Data</button>
        <button onClick={() => setCvData(emptyData)}>Clear All Fields</button>
      </div>

      <div className="main-content">
        {isEditMode && (
          <div className="editor-side">
            <FormPanel
              personal={cvData.personal}
              updatePersonal={updatePersonalField}
              summary={cvData.summary}
              updateSummary={updateSummary}
              education={cvData.education}
              addEducation={addEducation}
              updateEducation={updateEducation}
              removeEducation={removeEducation}
              experience={cvData.experience}
              addExperience={addExperience}
              updateExperience={updateExperience}
              removeExperience={removeExperience}
              skills={cvData.skills}
              addSkill={addSkillTag}
              removeSkill={removeSkillTag}
            />
          </div>
        )}
        
        <div className={`preview-side ${!isEditMode ? "full-view" : ""}`}>
          <CvPreview data={cvData} />
        </div>
      </div>

    </div>
  );
}
