import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./components/sidebar";
import Summary from "./components/Summary";

function App() {
  return (
    <>
      <div className="bg-gray-200 absolute -z-20 h-screen w-screen"></div>
      <div className="h-screen w-screen flex flex-row gap-4">
        <Sidebar />
        <Summary />
      </div>
    </>
  );
}

export default App;
