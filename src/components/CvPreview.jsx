import CvHeader from "./CvHeader";
import CvEducation from "./CvEducation";
import CvExperience from "./CvExperience";
import CvSkills from "./CvSkills";
import CvSummary from "./CvSummary";

export default function CvPreview({ data }) {
  return (
    <div className="cv-preview">
      <CvHeader Personal={data.personal} />
      <CvSummary summary={data.summary} />
      <CvEducation education={data.education} />
      <CvExperience experience={data.experience} />
      <CvSkills skills={data.skills} />
    </div>
  );
}

