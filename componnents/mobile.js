import React, { useState } from "react";
import { MenuFoldOutlined ,MenuUnfoldOutlined } from "@ant-design/icons";
const Mobile = () => {
  const [isCollapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState(false);
  const toggle = () => {
    setCollapsed(!isCollapsed);
    setActive(!active);
  };
  return (
    <div>
      <ul className={`active${active}`}>
        <li>Home</li>
        <li>Who We Are</li>
        <li>Impacts</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="trigger-div">
        {React.createElement(
          isCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined ,
          {
            className: "trigger",
            onClick: toggle,
          }
        )}
          <button className="login-btn-mobile">Login</button>
      </div>
    </div>
  );
};
export default Mobile;
