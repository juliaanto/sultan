import { Background, Basis } from "./modal.styled";

import ReactDOM from 'react-dom';
import { createRef } from "react";
import useClickOutsideElement from "../../common/hooks/useClickOutsideElement";
import useLockBodyScroll from "../../common/hooks/useLockBodyScroll";

interface ModalProps {
  isOpen: boolean;
  children: JSX.Element;
  handleCloseClick: () => void;
}

function Modal({isOpen, children, handleCloseClick}: ModalProps) {
  const modalElement = document.querySelector('#modal');
  const modalRef = createRef<HTMLInputElement>();

  useLockBodyScroll(isOpen);
  useClickOutsideElement(modalRef, handleCloseClick);

  if (!modalElement || !isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <Background>
      <Basis ref={modalRef}>
       {children}
      </Basis>
    </Background>,
    modalElement
  );
}

export default Modal;