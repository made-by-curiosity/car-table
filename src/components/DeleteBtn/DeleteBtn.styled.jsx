import styled from '@emotion/styled';

export const Delete = styled.button`
  width: 100px;
  padding: 10px;

  display: inline-flex;
  justify-content: center;

  color: white;

  background-color: rgb(220, 0, 10);

  border-radius: 12px;

  outline: none;

  box-shadow: 0px 1px 5px -2px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 1px 5px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 1px 5px -2px rgba(0, 0, 0, 0.75);

  transition: background-color 300ms ease-out, box-shadow 200ms ease-out;

  &:hover,
  &:focus {
    background-color: rgb(190, 0, 20);
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
