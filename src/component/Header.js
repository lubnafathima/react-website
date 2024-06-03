import React from "react";
import Button from "./Button";

const Header = ({ headerInput, setHeaderInput }) => {
  return (
    <div className="header">
      <div className="header_input">
        <input
          type="text"
          placeholder="Input"
          value={headerInput}
          onChange={(e) => setHeaderInput(e.target.value)}
          className="input"
        />
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
