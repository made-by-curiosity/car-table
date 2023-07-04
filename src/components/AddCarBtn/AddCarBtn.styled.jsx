import styled from '@emotion/styled';

export const AddBtn = styled.button`
  width: 100px;
  padding: 10px;

  border-radius: ${props => props.theme.borders.borderRadiusAccent};

  background-color: ${props => props.theme.colors.addBtnBgColor};

  font-weight: 600;
  color: ${props => props.theme.colors.secondary};

  outline: none;

  transition: box-shadow 200ms ease-out;

  box-shadow: ${props => props.theme.shadows.boxShadowMain};

  &:hover,
  &:focus {
    box-shadow: ${props => props.theme.shadows.boxShadowMainHover};
  }

  &:active {
    box-shadow: ${props => props.theme.shadows.boxShadowBtnActive};
  }
`;
