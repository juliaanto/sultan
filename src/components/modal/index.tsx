import { Background, Basis, CloseButton, Title } from "./modal.styled";

import { ButtonView } from "../../ui/button";
import ReactDOM from 'react-dom';
import { createRef } from "react";
import useClickOutsideElement from "../../common/hooks/useClickOutsideElement";
import useLockBodyScroll from "../../common/hooks/useLockBodyScroll";

interface ModalProps {
  isOpen: boolean;
  title?: string;
  children: React.ReactNode;
  handleCloseClick: () => void;
}

function Modal({isOpen, title, children, handleCloseClick}: ModalProps) {
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
        <CloseButton 
          $view={ButtonView.Cross}
          onClick={handleCloseClick}
        />
        {title &&
          <Title>{title}</Title>
        }
        {children}
      </Basis>
    </Background>,
    modalElement
  );
}

export default Modal;