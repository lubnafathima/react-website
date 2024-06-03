import React, { useState } from "react";
import Content from "./Content";
import Button from "./Button";
import Input from "./Input";
import ModalContainer from "./ModalContainer";

const Container = ({ contentInput, setContentInput }) => {
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
        <input type="text" placeholder="Input" className="input" />
        <button className="button" onClick={openModal}>
          Btn
        </button>
      </div>
      {/* <div className="content">
        <div className="content-img">Img</div>
        <div className="btn-container">
          <Button />
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
      </div> */}
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
