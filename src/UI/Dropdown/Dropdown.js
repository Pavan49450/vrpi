import React, { useState } from "react";
import styles from "./Dropdown.module.css";

const Dropdown = ({ options, onSelect, placeholder, className, style }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className={`${styles.customDropdown} ${className}`} style={style}>
      <div className={styles.selectedOption} onClick={toggleDropdown}>
        {selectedOption ? selectedOption.label : placeholder}
        {/* <span className={`${styles.arrow} ${isOpen ? styles.open : ""}`}></span> */}
        <img
          src={require(`../../assets/${
            isOpen ? "arrowUpPrimary.png" : "arrowDownPrimary.png"
          }`)}
          style={{ width: "2rem" }}
          alt=""
        />
      </div>
      {/* {isOpen && ( */}
      <ul className={`${styles.options} ${isOpen && styles.optionsActive}`}>
        {options.map((option) => (
          <li key={option.value} onClick={() => handleOptionClick(option)}>
            {option.label}
          </li>
        ))}
      </ul>
      {/* )} */}
    </div>
  );
};

export default Dropdown;
