import React from "react";
import ButtonWithStyle from './Button.styles';

const Button = ({ type = "text", label, value, onChange }) => (
  <div className="simple-form-group">
    {/* <button style={{ backgroundColor: "white"}}> Test </button> */}
    <ButtonWithStyle ref={ref} {...props} >
      {props.children}
    </ButtonWithStyle>
  </div>
);

export default Button;