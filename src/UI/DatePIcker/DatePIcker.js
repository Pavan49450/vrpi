import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import style from "./DatePIcker.module.css";
import "./DatePickerMain.css";

const CustomDatePicker = ({
  selectedDate,
  onChange,
  className,
  placeholderText,
}) => {
  return (
    <DatePicker
      selected={selectedDate}
      onChange={onChange}
      dateFormat="dd/MM/yyyy"
      placeholderText={placeholderText}
      className={`${className} ${style.date}`}
    />
  );
};

export default CustomDatePicker;
