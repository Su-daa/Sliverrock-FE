import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/Tab.css";

function Tab() {
  const tabItems = [
    { to: "/home", label: "추천친구" },
    { to: "/ClubPage", label: "동호회" },
    { to: "/FriendRequestPage", label: "매칭" },
    { to: "/MyPage", label: "내정보" },
  ];

  return (
    <Nav justify className="fixed-bottom">
      {tabItems.map((item) => (
        <Nav.Item key={item.to}>
          <Nav.Link
            as={NavLink}
            to={item.to}
            
            //activeClassName="active"
            className="navlink"
          >
            {item.label}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
}

export default Tab;
