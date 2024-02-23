import React, { useEffect, useRef, useState } from "react";
import style from "./HeaderNew.module.css";
import { NavLink } from "react-router-dom";
import HeaderDropdown from "./HeaderComponents/HeaderDropDown";
import Logo from "../../Logo/Logo";
import CommingSoon from "../../../UI/CommingSoon/CommingSoon";
import { useDispatch, useSelector } from "react-redux";
import { setComingSoon } from "../../../store/CommingSoonSlice";
import NavbarForMobile from "./HeaderComponents/NavbarForMobile/NavbarForMobile";
import { navElementsForMobileData } from "../../../data/NavData";

const Header = ({ links, buttons, dropdownLinks, JoinUsBarData }) => {
  const sideNavbarRef = useRef(null);
  const mobileMenuIconRef = useRef(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showDropDown, setShowDropDown] = useState(null);
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 700;
  // const [showCommingSoon, setShowCommingSoon] = useState(false);
  const dispatch = useDispatch();
  // useEffect(()=>{

  //   const handleShowCommingSoon = () => {
  //     dispatch(setComingSoon(true));
  //   };
  // })

  const isComingSoon = useSelector((state) => state.commingSoon.isComingSoon);

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
    <li key={index} className={style.element}>
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
        <li key={index} className={style.dropdownElement}>
          {link.active ? (
            <>
              <NavLink
                // to={link.address}
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
        <NavLink key={index} className={style.signUpBtn} to={button.link}>
          {button.name}
        </NavLink>
      ) : (
        <button
          key={index}
          className={style.signUpBtn}
          onClick={() => dispatch(setComingSoon(true))}
        >
          {" "}
          {button.name}
        </button>
      )}
    </>
  ));

  const JoinUsBar = (
    <div className={style.joinUsBar}>
      <p>Join Us Via</p>
      <ul>
        {JoinUsBarData.socialMediaIcons.map((icon, index) => (
          <li key={index}>
            <a href={icon.address}>
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

  return (
    <>
      {width > breakpoint ? (
        <nav className={style.Header}>
          <Logo />
          <div className={style.navbar}>
            {JoinUsBar}
            <div className={style.navBackground}>
              <div className={style.triangle}></div>

              <div className={style.nav}>{navElements}</div>
            </div>
            {dropdownLinks && (
              <div className={style.lowerBar}>
                <div className={style.dropdownNavbar}>
                  <ul className={style.dropdownNav}>{dropdownElements}</ul>
                </div>
                {navButtons}
              </div>
            )}
          </div>
        </nav>
      ) : (
        <nav className={style.headerForMobile}>
          <div className={style.mainForMobile}>
            <Logo />
            {navButtons}
          </div>
          {/* {navElementsForMobile} */}
          <NavbarForMobile navElements={navElementsForMobileData} />
        </nav>
      )}
    </>
  );
};

export default Header;
