import styled from '@emotion/styled';

export const SearchForm = styled.form`
  height: 35px;
  display: flex;
  align-items: center;
`;

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
  width: 30px;
  height: 30px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 5px;
  padding-right: 5px;
  margin-left: 5px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  outline: none;

  transform: scale(1);

  transition: transform 200ms ease-out;

  &:hover,
  &:focus {
    transform: scale(1.2);
  }

  &:active {
    transform: scale(1);
  }

  & svg {
    width: 24px;
    height: 24px;
  }
`;
