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
    <Card className="h-screen w-full max-w-[18rem] p-0 shadow-xl shadow-blue-gray-900/5 bg-primary-line1 rounded-none fixed">
      <List>
        <Accordion open={open === 1}>
          <NavLink to="/">
            <ListItem className="p-0" selected={open === 1}>
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="border-b-0 p-3 flex gap-5 items-center data-[active=true]:bg-slate-950"
              >
                <ListItemPrefix className="text-primary-textcolor">
                  <PresentationChartBarIcon className="h-5 w-5" />
                </ListItemPrefix>
                <Typography
                  color="blue-gray"
                  className="mr-auto font-normal text-primary-textcolor text-base"
                >
                  Users
                </Typography>
              </AccordionHeader>
            </ListItem>
          </NavLink>
        </Accordion>

        <NavLink to="/movers">
          <ListItem className="text-primary-textcolor flex gap-5 items-center ">
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Movers
          </ListItem>
        </NavLink>

        <NavLink to="/moves">
          <ListItem className="text-primary-textcolor flex gap-5 items-center ">
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Moves
          </ListItem>
        </NavLink>
        <NavLink to="/store">
          <ListItem className="text-primary-textcolor flex gap-5 items-center ">
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Serviceable State
          </ListItem>
        </NavLink>
        <NavLink to="/flagged">
          <ListItem className="text-primary-textcolor flex gap-5 items-center ">
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Flagged
          </ListItem>
        </NavLink>
        <NavLink to="movetransaction">
          <ListItem className="text-primary-textcolor flex gap-5 items-center ">
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Move Transaction
          </ListItem>
        </NavLink>
        <NavLink to="settings">
          <ListItem className="text-primary-textcolor flex gap-5 items-center ">
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Settings
          </ListItem>
        </NavLink>
        <NavLink to="/pushnotification">
          <ListItem className="text-primary-textcolor flex gap-5 items-center ">
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
              className={`mx-auto h-4 w-4 text-primary-textcolor  transition-transform ${
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
                <ShoppingBagIcon className="h-5 w-5 text-primary-textcolor " />
              </ListItemPrefix>
              <Typography
                color="blue-gray"
                className="mr-auto font-normal text-primary-textcolor "
              >
                CMS Management
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List
              className={`py-0 ${open === 0 || open === 1 ? "hidden" : ""}`}
            >
              <NavLink to="/aboutus">
                <ListItem className="text-primary-textcolor ">About Us</ListItem>
              </NavLink>
              <NavLink to="/privacypolicy">
                <ListItem className="text-primary-textcolor ">Privacy Policy</ListItem>
              </NavLink>
              <NavLink to="/termsandconditions">
                <ListItem className="text-primary-textcolor ">
                  Terms and Conditions
                </ListItem>
              </NavLink>
              <NavLink to="/contactrequest">
                <ListItem className="text-primary-textcolor ">Contact Request</ListItem>
              </NavLink>
              <NavLink to="/deleterequest">
                <ListItem className="text-primary-textcolor ">Delete Request</ListItem>
              </NavLink>
            </List>
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 text-primary-textcolor  transition-transform ${
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
                <ShoppingBagIcon className="h-5 w-5 text-primary-textcolor " />
              </ListItemPrefix>
              <Typography
                color="blue-gray"
                className="mr-auto font-normal text-primary-textcolor "
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
                <ListItem className="text-primary-textcolor ">Promo Codes</ListItem>
              </NavLink>
              <NavLink to="/homecards">
                <ListItem className="text-primary-textcolor ">Home Cards</ListItem>
              </NavLink>
            </List>
          </AccordionBody>
        </Accordion>
      </List>
    </Card>
  );
}