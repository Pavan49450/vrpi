import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../../Logo/Logo";
import style from "./DashboardHeader.module.css";

const DashboardHeader = () => {
  const navigate = useNavigate();
  const DashboardLinks = [
    {
      title: "My Dashboard",
      link: "/dashboard/myDashboard",
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
    {
      title: "Logout",
      link: false,
      iconActive: "logout-p.png",
      iconInActive: "logout-w.png",
      action: () => {
        navigate("/login");
      },
    },
    {
      title: "Help & Support",
      link: "/dashboard/helpAndSupport",
      iconActive: "support-p.png",
      iconInActive: "support-w.png",
    },
  ];

  const { pathname } = useLocation();

  return (
    <header className={style.Header}>
      <Logo className={style.logo} />
      <nav className={style.navbar}>
        <ul className={style.nav}>
          {DashboardLinks.map((link) => (
            <li key={link.title} className={style.link}>
              {console.log(link)}
              {link.link ? (
                <NavLink
                  to={link.link}
                  className={({ isActive }) =>
                    isActive
                      ? `${style.active} ${style.navLink}`
                      : style.navLink
                  }
                  exact
                >
                  <LinksContents link={link} pathname={pathname} />
                </NavLink>
              ) : (
                <button
                  onClick={link.action}
                  className={`${style.navLink} ${style.logoutBtn}`}
                >
                  <LinksContents link={link} />
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

const LinksContents = ({ link, pathname }) => {
  return (
    <>
      {pathname === link.link ? (
        <img
          src={require(`../../../../assets/dashboard/${link.iconActive}`)}
          alt=""
        />
      ) : (
        <img
          src={require(`../../../../assets/dashboard/${link.iconInActive}`)}
          alt=""
        />
      )}
      <span className={style.linkTitle}>{link.title}</span>
    </>
  );
};
