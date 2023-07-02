import PropTypes from 'prop-types';
import { Delete } from './DeleteBtn.styled';

export const DeleteBtn = ({ carId, modalClose, deleteCar }) => {
  const onDeleteBtnClick = () => {
    deleteCar(cars => {
      const filteredCars = cars.filter(car => car.id !== carId);

      return filteredCars;
    });
    modalClose();
  };

  return <Delete onClick={onDeleteBtnClick}>Delete</Delete>;
};

DeleteBtn.propTypes = {
  carId: PropTypes.number.isRequired,
  modalClose: PropTypes.func.isRequired,
  deleteCar: PropTypes.func.isRequired,
};
