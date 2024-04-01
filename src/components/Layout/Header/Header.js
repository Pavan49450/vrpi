import React, { useEffect, useRef, useState } from "react";
import style from "./Header.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import HeaderDropdown from "./HeaderComponents/HeaderDropDown";
import Logo from "../../Logo/Logo";
// import CommingSoon from "../../../UI/ComingSoon/ComingSoon";
import { useDispatch, useSelector } from "react-redux";
import { setComingSoon } from "../../../store/ComingSoonSlice";
import NavbarForMobile from "./HeaderComponents/NavbarForMobile/NavbarForMobile";
import { navElementsForMobileData } from "../../../data/NavData";
import Button from "../../../UI/Button/Button";
import ProfilePic from "../../Dashboard/ProfilePic/ProfilePic";

const Header = ({
  links,
  buttons,
  dropdownLinks,
  JoinUsBarData,
  dashboard,
}) => {
  const sideNavbarRef = useRef(null);
  const mobileMenuIconRef = useRef(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showDropDown, setShowDropDown] = useState(null);

  // const [showCommingSoon, setShowCommingSoon] = useState(false);
  const dispatch = useDispatch();
  // useEffect(()=>{

  //   const handleShowCommingSoon = () => {
  //     dispatch(setComingSoon(true));
  //   };
  // })

  const isComingSoon = useSelector((state) => state.comingSoon.isComingSoon);

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 700;

  const handleLinkClick = () => {
    // Dispatch action to set isComingSoon to true only if it's not already true
    if (!isComingSoon) {
      dispatch(setComingSoon(true));
    }
  };

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        sideNavbarRef.current &&
        !sideNavbarRef.current.contains(event.target) &&
        mobileMenuIconRef.current &&
        !mobileMenuIconRef.current.contains(event.target)
      ) {
        closeMobileMenu();
      }
    };

    if (isMobileMenuOpen && width < breakpoint) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isMobileMenuOpen, width]);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navElements = links.map((link, index) => (
    <li key={Math.random()} className={style.element}>
      {link.active ? (
        <NavLink
          to={link.address}
          title={`Link to ${link.name}`}
          onClick={handleMobileMenuToggle}
          className={({ isActive }) =>
            isActive
              ? `${style.active} ${style.mainNavLink}`
              : style.mainNavLink
          }
        >
          {link.name}
        </NavLink>
      ) : (
        <button
          href=""
          onClick={handleLinkClick}
          title={`Link to ${link.name}`}
          className={style.mainNavLink}
        >
          {link.name}
        </button>
      )}
    </li>
  ));

  const dropdownElements = dropdownLinks
    ? dropdownLinks.map((link, index) => (
        <li key={Math.random()} className={style.dropdownElement}>
          {link.active ? (
            <>
              <NavLink
                to={link.address}
                title={`Link to ${link.name}`}
                // onClick={handleMobileMenuToggle}
                className={style.dropdownLink}
                onMouseEnter={() => setShowDropDown(index)}
                onMouseLeave={() => setShowDropDown(null)}
                style={{
                  borderBottom: showDropDown === index && `3px solid #ff6501`,
                }}
              >
                {link.name}
              </NavLink>
              <HeaderDropdown
                onMouseEnter={() => setShowDropDown(index)}
                onMouseLeave={() => setShowDropDown(null)}
                data={link.content}
                style={{ display: index === showDropDown ? "flex" : "none" }}
              />
            </>
          ) : (
            <button
              className={style.dropdownLink}
              onClick={handleLinkClick}
              onMouseEnter={() => setShowDropDown(index)}
              onMouseLeave={() => setShowDropDown(null)}
            >
              {link.name}
            </button>
          )}
        </li>
      ))
    : null;

  const navButtons = buttons.map((button, index) => (
    <>
      {button.active ? (
        <Button
          key={Math.random()}
          className={style.signUpBtn}
          // to={button.link}
          onClick={() => navigate(button.link)}
        >
          {button.name}
        </Button>
      ) : (
        <Button
          key={Math.random()}
          className={style.signUpBtn}
          onClick={() => dispatch(setComingSoon(true))}
        >
          {" "}
          {button.name}
        </Button>
      )}
    </>
  ));

  const JoinUsBar = (
    <div className={style.joinUsBar}>
      <p>Join Us Via</p>
      <ul>
        {JoinUsBarData.socialMediaIcons.map((icon, index) => (
          <li key={Math.random()}>
            <a href={icon.address} target="_blank" rel="noopener noreferrer">
              <img
                src={require(`../../../assets/socialMediaIcons/${icon.src}`)}
                alt={icon.alt}
              ></img>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  const navigate = useNavigate();

  return (
    <>
      {width > breakpoint ? (
        <nav className={style.Header}>
          <Logo />
          <div className={style.navbar}>
            {JoinUsBar}
            <div className={style.navBackground}>
              <div className={style.nav}>{navElements}</div>
              {dashboard.active && (
                <div className={style.dashboardIconContainer}>
                  {/* <img
                    src={require(`../../../assets/dashboard/profilePic.png`)}
                    alt={dashboard.name}
                    onClick={() => navigate(dashboard.link)}
                    title={dashboard.name}
                    className={style.dashboardIcon}
                  /> */}

                  <ProfilePic
                    onClick={() => navigate(dashboard.link)}
                    classForDiv={style.dashboardIcon}
                  />
                </div>
              )}
            </div>
            <div className={style.lowerBar}>
              {dropdownLinks && (
                <div className={style.dropdownNavbar}>
                  <ul className={style.dropdownNav}>{dropdownElements}</ul>
                </div>
              )}
              {navButtons}
            </div>
          </div>
        </nav>
      ) : (
        <nav className={style.headerForMobile}>
          <div className={style.mainForMobile}>
            <Logo />
            {navButtons}
          </div>
          {/* {navElementsForMobile} */}
          <NavbarForMobile
            navElements={navElementsForMobileData}
            dashboard={dashboard}
          />
        </nav>
      )}
    </>
  );
};

export default Header;
