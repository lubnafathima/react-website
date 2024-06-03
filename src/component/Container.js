import React, { useState } from "react";
import Content from "./Content";
import ModalContainer from "./ModalContainer";

const Container = ({ contentInput, setContentInput, containerInput, setContainerInput, setAsideValue }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
    setAsideValue(containerInput); 
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="container">
      <div className="top-container">
        <input type="text" placeholder="Input"
          value={containerInput}
          onChange={(e) => setContainerInput(e.target.value)} className="input" />
        <button className="button" onClick={openModal}>
          Btn
        </button>
      </div>
      <Content contentInput={contentInput} setContentInput={setContentInput} />
      <ModalContainer
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        styleClass={"green"}
      />
    </div>
  );
};

export default Container;
