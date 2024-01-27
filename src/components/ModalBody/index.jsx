import React, { useState } from "react";
import ReactModal from "react-modal";
import styles from "./ModalBody.module.css";

const ModalBody = ({
  classname = "",
  isModalOpen = false,
  children,
  modalClassname = "",
  overlayClassName = "",
  onClose = () => {},
}) => {
  ReactModal.setAppElement("#root");
  return (
    <ReactModal
      isOpen={isModalOpen}
      overlayClassName={`${styles.modal_body__overlay} ${
        overlayClassName && overlayClassName
      }`}
      className={`${styles.modal_body__content} ${
        modalClassname && modalClassname
      }`}
      onRequestClose={onClose}
    >
      <div className={styles.modal_body__close_btn} onClick={onClose}>
        <svg
          aria-label="Закрыть"
          color="rgb(255, 255, 255)"
          fill="rgb(255, 255, 255)"
          height="18"
          role="img"
          viewBox="0 0 24 24"
          width="18"
        >
          <title>Закрыть</title>
          <polyline
            fill="none"
            points="20.643 3.357 12 12 3.353 20.647"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          ></polyline>
          <line
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            x1="20.649"
            x2="3.354"
            y1="20.649"
            y2="3.354"
          ></line>
        </svg>
      </div>
      {children}
    </ReactModal>
  );
};

export default ModalBody;
