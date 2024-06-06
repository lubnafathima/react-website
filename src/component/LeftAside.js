import React, { useState } from "react";
import ModalContainer from "./ModalContainer";

const LeftAside = ({ headerInput, contentInput, asideValue }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="leftAside">
      <div className="asideBox">
        {headerInput === "" ? "Aside" : headerInput}
      </div>
      <div className="asideBox">{asideValue}</div>
      <div className="left_box">
        <button className="button btn" onClick={openModal}>
          Btn
        </button>
        <div className="left_content">{contentInput === "" ? "Aside" : contentInput}</div>
      </div>
      <ModalContainer
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        styleClass={"red"}
      />
    </div>
  );
};

export default LeftAside;
