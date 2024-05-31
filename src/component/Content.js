import React from "react";

const Content = () => {
  return (
    <div className="content">
      <div className="content-img">img</div>
      <div className="btn-container">
        <button className="content-btn">Btn</button>
        <button className="content-btn">Btn</button>
        <button className="content-btn">Btn</button>
        <button className="content-btn">Btn</button>
        <button className="content-btn">Btn</button>
      </div>
      <input type="text" placeholder="Input" className="content-input" />
    </div>
  );
};

export default Content;