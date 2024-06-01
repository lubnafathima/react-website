import React, { useState } from "react";
import Content from "./Content";
import Button from "./Button";
import Input from "./Input";
import ModalContainer from "./ModalContainer";

const Container = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="container">
      <div className="top-container">
        <Input />
        <button className="button" onClick={openModal}>
          Btn
        </button>
      </div>
      <Content />
      <ModalContainer
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        styleClass={"green"}
      />
    </div>
  );
};

export default Container;
