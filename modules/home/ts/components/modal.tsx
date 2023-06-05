import React from "react";

const FormModal = ({ title, onClose }) => {
  return (
    <dialog open>
      <div className="modal">
        <div className="modal-header">
          <h3>{title}</h3>
          <button onClick={onClose}>X</button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </dialog>
  );
};

export default FormModal;
