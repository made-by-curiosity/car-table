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

  &:disabled {
    cursor: default;
    border-color: silver;
  }
`;
