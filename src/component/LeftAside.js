import React, { useState } from "react";
import ModalContainer from "./ModalContainer";
import AsideBox from "./AsideBox";

const LeftAside = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="leftAside">
      <AsideBox />
      <AsideBox />
      <div className="left_box">
        <button className="button" onClick={openModal}>
          Btn
        </button>
      </div>
      <ModalContainer modalIsOpen={modalIsOpen} closeModal={closeModal} styleClass={"red"} />
    </div>
  );
};

export default LeftAside;
