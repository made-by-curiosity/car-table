import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Backdrop, CloseBtn, ModalWindow, Title } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children, onModalClose, title }) => {
  useEffect(() => {
    const onEscModalClose = e => {
      if (e.code === 'Escape') {
        onModalClose(false);
      }
    };

    window.addEventListener('keydown', onEscModalClose);

    return () => {
      window.removeEventListener('keydown', onEscModalClose);
    };
  }, [onModalClose]);

  const onBackdropModalClose = e => {
    if (e.target === e.currentTarget) {
      onModalClose(false);
    }
  };

  return createPortal(
    <Backdrop onMouseDown={onBackdropModalClose}>
      <ModalWindow>
        <CloseBtn type="button" onClick={() => onModalClose(false)}>
          <AiOutlineCloseCircle />
        </CloseBtn>
        {title && <Title>{title}</Title>}
        {children}
      </ModalWindow>
    </Backdrop>,
    modalRoot
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onModalClose: PropTypes.func.isRequired,
  title: PropTypes.string,
};
