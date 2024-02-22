import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import style from "./NavbarForMobile.module.css";

function NavbarForMobile({ navElements }) {
  const { pathname } = useLocation();

  // Initialize state to track dropdown states
  const [dropdownStates, setDropdownStates] = useState({});
  const [menuIconClicked, setMenuIconClicked] = useState(false);

  // Function to toggle dropdown state
  const toggleDropdown = (navItemName) => {
    // Close all other dropdowns
    const updatedDropdownStates = Object.fromEntries(
      Object.keys(dropdownStates).map((name) => [name, false])
    );
    setDropdownStates({
      ...updatedDropdownStates,
      [navItemName]: !dropdownStates[navItemName],
    });
  };

  const toggleMenuIcon = () => {
    setMenuIconClicked(!menuIconClicked);
  };

  const renderDropdownContent = (links, navItemName) => {
    return (
      <ul className={style.dropdown}>
        {links &&
          links.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.link}
                className={({ isActive }) => (isActive ? "active" : null)}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
      </ul>
    );
  };

  return (
    <nav className={style.navbar}>
      <div
        className={`${style.menuIcon} ${
          menuIconClicked && style.menuIconChange
        }`}
        onClick={toggleMenuIcon}
      >
        <div className={style.bar1}></div>
        <div className={style.bar2}></div>
        <div className={style.bar3}></div>
      </div>

      <ul
        className={`${style.navBarForMobile} ${
          menuIconClicked ? style.active : ""
        }`}
      >
        {navElements.map((navItem) => {
          return (
            <li key={navItem.name}>
              {navItem.dropdownElement ? (
                <>
                  <button
                    className={style.linksForMobile}
                    onClick={() => toggleDropdown(navItem.name)}
                  >
                    {navItem.name}
                    {dropdownStates[navItem.name] ? (
                      <span>&#11165;</span>
                    ) : (
                      <span>&#11167;</span>
                    )}
                  </button>
                  {dropdownStates[navItem.name] &&
                    renderDropdownContent(navItem.links, navItem.name)}
                </>
              ) : (
                <NavLink to={navItem.link} className={style.linksForMobile}>
                  {navItem.name}
                </NavLink>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavbarForMobile;
