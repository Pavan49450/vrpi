import React, { useState } from "react";
import styles from "./Dropdown.module.css";

const Dropdown = ({ options, onSelect }) => {
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
    <div className={styles.customDropdown}>
      <div className={styles.selectedOption} onClick={toggleDropdown}>
        {selectedOption ? selectedOption.label : "Select an option"}
        <span className={`${styles.arrow} ${isOpen ? styles.open : ""}`}></span>
      </div>
      {isOpen && (
        <ul className={styles.options}>
          {options.map((option) => (
            <li key={option.value} onClick={() => handleOptionClick(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
