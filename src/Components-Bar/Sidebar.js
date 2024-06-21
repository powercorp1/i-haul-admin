"use client";
import "../App.css";
import React, { useState } from "react";
import "../output.css";
import { Button, Flowbite, Sidebar } from "flowbite-react";
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
} from "react-icons/hi";

import { themes } from "./SidebarTheme";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

function Sidebar1() {
  const [isCollapse, setIsCollapse] = useState(false);

  const handleToggleButton = () => {
    if (isCollapse) setIsCollapse(false);
    else setIsCollapse(true);
  };

  return (
    <div className="Compo">
      <div className="Sidebar">
        <Flowbite  className="side-bar">
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            collapsed={isCollapse}
            className="Side1  bg-indigo-400"
          >
            <Sidebar.Items className="Side">
              <Sidebar.ItemGroup>
                <Sidebar.Item className="side-item" href="/users" icon={HiChartPie}>
                  Users
                </Sidebar.Item>

                <Sidebar.Item className="side-item" href="/movers" icon={HiInbox}>
                  Movers
                </Sidebar.Item>
                <Sidebar.Item className="side-item" href="/moves" icon={HiUser}>
                  Moves
                </Sidebar.Item>
                <Sidebar.Item className="side-item" href="/stores" icon={HiShoppingBag}>
                  Serviceable Stores
                </Sidebar.Item>
                <Sidebar.Item className="side-item" href="/flagged" icon={HiArrowSmRight}>
                  Flagged
                </Sidebar.Item>
                <Sidebar.Item className="side-item" href="/transaction" icon={HiTable}>
                  Move Transaction
                </Sidebar.Item>
                <Sidebar.Item className="side-item" href="/settings" icon={HiTable}>
                  Settings
                </Sidebar.Item>
                <Sidebar.Item className="side-item" href="/push" icon={HiTable}>
                  Push Notification
                </Sidebar.Item>
                <Sidebar.Collapse className="side-item" icon={HiShoppingBag} label="CMS Management">
                  <Sidebar.Item href="/aboutus">About Us</Sidebar.Item>
                  <Sidebar.Item href="/privacy">Privacy Policy</Sidebar.Item>
                  <Sidebar.Item href="/terms">
                    Terms and Conditions
                  </Sidebar.Item>
                </Sidebar.Collapse>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
        </Flowbite>
      </div>
      <div className="Navbar">
        <Navbar bg="light" data-bs-theme="light" className="Nav1">
          <Container>
            
              <BsJustify className="icon" onClick={handleToggleButton}/>
            
            <Nav className="me-auto"></Nav>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default Sidebar1;
