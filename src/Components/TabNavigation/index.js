import React from "react";
import { StyledTabNavigation } from "./StyledTabNavigation";

const TabNavigation = ({ tabs, handleNavClick, activeTab }) => {
  return (
    <StyledTabNavigation>
      <ul className="tab-links">
        {tabs.map((e, i) => {
          return (
            <li key={i} className={`${activeTab === i ? "active" : ""}`}>
              <p
                onClick={() => {
                  handleNavClick(i);
                }}
              >
                {e.title}
              </p>
            </li>
          );
        })}
      </ul>
    </StyledTabNavigation>
  );
};

export default TabNavigation;
