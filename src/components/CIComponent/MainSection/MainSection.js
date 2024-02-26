import style from "./MainSection.module.css";
const MainSection = ({ content }) => {
  return (
    <div className={style.container}>
      <img src={require(`../../../assets/courses/${content.image}`)} alt="" />
    </div>
  );
};

export default MainSection;
