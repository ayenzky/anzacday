import React from "react";
// import { Nav, NavDropdown } from "react-bootstrap";
// import { push as Menu } from "react-burger-menu";
import "./menu.css";
import MetisMenu from "react-metismenu";

const content = [
  {
    id: 1,
    label: "Legend"
  },
  {
    id: 2,
    label: "Early Childhood"
  },
  {
    id: 3,
    label: "Primary"
  },
  {
    id: 4,
    label: "Secondary"
  },
  {
    id: 5,
    label: "Home",
    to: "/"
  },
  {
    id: 6,
    label: "About Us",
    to: "/"
  },
  {
    id: 7,
    parentId: 6,
    label: "1899-1902 BOER WAR"
  },
  {
    id: 8,
    parentId: 7,
    label: "WW1-General",
    to: "/"
  },
  {
    id: 9,
    parentId: 7,
    label: "WW1-Gallipoli",
    to: "/"
  },
  {
    id: 10,
    parentId: 7,
    label: "WW1-Western Front",
    to: "/"
  },
  {
    id: 11,
    parentId: 7,
    label: "WW1-Middle East",
    to: "/"
  },
  {
    id: 12,
    parentId: 7,
    label: "WW1-Home Front",
    to: "/"
  },
  {
    id: 13,
    parentId: 6,
    label: "1939-1945 WORD WAR 2"
  },
  {
    id: 14,
    parentId: 13,
    label: "WW2-General",
    to: "/"
  },
  {
    id: 15,
    parentId: 13,
    label: "WW2-Europe/Middle East",
    to: "/"
  },
  {
    id: 16,
    parentId: 13,
    label: "WW2-Asia/Pacific",
    to: "/"
  },
  {
    id: 17,
    parentId: 13,
    label: "WW2-Prisoner of War",
    to: "/"
  },
  {
    id: 18,
    parentId: 13,
    label: "WW2-Home Front",
    to: "/"
  },
  {
    id: 19,
    parentId: 13,
    label: "1945-49 BCOF (British Commonwealth Occupation Force - Japan)",
    to: "/"
  },
  {
    id: 20,
    parentId: 13,
    label: "1950-1953 Korea",
    to: "/"
  },
  {
    id: 21,
    parentId: 13,
    label: "1950-1960 Malayan Emergency",
    to: "/"
  },
  {
    id: 22,
    parentId: 13,
    label: "1964-1966 Indonesia",
    to: "/"
  },
  {
    id: 23,
    parentId: 13,
    label: "1962-1972 Vietnam",
    to: "/"
  },
  {
    id: 24,
    parentId: 9,
    label: "1990-1991 Gulf",
    to: "/"
  },
  {
    id: 25,
    parentId: 9,
    label: "2003-2006 Iraq 2003",
    to: "/"
  },
  {
    id: 26,
    parentId: 9,
    label: "1947-2006 Peacekeeping - General",
    to: "/"
  },
  {
    id: 27,
    parentId: 9,
    label: "1999-2000 Peacekeeping - East Timor",
    to: "/"
  }
];

export default class SideMenu extends React.Component {
  render() {
    return (
      <MetisMenu className="menu" content={content} activeLinkFromLocation />
    );
  }
}
