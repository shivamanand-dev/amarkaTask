import React from "react";
import { StyledSideBar } from "./StyledSideBar";

import majesticonsCoinsLine from "../../images/majesticons_coins-line.svg";
import logo from "../../images/Logo.svg";

const SideBar = () => {
  return (
    <StyledSideBar>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="sideBarItem active">
        <img src={majesticonsCoinsLine} alt="" />
      </div>
    </StyledSideBar>
  );
};

export default SideBar;
