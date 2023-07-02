import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { CarForm, CarInput } from './CarInfoForm.styled';

export const CarInfoForm = ({ setAllCars, onModalClose, carItem = {} }) => {
  const {
    id = '',
    car = '',
    car_model = '',
    car_color = '',
    car_model_year = '',
    car_vin = '',
    price = '',
    availability = true,
  } = carItem;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id,
      car,
      car_model,
      car_color,
      car_model_year,
      car_vin,
      price,
      availability,
    },
  });

  console.log(errors);

  const isNewCar = !Object.keys(carItem).length;

  const onSubmit = carToSave => {
    if (!isNewCar) {
      setAllCars(cars => {
        return cars.map(car => {
          if (car.id === id) {
            return {
              ...car,
              availability:
                carToSave.availability === 'true' ||
                carToSave.availability === true,
              car_color: carToSave.car_color,
              price: carToSave.price,
            };
          }
          return car;
        });
      });
      onModalClose();
      return;
    }

    const newCar = {
      ...carToSave,
      id: Date.now(),
      car_model_year: Number(carToSave.car_model_year),
      availability: carToSave.availability === 'true',
    };

    setAllCars(cars => [newCar, ...cars]);
    onModalClose();
  };

  return (
    <CarForm onSubmit={handleSubmit(onSubmit)}>
      <CarInput
        type="text"
        {...register('car', {
          disabled: !isNewCar,
        })}
        placeholder="Company"
      />
      <CarInput
        type="text"
        {...register('car_model', {
          disabled: !isNewCar,
        })}
        placeholder="Model"
      />
      <CarInput
        type="text"
        {...register('car_vin', {
          disabled: !isNewCar,
        })}
        placeholder="VIN"
      />
      <CarInput
        type="text"
        {...register('car_model_year', {
          disabled: !isNewCar,
        })}
        placeholder="Year"
      />
      <CarInput type="text" {...register('car_color')} placeholder="Color" />
      <CarInput type="text" {...register('price')} placeholder="Price" />
      <select {...register('availability')} defaultValue={availability}>
        <option value={true}>Available</option>
        <option value={false}>Not Available</option>
      </select>
      <button type="submit" {...register('submit')}>
        Submit
      </button>
    </CarForm>
  );
};

CarInfoForm.propTypes = {
  setAllCars: PropTypes.func.isRequired,
  onModalClose: PropTypes.func.isRequired,
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
};
