import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../../Logo/Logo";
import style from "./DashboardHeader.module.css";
import ConfirmationModal from "../../../../UI/ConfirmModel/ConfirmationModal";
import { useDispatch } from "react-redux";
import { logout } from "../../../../store/LoginStateActions";

const DashboardHeader = ({ showMenuBar, toggleMenuBar, DashboardLinks }) => {
  const { pathname } = useLocation();

  // const navigate = useNavigate();

  // const dispatch = useDispatch();

  // const handleLogout = () => {
  //   setLogoutModalOpen(true);
  // };

  // const handleLogoutConfirm = () => {
  //   dispatch(logout());
  //   navigate("/login");
  // };

  // const [logoutModalOpen, setLogoutModalOpen] = useState(false);

  // const closeLogoutModal = () => {
  //   setLogoutModalOpen(false);
  // };

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
            {/* <ConfirmationModal
              isOpen={logoutModalOpen}
              onRequestClose={closeLogoutModal}
              title="Confirm Logout"
              message="Are you sure you want to logout?"
              onConfirm={handleLogoutConfirm}
              onCancel={closeLogoutModal}
            /> */}
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
