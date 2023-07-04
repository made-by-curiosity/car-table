import styled from '@emotion/styled';

export const DeleteConfirm = styled.div`
  text-align: center;
`;

export const DeleteBtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const DeleteMessage = styled.p`
  margin-bottom: 24px;
`;

export const DeleteCancel = styled.button`
  width: 100px;
  padding: 10px;

  border: ${props => props.theme.borders.primary};
  border-radius: ${props => props.theme.borders.borderRadiusAccent};

  outline: none;

  transition: box-shadow 200ms ease-out;

  &:hover,
  &:focus {
    box-shadow: ${props => props.theme.shadows.boxShadowMainHover};
  }

  &:active {
    box-shadow: ${props => props.theme.shadows.boxShadowBtnActive};
  }
`;
