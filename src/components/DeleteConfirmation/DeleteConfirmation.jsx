import PropTypes from 'prop-types';
import { DeleteBtn } from 'components/DeleteBtn/DeleteBtn';
import {
  DeleteBtnContainer,
  DeleteCancel,
  DeleteConfirm,
  DeleteMessage,
} from './DeleteConfirmation.styled';

export const DeleteConfirmation = ({ carItem, modalClose, setAllCars }) => {
  const { id, car, car_model, car_color, car_model_year, car_vin } = carItem;

  return (
    <DeleteConfirm>
      <DeleteMessage>{`Are you sure you want to delete ${car} ${car_model} ${car_color} ${car_model_year} ${car_vin}?`}</DeleteMessage>

      <DeleteBtnContainer>
        <DeleteBtn carId={id} modalClose={modalClose} deleteCar={setAllCars} />
        <DeleteCancel type="button" onClick={modalClose}>
          Cancel
        </DeleteCancel>
      </DeleteBtnContainer>
    </DeleteConfirm>
  );
};

DeleteConfirmation.propTypes = {
  carItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    car: PropTypes.string.isRequired,
    car_model: PropTypes.string.isRequired,
    car_color: PropTypes.string.isRequired,
    car_model_year: PropTypes.number.isRequired,
    car_vin: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    availability: PropTypes.bool.isRequired,
  }),
  modalClose: PropTypes.func.isRequired,
  setAllCars: PropTypes.func.isRequired,
};
