import { useEffect } from "react";
import Background2 from "../../../UI/background/Background2";
import Content from "../../../components/Companies/Construction/Content";

const Construction = () => {
  useEffect(() => {
    document.title = "VRPI Group Of Companies - Construction";
  }, []);
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <Background2 />
      {/* <Header /> */}
      <Content />
    </div>
  );
};

export default Construction;
