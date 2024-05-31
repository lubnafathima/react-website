import React from "react";
import Content from "./Content";

const Container = () => {
    return (
        <div className="container">
            <div className="top-container">
                <input type="text" placeholder="Input" className="top-input" />
                <button className="top-btn">Btn</button>
            </div>
            <Content />
        </div>
    );
};

export default Container;