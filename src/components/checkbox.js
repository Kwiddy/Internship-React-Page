import React from "react";
import "../styles/checkbox.css";

export const CheckBox = (props) => {
  return (
    <li>
      <input
        key={props.id}
        id={props.id}
        onChange={props.handleCheckChildElement}
        type="checkbox"
        checked={props.isChecked}
        value={props.value}
        className="common-checkbox"
      />
      <label htmlFor={props.id}></label>
      {props.value}
    </li>
  );
};

export default CheckBox;
