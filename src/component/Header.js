import React from "react";
import Button from "./Button";
import Input from "./Input";

const Header = () => {
  return (
    <div className="header">
      <div className="header_input">
        <Input />
      </div>
      <div className="header_content">
        <nav className="nav">
          <Button />
          <Button />
          <Button />
        </nav>
        <div className="logo">LOGO</div>
      </div>
    </div>
  );
};

export default Header;
