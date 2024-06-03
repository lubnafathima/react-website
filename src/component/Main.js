import React from "react";
import LeftAside from "./LeftAside";
import Container from "./Container";
import RightAside from "./RightAside";

const Main = ({ headerInput }) => {
  
  return (
    <div className="main">
      <LeftAside headerInput={headerInput} />
      <Container />
      <RightAside />
    </div>
  );
};

export default Main;
