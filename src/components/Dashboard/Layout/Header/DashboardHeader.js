import { NavLink } from "react-router-dom";
import Logo from "../../../Logo/Logo";
import style from "./DashboardHeader.module.css";

const DashboardHeader = () => {
  const DashboardLinks = [
    {
      title: "My Dashboard",
      link: "/dashboard",
      iconActive: "myDashboard-p.png",
      iconInActive: "myDashboard-w.png",
    },
    {
      title: "Edu-Tech Courses",
      link: "/dashboard/courses",
      iconActive: "edutech-p.png",
      iconInActive: "edutech-w.png",
    },
    {
      title: "Internship",
      link: "/dashboard/internships",
      iconActive: "internship-p.png",
      iconInActive: "internship-w.png",
    },
    {
      title: "Settings",
      link: "/dashboard/settings",
      iconActive: "settings-p.png",
      iconInActive: "settings-w.png",
    },
    { title: "Logout", link: false, icon: "logoutIcon.png", action: () => {} },
    {
      title: "Help & Support",
      link: "/dashboard/helpAndSupport",
      iconActive: "support-p.png",
      iconInActive: "support-w.png",
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
                    src={require(`../../../../assets/dashboard/${link.iconActive}`)}
                    alt=""
                  />
                  <span>{link.title}</span>
                </NavLink>
              ) : (
                <button onClick={link.action}>
                  {" "}
                  <img
                    src={require(`../../../../assets/dashboard/${link.iconActive}`)}
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
