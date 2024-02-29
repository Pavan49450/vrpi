import { Outlet, useLocation } from "react-router-dom";
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

const hideHeaderRoutes = ["/login", "/signup"];

const buttons = [{ name: "Login", link: "/login", active: false }];

const RootLayout = () => {
  const location = useLocation();
  const isHeaderHidden = hideHeaderRoutes.includes(location.pathname);

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
      {!isHeaderHidden && (
        <Header
          links={headerLinks}
          buttons={buttons}
          dropdownLinks={dropdownLinks}
          JoinUsBarData={JoinUsBarData}
        />
      )}
      <main className={style.main}>
        <Outlet />
      </main>
      {!isHeaderHidden && <JoinUs />}

      {!isHeaderHidden && (
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
