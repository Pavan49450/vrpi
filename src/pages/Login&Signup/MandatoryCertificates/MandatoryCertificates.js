import { useDispatch, useSelector } from "react-redux";
import SignUpOrLoginContainer from "../../../components/SignUpOrLoginContainer/SignUpOrLoginConatainer";
import MandatoryCertificatesForm from "../../../components/Signup/MandatoryCertificatesForm/MandatoryCertificatesForm";
import { clearMessage } from "../../../store/MessageDisplay/MessageActions";
import Message from "../../../UI/Popup/Message";

const MandatoryCertificates = () => {
  const welcomePageScreenData = {
    title: "Mandatory Certificate",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
    image: "personalDetailsPageImage.svg",
  };

  const { message, type } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const handleErrorClose = () => {
    dispatch(clearMessage());
  };

  return (
    <div style={{ display: "flex" }}>
      {message && (
        <Message message={message} type={type} onClose={handleErrorClose} />
      )}
      <SignUpOrLoginContainer screenData={welcomePageScreenData}>
        <MandatoryCertificatesForm />
      </SignUpOrLoginContainer>
    </div>
  );
};

export default MandatoryCertificates;
