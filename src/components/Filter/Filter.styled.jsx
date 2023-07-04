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

  border: ${props => props.theme.borders.primary};
  border-radius: ${props => props.theme.borders.borderRadiusMain};

  outline: none;

  transition: box-shadow 200ms ease-out;

  &:hover,
  &:focus {
    box-shadow: ${props => props.theme.shadows.boxShadowMainHover};
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
