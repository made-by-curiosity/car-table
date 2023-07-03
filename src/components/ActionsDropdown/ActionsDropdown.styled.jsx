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

  background-color: white;

  border-radius: 5px;

  box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.75);

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

    fill: orangered;
  }
`;

export const ActionBtn = styled.button`
  width: 30px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 5px;

  outline: none;

  transition: box-shadow 200ms ease-out;

  &:hover,
  &:focus {
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.75);
  }

  & svg {
    fill: white;
  }
`;

export const DeleteBtn = styled(ActionBtn)`
  background-color: rgb(220, 20, 60);
`;

export const EditBtn = styled(ActionBtn)`
  background-color: rgb(255, 215, 0);
`;
