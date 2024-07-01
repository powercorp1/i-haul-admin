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
import { NavLink } from "react-router-dom";

export function MultiLevelSidebar() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);

  };


  return (
    <Card className="h-screen w-full max-w-[18rem] p-0 shadow-xl shadow-blue-gray-900/5 bg-[#3C4C65] rounded-none fixed">
      <List>
        <Accordion open={open === 1}>
          <a href="/">
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
          </a>
        </Accordion>

        <a href="/movers">
          <ListItem className="text-white flex gap-5 items-center ">
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Movers
          </ListItem>
        </a>

        <a href="/moves">
          <ListItem className="text-white flex gap-5 items-center ">
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Moves
          </ListItem>
        </a>
        <a href="/store">
          <ListItem className="text-white flex gap-5 items-center ">
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Serviceable State
          </ListItem>
        </a>
        <a href="/flagged">
          <ListItem className="text-white flex gap-5 items-center ">
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Flagged
          </ListItem>
        </a>
        <a href="movetransaction">
          <ListItem className="text-white flex gap-5 items-center ">
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Move Transaction
          </ListItem>
        </a>
        <a href="settings">
          <ListItem className="text-white flex gap-5 items-center ">
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Settings
          </ListItem>
        </a>
        <a href="/pushnotification">
          <ListItem className="text-white flex gap-5 items-center ">
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Push Notification
          </ListItem>
        </a>
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
                <ListItem className="text-white ">Terms and Conditions</ListItem>
              </a>
            </List>
          </AccordionBody>
        </Accordion>
      </List>
    </Card>
  );
}