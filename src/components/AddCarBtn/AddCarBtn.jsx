import { AddBtn } from './AddCarBtn.styled';

export const AddCarBtn = ({ onCarAdd }) => {
  return (
    <AddBtn type="button" onClick={onCarAdd}>
      Add car
    </AddBtn>
  );
};
