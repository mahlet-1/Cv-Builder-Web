import "../styles/FormPanel.css";
import PersonalForm from "./PersonalForm";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import SkillsForm from "./SkillsForm";
import SummaryForm from "./SummaryForm";

export default function FormPanel({ 
  personal,  
  updatePersonal,
  summary,
  updateSummary,
  education, 
  addEducation, 
  updateEducation, 
  removeEducation,
  experience, 
  addExperience,
  updateExperience,
  removeExperience,
  skills,
  addSkill,
  removeSkill
}) 
{
  return (
    <div className="form-panel-container">
      
      <PersonalForm 
        Personal={personal} 
        updatePersonal={updatePersonal} 
      />

      <SummaryForm 
        summary={summary} 
        updateSummary={updateSummary} 
      />
      
      <EducationForm 
        education={education}
        addEducation={addEducation}
        updateEducation={updateEducation}
        removeEducation={removeEducation}
      />

      <ExperienceForm 
        experience={experience}
        addExperience={addExperience}
        updateExperience={updateExperience}
        removeExperience={removeExperience}
      />

      <SkillsForm 
        skills={skills}
        addSkill={addSkill}
        removeSkill={removeSkill}
      />

    </div>
  );
}
