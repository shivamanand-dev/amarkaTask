import React from "react";
import { StyledButtons } from "./StyledButtons";

const Buttons = ({ btnText, type = "primary" }) => {
  return (
    <StyledButtons type={type}>
      <button>{btnText}</button>
    </StyledButtons>
  );
};

export default Buttons;
