import React from "react";
import Main from "./pages/Users/Users";
import { MultiLevelSidebar } from "./components/Sidebar/Sidebar";
import { Route, Routes, useLocation } from "react-router-dom";
import Movers from "./pages/Movers/Movers";
import Moves from "./pages/Moves/Moves";
import Navbar from "./components/Navbar/Navbar";
import Serviceable from "./pages/Serviceable States/Serviceable";
import Flagged from "./pages/Flagged/Flagged";
import MoveTransaction from "./pages/MoveTransaction/MoveTransaction";
import Settings from "./pages/Settings/Settings";
import PushNotification from "./pages/Push Notification/PushNotification";
import AddState from "./pages/Serviceable States/AddState";
import ImportCsv from "./pages/Serviceable States/ImportCsv";
import EditUser from "./pages/Users/EditUser";
import ChangePassword from "./pages/Users/ChangePassword";
import ChangePasswordModal from "./components/Modal/ChangePasswordModal";
import EditMover from "./pages/Movers/EditMover";
import AboutUs from "./pages/CMSManagement/AboutUs";
import PrivacyPolicy from "./pages/CMSManagement/PrivacyPolicy";
import TermsAndConditions from "./pages/CMSManagement/TermsAndConditions";
import PromoCodes from "./pages/Promotions/PromoCode/PromoCode";
import EditPromoCodes from "./pages/Promotions/PromoCode/EditPromoCodes";
import X from "./pages/Promotions/HomeCards/HomeCard";
import HomeCard from "./pages/Promotions/HomeCards/HomeCard";
import AddNewHomeCard from "./pages/Promotions/HomeCards/AddNew";


const App = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="App">
      <div className="flex h-fit bg-[#ECEDEF]">
        <section className="w-[15%]">
          <MultiLevelSidebar></MultiLevelSidebar>
        </section>

        <section className="flex flex-col w-[85%]">
          <div className="h-[10%]">
            <Navbar></Navbar>
          </div>

          <Routes location={location} key={location.pathname}>
            <Route element={<Main></Main>} path="/" />

            <Route element={<Movers></Movers>} path="/movers" />

            <Route element={<Moves></Moves>} path="/moves" />

            <Route element={<Serviceable></Serviceable>} path="/store" />

            <Route element={<Flagged></Flagged>} path="/flagged" />

            <Route
              element={<MoveTransaction></MoveTransaction>}
              path="/movetransaction"
            />

            <Route element={<Settings></Settings>} path="/settings" />

            <Route
              element={<PushNotification></PushNotification>}
              path="/pushnotification"
            />

            <Route element={<AddState></AddState>} path="/addstate" />
            <Route element={<ImportCsv></ImportCsv>} path="/importcsv" />

            <Route element={<EditUser></EditUser>} path="/edituser" />
            <Route
              element={<ChangePassword></ChangePassword>}
              path="/changepassword"
            />
            <Route element={<EditMover></EditMover>} path="/editmover" />
            <Route element={<AboutUs></AboutUs>} path="/aboutus" />
            <Route
              element={<TermsAndConditions></TermsAndConditions>}
              path="/termsandconditions"
            />
            <Route
              element={<PrivacyPolicy></PrivacyPolicy>}
              path="/privacypolicy"
            />
            <Route element={<PromoCodes></PromoCodes>} path="/promocodes" />
            <Route
              element={<EditPromoCodes></EditPromoCodes>}
              path="/editpromocodes"
            />
            <Route
              element={<EditPromoCodes></EditPromoCodes>}
              path="/editpromocodes"
            />
            <Route element={<HomeCard></HomeCard>} path="/homecards" />

            <Route element={<AddNewHomeCard></AddNewHomeCard>} path="/addnewhomecard" />
          </Routes>
        </section>
      </div>
    </div>
  );
};

export default App;
