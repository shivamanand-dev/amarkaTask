import { useState } from "react";
import "./App.css";
import PairsCard from "./Components/PairsCard";
import SideBar from "./Components/Sidebar";
import TabNavigation from "./Components/TabNavigation";

import data from "./data.json";

function App() {
  const [activeTab, setActiveTab] = useState(1);
  const handleNavClick = (tab) => {
    console.log(tab);
    setActiveTab(tab);
  };
  console.log(data);
  return (
    <>
      <SideBar />
      <div className="wrapper">
        <p className="heading">Watch of the Yōkai Hunters</p>
        <TabNavigation
          tabs={[
            { title: "Appears Safe" },
            { title: "Medium Risk" },
            { title: "Probably Rug / Scam" },
          ]}
          handleNavClick={handleNavClick}
          activeTab={activeTab}
        />
        {data.map((e) => {
          return <PairsCard key={e.name} data={e} />;
        })}
      </div>
    </>
  );
}

export default App;
