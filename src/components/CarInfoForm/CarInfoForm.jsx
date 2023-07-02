import { useForm } from 'react-hook-form';
import { CarForm, CarInput } from './CarInfoForm.styled';

export const CarInfoForm = ({ editCar, onModalClose, carItem = {} }) => {
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

  console.log('isNewCar', isNewCar);

  const onSubmit = updatedCar => {
    if (!isNewCar) {
      editCar(cars => {
        return cars.map(car => {
          if (car.id === id) {
            return {
              ...car,
              availability:
                updatedCar.availability === 'true' ||
                updatedCar.availability === true,
              car_color: updatedCar.car_color,
              price: updatedCar.price,
            };
          }
          return car;
        });
      });
      onModalClose();
      return;
    }
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
