import styled from '@emotion/styled';

export const SearchInput = styled.input`
  height: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;

  text-align: center;

  border: 1px solid silver;
  border-radius: 5px;

  border: 1px solid DimGray;
  border-radius: 5px;

  outline: none;

  transition: box-shadow 200ms ease-out;

  &:hover,
  &:focus {
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.75);
  }
`;

export const SearchBtn = styled.button`
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 7px;
  padding-right: 7px;
  margin-left: 5px;

  border: 1px solid DimGray;
  border-radius: 5px;

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
