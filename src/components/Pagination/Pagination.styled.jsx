import styled from '@emotion/styled';

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 8px;
`;

export const PaginationBtn = styled.button`
  width: 80px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 7px;
  padding-right: 7px;

  border: 1px solid DimGray;
  border-radius: 5px;

  outline: none;

  transition: box-shadow 200ms ease-out;

  &:hover,
  &:focus {
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.75);

    &:disabled {
      box-shadow: none;
    }
  }

  &:active {
    box-shadow: 0px 1px 9px 0px rgba(0, 0, 0, 0.75) inset;
    -webkit-box-shadow: 0px 1px 9px 0px rgba(0, 0, 0, 0.75) inset;
    -moz-box-shadow: 0px 1px 9px 0px rgba(0, 0, 0, 0.75) inset;
  }

  &:disabled {
    cursor: default;
    border-color: silver;
  }
`;
