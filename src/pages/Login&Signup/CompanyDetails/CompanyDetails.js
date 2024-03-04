import SignUpOrLoginContainer from "../../../components/SignUpOrLoginContainer/SignUpOrLoginConatainer";

const CompanyDetailsScreenData = {
  title: "Educational Details",
  description:
    "We need these details to validate the candidate for our Knowledge Hub Programs",
  image: "companyDetailsImage.svg",
};
const CompanyDetails = () => {
  return (
    <SignUpOrLoginContainer
      screenData={CompanyDetailsScreenData}
    ></SignUpOrLoginContainer>
  );
};

export default CompanyDetails;
