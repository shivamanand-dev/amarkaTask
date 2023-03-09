import "./App.css";
import ScreenOne from "./Components/Screen1";
import SideBar from "./Components/Sidebar";

import data from "./data.json";

function App() {
  console.log(data);
  return (
    <>
      <SideBar />
      <div className="wrapper">
        <ScreenOne data={data} />
      </div>
    </>
  );
}

export default App;
