import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Content = ({ contentInput, setContentInput }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about", {
      state: contentInput,
    });
  };
  return (
    <div className="content">
      <div className="content-img">Img</div>
      <div className="btn-container">
        <Button onClick={handleClick}  />
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
