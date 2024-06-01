import React from "react";
import Button from "./Button";
import Input from "./Input";

const Content = () => {
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
      <Input/>
    </div>
  );
};

export default Content;