import React, { useState } from "react";
import LeftAside from "./LeftAside";
import Container from "./Container";
import RightAside from "./RightAside";

const Main = ({ headerInput }) => {
  const [contentInput, setContentInput] = useState("");
  const [containerInput, setContainerInput] = useState("");
  const [asideValue, setAsideValue] = useState("Aside");

  return (
    <div className="main">
      <LeftAside
        headerInput={headerInput}
        contentInput={contentInput}
        asideValue={asideValue}
      />
      <Container
        contentInput={contentInput}
        containerInput={containerInput}
        setContentInput={setContentInput}
        setContainerInput={setContainerInput}
        setAsideValue={setAsideValue}
      />
      <RightAside contentInput={contentInput} />
    </div>
  );
};

export default Main;
