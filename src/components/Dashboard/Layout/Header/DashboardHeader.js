import { NavLink } from "react-router-dom";
import Logo from "../../../Logo/Logo";
import style from "./DashboardHeader.module.css";

const DashboardHeader = () => {
  const DashboardLinks = [
    {
      title: "My Dashboard",
      link: "/dashboard",
      iconActive: "myDashboard-w.png",
      iconInActive: "edutechIcon.png",
    },
    {
      title: "Edu-Tech Courses",
      link: "/dashboard/courses",
      iconActive: "edutechIcon.png",
      iconInActive: "edutechIcon.png",
    },
    {
      title: "Internship",
      link: "/dashboard/internships",
      icon: "internshipIcon.png",
    },
    {
      title: "Settings",
      link: "/dashboard/settings",
      icon: "settingsIcon.png",
    },
    { title: "Logout", link: false, icon: "logoutIcon.png", action: () => {} },
    {
      title: "Help & Support",
      link: "/dashboard/helpAndSupport",
      icon: "supportIcon.png",
    },
  ];

  return (
    <header className={style.Header}>
      <Logo />
      <nav className={style.navbar}>
        <ul className={style.nav}>
          {DashboardLinks.map((link) => (
            <li key={link.title}>
              {link ? (
                <NavLink to={link.link} className={style.navLink}>
                  <img
                    src={require(`../../../../assets/dashboard/${link.icon}`)}
                    alt=""
                  />
                  <span>{link.title}</span>
                </NavLink>
              ) : (
                <button onClick={link.action}>
                  {" "}
                  <img
                    src={require(`../../../../assets/dashboard/${link.icon}`)}
                    alt=""
                  />
                  <span>{link.title}</span>
                </button>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default DashboardHeader;
