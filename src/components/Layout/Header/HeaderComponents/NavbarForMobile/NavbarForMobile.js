import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import style from "./NavbarForMobile.module.css";

function NavbarForMobile({ navElements }) {
  const { pathname } = useLocation();

  // Initialize state to track dropdown states
  const [dropdownStates, setDropdownStates] = useState({});

  // Function to toggle dropdown state
  const toggleDropdown = (navItemName) => {
    setDropdownStates({
      ...dropdownStates,
      [navItemName]: !dropdownStates[navItemName],
    });
  };

  // Function to close all dropdowns
  const closeAllDropdowns = () => {
    setDropdownStates({});
  };

  const renderDropdownContent = (links, navItemName) => {
    return (
      <ul className={style.dropdown}>
        {links &&
          links.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.link}
                // onClick={closeAllDropdowns}
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
    <nav className="mobile-navbar">
      <ul className={style.navBarForMobile}>
        {navElements.map((navItem) => {
          return (
            <li key={navItem.name}>
              {navItem.dropdownElement ? (
                <>
                  <button
                    className={style.linksForMobile}
                    onClick={() => toggleDropdown(navItem.name)} // Pass navItem name to toggleDropdown
                  >
                    {navItem.name} <i className="fas fa-angle-down"></i>
                  </button>
                  {dropdownStates[navItem.name] &&
                    renderDropdownContent(navItem.links, navItem.name)}
                </>
              ) : (
                <NavLink
                  to={navItem.link}
                  // className={({ isActive }) =>
                  //   navItem.link === pathname
                  //     ? "active"
                  //     : isActive && navItem.active
                  //     ? "active"
                  //     : null
                  // }
                  className={style.linksForMobile}
                >
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
