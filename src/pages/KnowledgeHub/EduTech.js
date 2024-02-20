import CustomKnowledgeHubComponent from "../../components/KnowledgeHub/CustomKnowledgeHubComponent";
import { EduTechData } from "../../data/EduTechData";
export default function EduTech() {
  return (
    <CustomKnowledgeHubComponent
      data={EduTechData}
      backgroundImage="edutechPageBackground.jpeg"
    />
  );
}
