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

  border: 1px solid DimGray;

  border-radius: 5px;

  outline: none;

  transition: box-shadow 200ms ease-out;

  &:disabled {
    opacity: 0.5;
  }

  &:hover,
  &:focus {
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.75);

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

export const SubmitBtn = styled.button`
  width: 100px;
  padding: 10px;

  border-radius: 12px;

  background-color: orangered;

  color: white;

  outline: none;

  transition: box-shadow 200ms ease-out;

  &:hover,
  &:focus {
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.75);
  }

  &:active {
    box-shadow: 0px 1px 9px 0px rgba(0, 0, 0, 0.75) inset;
    -webkit-box-shadow: 0px 1px 9px 0px rgba(0, 0, 0, 0.75) inset;
    -moz-box-shadow: 0px 1px 9px 0px rgba(0, 0, 0, 0.75) inset;
  }
`;

export const InputName = styled.label`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 5px;

  & span {
    font-weight: 600;
  }
`;
