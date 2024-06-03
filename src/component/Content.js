import React from "react";
import Button from "./Button";

const Content = ({ contentInput, setContentInput }) => {
  return (
    <div className="content">
      <div className="content-img">Img</div>
      <div className="btn-container">
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
      </div>
      <input
        type="text"
        placeholder="Input"
        value={contentInput}
        onChange={(e) => setContentInput(e.target.value)}
        className="input"
      />
    </div>
  );
};

export default Content;
