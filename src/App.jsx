import React from "react";
import Main from "./pages/Users/Users";
import { MultiLevelSidebar } from "./components/Sidebar/Sidebar";
import { Route, Routes, useLocation } from "react-router-dom";
import Movers from "./pages/Movers/Movers";
import Moves from "./pages/Moves/Moves";
import Navbar from "./components/Navbar/Navbar";
import Serviceable from "./pages/Serviceable States/Serviceable";
const App = () => {

  const location = useLocation();
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


            <Route element={<Movers></Movers>}
              path="/movers" />

            <Route element={<Moves></Moves>}
              path="/moves" />

            <Route element={<Serviceable></Serviceable>}
              path="/store" />


          </Routes>

        </section>
      </div>

    </div>
  );
}

export default App;