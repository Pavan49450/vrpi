import SignUpOrLoginContainer from "../../../components/SignUpOrLoginContainer/SignUpOrLoginConatainer";
import CompanyDetailsComponent from "../../../components/Signup/CompanyDetailsComponent/CompanyDetailsComponent";
const CompanyDetailsScreenData = {
  title: "Educational Details",
  description:
    "We need these details to validate the candidate for our Knowledge Hub Programs",
  image: "companyDetailsImage.svg",
};
const CompanyDetails = () => {
  return (
    <SignUpOrLoginContainer screenData={CompanyDetailsScreenData}>
      <CompanyDetailsComponent />
    </SignUpOrLoginContainer>
  );
};

export default CompanyDetails;
