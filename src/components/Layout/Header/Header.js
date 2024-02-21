import React, { useEffect, useRef, useState } from "react";
import style from "./HeaderNew.module.css";
import { NavLink } from "react-router-dom";
import HeaderDropdown from "./HeaderComponents/HeaderDropDown";
import Logo from "../../Logo/Logo";
import CommingSoon from "../../../UI/CommingSoon/CommingSoon";
import { useDispatch, useSelector } from "react-redux";
import { setComingSoon } from "../../../store/CommingSoonSlice";

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
                to={link.address}
                title={`Link to ${link.name}`}
                onClick={handleMobileMenuToggle}
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
            <button className={style.dropdownLink} onClick={handleLinkClick}>
              {link.name}
            </button>
          )}
        </li>
      ))
    : null;

  const navButtons = buttons.map((button, index) => (
    <NavLink key={index} className={style.signUpBtn} to={button.link}>
      {button.name}
    </NavLink>
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

  const navElementsForMobileData = [
    { name: "Home", link: "/", dropdownElement: false, active: true },
    {
      name: "About Us",
      link: "/aboutus",
      dropdownElement: false,
      active: true,
    },
    {
      name: "Companies & Services",
      dropdownElement: true,
      links: [
        { name: "Construction & Infra", link: "", active: false },
        { name: "Financial Services", link: "", active: false },
        { name: "Food Processing", link: "", active: false },
        { name: "Imports & Exports", link: "", active: false },
        { name: "Management & Consulting", link: "", active: false },
        { name: "Tech Solutions", link: "", active: false },
      ],
    },
    {
      name: "Knowledge Hub",
      dropdownElement: true,
      links: [
        { name: "Edu-Tech", link: "edutech", active: true },
        { name: "Internship", link: "internships", active: true },
      ],
    },
    {
      name: "Trust & Welfare",
      link: "/",
      dropdownElement: true,
      active: false,
    },
    { name: "Careers", link: "/", dropdownElement: false, active: false },
    { name: "Contact Us", link: "/", dropdownElement: false, active: false },
  ];

  const navElementsForMobile = (
    <div className={style.navBarForMobile}>
      {navElementsForMobileData.map((element) => (
        <div key={element.name}>
          {element.active ? (
            <NavLink to={element.link} className={style.linksForMobile}>
              {element.name}
            </NavLink>
          ) : (
            <button className={style.linksForMobile} onClick={() => {}}>
              {element.name}
            </button>
          )}
          {element.dropdownElement &&
            element.links && ( // Check if dropdownElement is true and links array is defined
              <div className={style.dropdownContent}>
                {" "}
                {/* Add CSS class for dropdown content */}
                {element.links.map(
                  (
                    link,
                    index // Map through the links array to render dropdown items
                  ) => (
                    <NavLink
                      key={index}
                      to={link.link}
                      className={style.dropdownLink}
                    >
                      {link.name}
                    </NavLink>
                  )
                )}
              </div>
            )}
        </div>
      ))}
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
          {navElementsForMobile}
        </nav>
      )}
    </>
  );
};

export default Header;
