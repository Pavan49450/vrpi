import { Outlet, useLocation, useParams } from "react-router-dom";
import Header from "../components/Layout/Header/Header";
import style from "./Root.module.css";
import {
  MainHeaderLinks,
  MainDropdownLinks,
  JoinUsBarData,
  KnowledgeHubHeaderLinks,
  footerLinks,
  quickLinks,
  ContactUs,
} from "../data/NavData";
import Footer from "../components/Layout/Footer/Footer";
import JoinUs from "../components/JoinUs/JoinUs";
import ComingSoon from "../UI/ComingSoon/ComingSoon";

const hideHeaderRoutes = [
  "/login",
  "/signup",
  "/educationaldetails",
  "/educationalDetails,",
  "/companyDetails",
  "/companydetails",
];

const buttons = [{ name: "Login", link: "/login", active: true }];

const RootLayout = () => {
  const location = useLocation();
  const { email, otp } = useParams();

  const isHeaderHidden = hideHeaderRoutes.includes(location.pathname);
  const shouldRenderHeader = email === undefined || otp === undefined;

  const headerLinks =
    location.pathname === "/edutech" || location.pathname === "/internships"
      ? KnowledgeHubHeaderLinks
      : MainHeaderLinks;

  const dropdownLinks =
    location.pathname === "/edutech" || location.pathname === "/internships"
      ? null
      : MainDropdownLinks;

  return (
    <div className={style.root}>
      <ComingSoon />

      {shouldRenderHeader && !isHeaderHidden && (
        <Header
          links={headerLinks}
          buttons={buttons}
          dropdownLinks={dropdownLinks}
          JoinUsBarData={JoinUsBarData}
        />
      )}
      <main
        className={`${style.main} ${isHeaderHidden && style.noMargin} ${
          !shouldRenderHeader && style.noMargin
        }`}
      >
        <Outlet />
      </main>
      {shouldRenderHeader && !isHeaderHidden && <JoinUs />}
      {shouldRenderHeader && !isHeaderHidden && (
        <Footer
          links={footerLinks}
          quickLinks={quickLinks}
          ContactUs={ContactUs}
          JoinUsBarData={JoinUsBarData}
        />
      )}
    </div>
  );
};

export default RootLayout;
