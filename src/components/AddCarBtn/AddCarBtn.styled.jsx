import styled from '@emotion/styled';

export const AddBtn = styled.button`
  width: 100px;
  padding: 10px;

  border-radius: 12px;

  background-color: rgb(0, 128, 128);

  font-weight: 600;
  color: white;

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
