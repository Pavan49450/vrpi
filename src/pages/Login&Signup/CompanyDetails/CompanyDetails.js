import SignUpOrLoginContainer from "../../../components/SignUpOrLoginContainer/SignUpOrLoginConatainer";
import CompanyDetailsComponent from "../../../components/Signup/CompanyDetailsComponent/CompanyDetailsComponent";
const CompanyDetailsScreenData = {
  title: "Educational Details",
  description:
    "At moment we don’t have your Data to create your account. So lets just start to create your Account",
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
