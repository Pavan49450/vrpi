import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../../Logo/Logo";
import style from "./DashboardHeader.module.css";
import ConfirmationModal from "../../../../UI/ConfirmModel/ConfirmationModal";
import { useDispatch } from "react-redux";
import { logout } from "../../../../store/LoginStateActions";

const DashboardHeader = ({ showMenuBar, toggleMenuBar }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const dispatch = useDispatch();

  const handleLogout = () => {
    setLogoutModalOpen(true);
  };

  const handleLogoutConfirm = () => {
    dispatch(logout());
    navigate("/login");
  };

  const [logoutModalOpen, setLogoutModalOpen] = useState(false);

  const closeLogoutModal = () => {
    setLogoutModalOpen(false);
  };

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
    // {
    //   title: "Internship",
    //   link: "/dashboard/internships",
    //   iconActive: "internship-p.png",
    //   iconInActive: "internship-w.png",
    // },
    {
      title: "Purchase History",
      link: "/dashboard/purchaseHistory",
      iconActive: "purchaseHistory-p.png",
      iconInActive: "purchaseHistory-w.png",
    },
    // {
    //   title: "Settings",
    //   link: "/dashboard/settings",
    //   iconActive: "settings-p.png",
    //   iconInActive: "settings-w.png",
    // },
    {
      title: "Logout",
      link: false,
      iconActive: "logout-p.png",
      iconInActive: "logout-w.png",
      action: handleLogout,
    },
    {
      title: "Help & Support",
      link: "/dashboard/helpAndSupport",
      iconActive: "support-p.png",
      iconInActive: "support-w.png",
    },
  ];

  return (
    <>
      {
        <>
          {showMenuBar && (
            <div onClick={toggleMenuBar} className={style.closeBtn}>
              &#x2716;
            </div>
          )}
          <header className={`${style.Header} ${showMenuBar && style.show}`}>
            <Logo className={style.logo} />
            <nav className={style.navbar}>
              <ul className={style.nav}>
                {DashboardLinks.map((link) => (
                  <li key={link.title} className={style.link}>
                    {link.link ? (
                      <NavLink
                        to={link.link}
                        className={
                          pathname === link.link
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
            <ConfirmationModal
              isOpen={logoutModalOpen}
              onRequestClose={closeLogoutModal}
              title="Confirm Logout"
              message="Are you sure you want to logout?"
              onConfirm={handleLogoutConfirm}
              onCancel={closeLogoutModal}
            />
          </header>
        </>
      }
    </>
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
