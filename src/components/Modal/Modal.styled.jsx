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

  background-color: rgba(0, 0, 0, 0.1);
`;

export const ModalWindow = styled.div`
  width: 500px;
  padding: 32px 50px;

  position: relative;

  background-color: #fff;

  border-radius: 5px;

  box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.75);
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

    fill: Silver;
    transition: fill 300ms ease-out;
  }

  &:hover svg,
  &:focus svg {
    fill: orangered;
  }
`;

export const Title = styled.p`
  margin-bottom: 20px;

  font-weight: 600;

  text-align: center;
`;
