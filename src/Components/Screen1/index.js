import React, { useState } from "react";
import ChatBox from "../ChatBox";
import PairsCard from "../PairsCard";
import TabNavigation from "../TabNavigation";
import { StyledScreenOne } from "./StyledScreenOne";

const ScreenOne = ({ data }) => {
  const [activeTab, setActiveTab] = useState(1);
  const handleNavClick = (tab) => {
    console.log(tab);
    setActiveTab(tab);
  };
  return (
    <StyledScreenOne>
      <p className="heading">Watch of the Yōkai Hunters</p>
      <div className="leftSec">
        <TabNavigation
          tabs={[
            { title: "Appears Safe" },
            { title: "Medium Risk" },
            { title: "Probably Rug / Scam" },
          ]}
          handleNavClick={handleNavClick}
          activeTab={activeTab}
        />
        <div className="flex currentShowingTitle">
          <p>
            Currently Showing: Only newly listed pairs that appears to be safe.
          </p>

          <select name="" value="Initial Liquidity">
            <option value="Initial Liquidity">
              Sort by: Initial Liquidity
            </option>
          </select>
        </div>
        {data.map((e) => {
          return <PairsCard key={e.name} data={e} />;
        })}
      </div>
      <div className="rightSec">
        <ChatBox />
      </div>
    </StyledScreenOne>
  );
};

export default ScreenOne;
