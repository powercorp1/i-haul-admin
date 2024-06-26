import React from "react";
import Main from "./components/Main/Main";
import { MultiLevelSidebar } from "./components/Sidebar/Sidebar";
import { Route, Routes, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
const App = () => {

  const location= useLocation();
  console.log(location);
  return (
    <div className="App">

      <div className="flex h-screen bg-[#ECEDEF]">
        <section className="w-[15%]">
          <MultiLevelSidebar></MultiLevelSidebar>
        </section>

        <section className="flex flex-col w-[85%]">

          <div className="h-[10%]">
            <Navbar></Navbar>
          </div>

          <Routes location={location} key={location.pathname}>
            <Route element={<Main></Main>}
            path="/" />
          

            <Route element={<div>Hello</div>}
            path="/movers" />
              
           
          </Routes>

        </section>
      </div>

    </div>
  );
}

export default App;