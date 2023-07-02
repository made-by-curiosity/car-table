import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, CloseBtn, ModalWindow, Title } from './Modal.styled';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children, onModalClose, title }) => {
  const onBackdropModalClose = e => {
    if (e.target === e.currentTarget) {
      onModalClose(false);
    }
  };

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

  return createPortal(
    <Backdrop onClick={onBackdropModalClose}>
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
