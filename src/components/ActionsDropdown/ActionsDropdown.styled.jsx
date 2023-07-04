import styled from '@emotion/styled';

export const Dropdown = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Actions = styled.div`
  width: 50px;

  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 5px;
  padding-right: 5px;

  position: absolute;
  top: 20px;
  left: 3px;
  right: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  background-color: ${props => props.theme.colors.secondary};

  border-radius: ${props => props.theme.borders.borderRadiusMain};

  box-shadow: ${props => props.theme.shadows.boxShadowPopup};

  z-index: 2;
`;

export const ActionsBtn = styled.button`
  display: inline-flex;

  transform: ${({ isDropdownOpen }) => {
    return isDropdownOpen ? 'rotate(180deg)' : 'none';
  }};

  & svg {
    width: 20px;
    height: 20px;

    fill: ${props => props.theme.colors.accent};
  }
`;

export const ActionBtn = styled.button`
  width: 30px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: ${props => props.theme.borders.borderRadiusMain};

  outline: none;

  transition: box-shadow 200ms ease-out;

  &:hover,
  &:focus {
    box-shadow: ${props => props.theme.shadows.boxShadowMainHover};
  }

  & svg {
    fill: ${props => props.theme.colors.secondary};
  }
`;

export const DeleteBtn = styled(ActionBtn)`
  background-color: ${props => props.theme.colors.actionsDeleteBtnBgColor};
`;

export const EditBtn = styled(ActionBtn)`
  background-color: ${props => props.theme.colors.actionsEditBtnBgColor};
`;
