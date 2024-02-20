import React, { useState } from "react";
import styles from "./HeaderDropDown.module.css";
import { Link } from "react-router-dom";

const HeaderDropdown = ({ data, onMouseEnter, onMouseLeave, style }) => {
  const [selectedItem, setSelectedItem] = useState(data[0]);

  const handleItemHover = (item) => {
    console.log(selectedItem);
    setSelectedItem(item);
  };

  return (
    <div
      className={styles.dropdown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={style}
    >
      <div className={styles.dropdownContent}>
        {data.map((item) => (
          <div
            key={item.label}
            className={
              selectedItem.label === item.label
                ? `${styles.dropdownItem} ${styles.selectedItem}`
                : `${styles.dropdownItem}`
            }
            onMouseEnter={() => handleItemHover(item)}
          >
            <div style={{ transform: "skew(20deg)" }}>{item.label}</div>
          </div>
        ))}
      </div>
      <div className={styles.line}></div>
      <div className={styles.description}>
        <div>
          <h2>{selectedItem.description.descriptionHead}</h2>
          <div className={styles.descriptionContent}>
            {selectedItem.description.descriptionContent}
          </div>
        </div>
        <div className={styles.link}>
          <Link to={selectedItem.description.link}>Explore More</Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderDropdown;
