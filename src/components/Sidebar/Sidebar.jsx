import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { NavLink,Navigate } from "react-router-dom";

export function MultiLevelSidebar() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);

  };


  return (
    <Card className="h-screen w-full max-w-[18rem] p-0 shadow-xl shadow-blue-gray-900/5 bg-[#3C4C65] rounded-none fixed">
      <List>
        <Accordion open={open === 1}>
          <NavLink to="/">
            <ListItem className="p-0" selected={open === 1}>
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="border-b-0 p-3 flex gap-5 items-center"
              >
                <ListItemPrefix className="text-white">
                  <PresentationChartBarIcon className="h-5 w-5" />
                </ListItemPrefix>
                <Typography
                  color="blue-gray"
                  className="mr-auto font-normal text-white text-base"
                >
                  Users
                </Typography>
              </AccordionHeader>
            </ListItem>
          </NavLink>
        </Accordion>

        <NavLink to="/movers">
          <ListItem className="text-white flex gap-5 items-center ">
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Movers
          </ListItem>
        </NavLink>

        <NavLink to="/moves">
          <ListItem className="text-white flex gap-5 items-center ">
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Moves
          </ListItem>
        </NavLink>
        <NavLink to="/store">
          <ListItem className="text-white flex gap-5 items-center ">
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Serviceable State
          </ListItem>
        </NavLink>
        <NavLink to="/flagged">
          <ListItem className="text-white flex gap-5 items-center ">
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Flagged
          </ListItem>
        </NavLink>
        <NavLink to="movetransaction">
          <ListItem className="text-white flex gap-5 items-center ">
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Move Transaction
          </ListItem>
        </NavLink>
        <NavLink to="settings">
          <ListItem className="text-white flex gap-5 items-center ">
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Settings
          </ListItem>
        </NavLink>
        <NavLink to="/pushnotification">
          <ListItem className="text-white flex gap-5 items-center ">
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Push Notification
          </ListItem>
        </NavLink>
        <Accordion
          open={open === 2}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 text-white  transition-transform ${
                open === 2 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="border-b-0 p-3 flex gap-5 items-center"
            >
              <ListItemPrefix>
                <ShoppingBagIcon className="h-5 w-5 text-white " />
              </ListItemPrefix>
              <Typography
                color="blue-gray"
                className="mr-auto font-normal text-white "
              >
                CMS Management
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List
              className={`py-0 ${open === 0 || open === 1 ? "hidden" : ""}`}
            >
              <a href="/aboutus">
                <ListItem className="text-white ">About Us</ListItem>
              </a>
              <a href="/privacypolicy">
                <ListItem className="text-white ">Privacy Policy</ListItem>
              </a>
              <a href="/termsandconditions">
                <ListItem className="text-white ">
                  Terms and Conditions
                </ListItem>
              </a>
            </List>
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 text-white  transition-transform ${
                open === 1 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="border-b-0 p-3 flex gap-5 items-center"
            >
              <ListItemPrefix>
                <ShoppingBagIcon className="h-5 w-5 text-white " />
              </ListItemPrefix>
              <Typography
                color="blue-gray"
                className="mr-auto font-normal text-white "
              >
               Promotions
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List
              className={`py-0 ${open === 0 || open === 2 ? "hidden" : ""}`}
            >
              <NavLink to="/promocodes">
                <ListItem className="text-white ">Promo Codes</ListItem>
              </NavLink>
              <NavLink to="/homecards">
                <ListItem className="text-white ">Home Cards</ListItem>
              </NavLink>
              
            </List>
          </AccordionBody>
        </Accordion>
      </List>
    </Card>
  );
}