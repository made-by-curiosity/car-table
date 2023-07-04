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

  border: ${props => props.theme.borders.primary};
  border-radius: ${props => props.theme.borders.borderRadiusMain};

  outline: none;

  transition: box-shadow 200ms ease-out;

  &:hover,
  &:focus {
    box-shadow: ${props => props.theme.shadows.boxShadowMainHover};

    &:disabled {
      box-shadow: none;
    }
  }

  &:active {
    box-shadow: ${props => props.theme.shadows.boxShadowBtnActive};
  }

  &:disabled {
    cursor: default;
    border-color: ${props => props.theme.colors.disabledPageBtn};
  }
`;
