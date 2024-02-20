import React, { useState, useEffect } from "react";
import styles from "./Message.module.css"; // Import modular CSS

const Message = ({ message, type, onClose }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onClose();
    }, 400000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`${styles.message} ${styles[type]} ${show ? styles.show : ""}`}
      onClick={onClose}
    >
      <p>{message}</p>
    </div>
  );
};

export default Message;
