import styled from '@emotion/styled';

// BiSolidDownArrow  MdArrowDropDownCircle MdOutlineKeyboardArrowDown

export const Dropdown = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Actions = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 5px;
  padding-right: 5px;

  position: absolute;
  top: -10px;
  left: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  gap: 10px;

  background-color: silver;

  border-radius: 5px;

  box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.75);

  z-index: 2;
`;

export const ActionsBtn = styled.button`
  display: inline-flex;

  & svg {
    width: 20px;
    height: 20px;

    fill: orangered;
  }
`;
