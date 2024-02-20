import CustomKnowledgeHubComponent from "../../components/KnowledgeHub/CustomKnowledgeHubComponent";
import { InternshipsData } from "../../data/InternshipsData";

export default function Internships() {
  return (
    <CustomKnowledgeHubComponent
      data={InternshipsData}
      backgroundImage="intershipPageBackground.jpg"
    />
  );
}
