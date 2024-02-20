import { useEffect, useState } from "react";
import Section from "../../../UI/Sections/Section";
import style from "./OurCompanies.module.css";
import { Companies } from "../../../data/CompaniesData";
import CirclarText from "../../../UI/CircularText/CircularText";
import { useNavigate } from "react-router-dom";
import Button from "../../../UI/Button/Button";
const OurCompanies = () => {
  const [selectedCompany, setSelectedCompany] = useState(Companies[0]);

  const handleCompanyClick = (index) => {
    setSelectedCompany(Companies[index]);
  };

  return (
    <div>
      <Section title="Our Companies">
        <div>
          <p className={style.campanyiesDecription}>
            "Our coalition of companies represents a diverse spectrum of
            expertise, each dedicated to excellence in their respective fields.
            With a shared commitment to innovation, quality, and clients
            satisfaction, we collectively strive to elevate industry standards,
            drive progress, and make a positive impact on the world."
          </p>
          <div
            className={style.companies}
            style={{ backgroundColor: selectedCompany.backgroundColor }}
          >
            <Company
              company={selectedCompany}
              handleCompanyClick={handleCompanyClick}
            />
          </div>
        </div>
      </Section>
    </div>
  );
};

const Company = ({ company, handleCompanyClick }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 700;

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const naviagte = useNavigate();
  return (
    <div className={style.company}>
      <div className={style.companyHeading}>
        <h2>{company.title}</h2>
        <Button onClick={() => naviagte(company.link)}>Explore more</Button>
      </div>
      <p>{company.content}</p>
      <div className={style.belowContent}>
        <div className={style.companyImages}>
          {Companies.map((companyForImage, index) => (
            <img
              key={index}
              src={require(`../../../assets/companies/${companyForImage.image}`)}
              alt={companyForImage.title}
              // onClick={() => handleCompanyClick(index)}
              onMouseEnter={() => handleCompanyClick(index)}
              style={{
                width: company.title === companyForImage.title ? "30%" : "10%",
              }}
              className={style.companyImage}
            />
          ))}
        </div>
        {width > breakpoint && (
          <CirclarText
            text="VR pi group of Companies "
            width="250px"
          ></CirclarText>
        )}
      </div>
    </div>
  );
};

export default OurCompanies;
