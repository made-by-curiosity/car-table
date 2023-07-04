import styled from '@emotion/styled';

export const Delete = styled.button`
  width: 100px;
  padding: 10px;

  display: inline-flex;
  justify-content: center;

  color: ${props => props.theme.colors.secondary};

  background-color: ${props => props.theme.colors.deleteBtnBgColor};

  border-radius: ${props => props.theme.borders.borderRadiusAccent};

  outline: none;

  box-shadow: ${props => props.theme.shadows.boxShadowMain};

  transition: background-color 300ms ease-out, box-shadow 200ms ease-out;

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.deleteBtnHoverBgColor};
    box-shadow: ${props => props.theme.shadows.boxShadowMainHover};
  }

  &:active {
    box-shadow: ${props => props.theme.shadows.boxShadowBtnActive};
  }
`;
