import { useEffect } from "react";
import SignUpOrLoginContainer from "../../../components/SignUpOrLoginContainer/SignUpOrLoginConatainer";
import EducationalDetailsComponent from "../../../components/Signup/EducationalDetails/EducationalDetailsComponent";

const EducationalScreenData = {
  title: "Educational Details",
  description:
    "We need these details to validate the candidate for our Knowledge Hub Programs",
  image: "educationDetailsImage.svg",
};
const EducationalDetails = () => {
  useEffect(() => {
    document.title = "Student Educational Details Form";
  }, []);

  return (
    <SignUpOrLoginContainer screenData={EducationalScreenData}>
      <EducationalDetailsComponent />
    </SignUpOrLoginContainer>
  );
};

export default EducationalDetails;
