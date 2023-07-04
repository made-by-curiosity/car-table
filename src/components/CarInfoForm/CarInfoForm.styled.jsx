import styled from '@emotion/styled';

export const CarForm = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 10px;
`;

export const CarInput = styled.input`
  width: 100%;

  padding: 10px;

  line-height: 1.3;

  border: ${props => props.theme.borders.primary};

  border-radius: ${props => props.theme.borders.borderRadiusMain};

  outline: none;

  transition: box-shadow 200ms ease-out;

  &:disabled {
    opacity: 0.5;
  }

  &:hover,
  &:focus {
    box-shadow: ${props => props.theme.shadows.boxShadowMainHover};

    &:disabled {
      box-shadow: none;
      cursor: not-allowed;
    }
  }
`;

export const AvailabilitySelect = styled.select`
  width: 130px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 5px;

  border: ${props => props.theme.borders.primary};

  border-radius: ${props => props.theme.borders.borderRadiusMain};

  outline: none;

  transition: box-shadow 200ms ease-out;

  &:hover,
  &:focus {
    box-shadow: ${props => props.theme.shadows.boxShadowMainHover};
  }
`;

export const SubmitBtn = styled.button`
  width: 100px;
  padding: 10px;

  border-radius: 12px;

  background-color: ${props => props.theme.colors.accent};

  color: white;

  outline: none;

  box-shadow: ${props => props.theme.shadows.boxShadowMain};

  transition: box-shadow 200ms ease-out;

  &:hover,
  &:focus {
    box-shadow: ${props => props.theme.shadows.boxShadowMainHover};
  }

  &:active {
    box-shadow: ${props => props.theme.shadows.boxShadowBtnActive};
  }
`;

export const InputName = styled.label`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 5px;

  & > span {
    font-weight: 600;
  }
`;

export const ErrorInputMessage = styled.span`
  color: ${props => props.theme.colors.errorMsgColor};
  font-weight: 400;
`;
