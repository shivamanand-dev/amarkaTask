import { useState } from "react";
import "./App.css";
import SideBar from "./Components/Sidebar";
import TabNavigation from "./Components/TabNavigation";

function App() {
  const [activeTab, setActiveTab] = useState(1);
  const handleNavClick = (tab) => {
    console.log(tab);
    setActiveTab(tab);
  };
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
      </div>
    </>
  );
}

export default App;
