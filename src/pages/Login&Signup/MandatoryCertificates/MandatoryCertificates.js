import SignUpOrLoginContainer from "../../../components/SignUpOrLoginContainer/SignUpOrLoginConatainer";
import MandatoryCertificatesForm from "../../../components/Signup/MandatoryCertificatesForm/MandatoryCertificatesForm";

const MandatoryCertificates = () => {
  const welcomePageScreenData = {
    title: "Mandatory Certificate",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
    image: "personalDetailsPageImage.svg",
  };

  return (
    <div style={{ display: "flex" }}>
      <SignUpOrLoginContainer screenData={welcomePageScreenData}>
        <MandatoryCertificatesForm />
      </SignUpOrLoginContainer>
    </div>
  );
};

export default MandatoryCertificates;
