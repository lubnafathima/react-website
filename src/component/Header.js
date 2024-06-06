import React from "react";
import { Link } from "react-router-dom";
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
        <Link to="/" className="button link">Home</Link>
        <Link to="/about" className="button link">About</Link>
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
