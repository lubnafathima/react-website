import React from "react";

const Header = () => {
    return (
        <div className="header">
            <input type="text" placeholder="Input" className="input" />
            <div className="header_content">
                <nav className="nav">
                    <a href="" className="nav_item">Btn</a>
                    <a href="" className="nav_item">Btn</a>
                    <a href="" className="nav_item">Btn</a>
                </nav>
                <div className="logo">LOGO</div>
            </div>
        </div>
    );
};

export default Header;