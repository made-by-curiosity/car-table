import styled from '@emotion/styled';

export const DeleteConfirm = styled.div`
  text-align: center;
`;

export const DeleteBtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const DeleteMessage = styled.p`
  margin-bottom: 24px;
`;

export const DeleteCancel = styled.button`
  width: 100px;
  padding: 10px;

  border: 1px solid DimGray;
  border-radius: 12px;

  outline: none;

  transition: box-shadow 200ms ease-out;

  &:hover,
  &:focus {
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.75);
  }

  &:active {
    box-shadow: 0px 1px 9px 0px rgba(0, 0, 0, 0.75) inset;
    -webkit-box-shadow: 0px 1px 9px 0px rgba(0, 0, 0, 0.75) inset;
    -moz-box-shadow: 0px 1px 9px 0px rgba(0, 0, 0, 0.75) inset;
  }
`;
