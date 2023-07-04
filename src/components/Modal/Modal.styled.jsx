import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.theme.colors.backdrop};
`;

export const ModalWindow = styled.div`
  width: 500px;
  padding: 32px 50px;

  position: relative;

  background-color: ${props => props.theme.colors.secondary};

  border-radius: ${props => props.theme.borders.borderRadiusMain};

  box-shadow: ${props => props.theme.shadows.boxShadowPopup};
`;

export const CloseBtn = styled.button`
  width: 20px;
  height: 20px;

  position: absolute;
  top: 12px;
  right: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  outline: none;

  & svg {
    width: 20px;
    height: 20px;

    fill: ${props => props.theme.colors.closeModal};
    transition: fill 300ms ease-out;
  }

  &:hover svg,
  &:focus svg {
    fill: ${props => props.theme.colors.accent};
  }
`;

export const Title = styled.p`
  margin-bottom: 20px;

  font-weight: 600;

  text-align: center;
`;
