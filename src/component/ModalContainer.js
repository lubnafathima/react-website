import Modal from "react-modal";

const ModalContainer = ({ modalIsOpen, closeModal, styleClass }) => {
  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className={`${styleClass} modal_container`}>
      <h1 className="modal_title">Title</h1>
      <div className="modal_content">Add some message here</div>
      <div className="modal_btn_group">
        <button onClick={closeModal} className="button">
          Close
        </button>
        <button onClick={closeModal} className="button">
          Ok
        </button>
      </div>
    </Modal>
  );
};

export default ModalContainer;
