import React from "react";
import LeftAside from "./LeftAside";
import Container from "./Container";
import RightAside from "./RightAside";

const Main = () => {
  return (
    <div className="main">
      <LeftAside />
      <Container />
      <RightAside />
    </div>
  );
};

export default Main;
