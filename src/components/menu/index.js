import React from "react";
// import { Nav, NavDropdown } from "react-bootstrap";
// import { push as Menu } from "react-burger-menu";
import "./menu.css";
import MetisMenu from "react-metismenu";

const content = [
  {
    label: "Legend"
  },
  {
    label: "Early Childhood"
  },
  {
    label: "Primary"
  },
  {
    label: "Secondary"
  },
  {
    label: "Home",
    to: "/"
  },
  {
    label: "About Us",
    content: [
      {
        label: "1899-1902 BOER WAR",
        content: [
          {
            label: "WW1-General",
            to: "/"
          },
          {
            label: "WW1-Gallipoli",
            to: "/"
          },
          {
            label: "WW1-Western Front",
            to: "/"
          },
          {
            label: "WW1-Middle East",
            to: "/"
          },
          {
            label: "WW1-Home Front",
            to: "/"
          }
        ]
      },
      {
        label: "1939-1945 WORD WAR 2",
        content: [
          {
            label: "WW2-General",
            to: "/"
          },
          {
            label: "WW2-Europe/Middle East",
            to: "/"
          },
          {
            label: "WW2-Asia/Pacific",
            to: "/"
          },
          {
            label: "WW2-Prisoner of War",
            to: "/"
          },
          {
            label: "WW2-Home Front",
            to: "/"
          },
          {
            label:
              "1945-49 BCOF (British Commonwealth Occupation Force - Japan)",
            to: "/"
          },
          {
            label: "1950-1953 Korea",
            to: "/"
          },
          {
            label: "1950-1960 Malayan Emergency",
            to: "/"
          },
          {
            label: "1964-1966 Indonesia",
            to: "/"
          },
          {
            label: "1962-1972 Vietnam",
            to: "/"
          },
          {
            label: "1990-1991 Gulf",
            to: "/"
          },
          {
            label: "2003-2006 Iraq 2003",
            to: "/"
          },
          {
            label: "1947-2006 Peacekeeping - General",
            to: "/"
          },
          {
            label: "1999-2000 Peacekeeping - East Timor",
            to: "/"
          }
        ]
      }
    ]
  }
];

export default class SideMenu extends React.Component {
  render() {
    return (
      <MetisMenu className="menu" content={content} activeLinkFromLocation />
    );
  }
}
