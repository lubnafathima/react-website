import React, { useState } from "react";
import LeftAside from "./LeftAside";
import Container from "./Container";
import RightAside from "./RightAside";

const Main = ({ headerInput }) => {
  const [contentInput, setContentInput] = useState("");

  return (
    <div className="main">
      <LeftAside headerInput={headerInput} contentInput={contentInput} />
      <Container
        contentInput={contentInput}
        setContentInput={setContentInput}
      />
      <RightAside contentInput={contentInput} />
    </div>
  );
};

export default Main;
