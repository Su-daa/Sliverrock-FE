import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/Tab.css";

function MatchingTab() {
  const tabItems = [
    { to: "/FriendRequestPage", label: "친구 신청" },
    { to: "/FriendListPage", label: "친구 목록" },
  ];

  return (
    <Nav justify className="fixed-bottom matching-tab">
      {tabItems.map((item) => (
        <Nav.Item key={item.to}>
          <Nav.Link
            as={NavLink}
            to={item.to}
            exact
            activeClassName="active"
            className="navlink"
          >
            {item.label}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
}

export default MatchingTab;
