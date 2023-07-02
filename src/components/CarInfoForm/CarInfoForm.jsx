import { useForm } from 'react-hook-form';
import { CarForm, CarInput } from './CarInfoForm.styled';

export const CarInfoForm = ({ editCar, carItem = {} }) => {
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

  const isNewCar = !Object.keys(carItem).length;

  console.log('isNewCar', isNewCar);

  const onSubmit = updatedCar => {
    console.log(updatedCar);

    editCar(cars => {
      return cars.map(car => {
        if (car.id === id) {
          return updatedCar;
        }
        return car;
      });
    });
  };

  return (
    <CarForm onSubmit={handleSubmit(onSubmit)}>
      <CarInput
        type="text"
        {...register('car')}
        placeholder="Company"
        disabled={!isNewCar}
      />
      <CarInput
        type="text"
        {...register('car_model')}
        placeholder="Model"
        disabled={!isNewCar}
      />
      <CarInput
        type="text"
        {...register('car_vin')}
        placeholder="VIN"
        disabled={!isNewCar}
      />
      <CarInput
        type="text"
        {...register('car_model_year')}
        placeholder="Year"
        disabled={!isNewCar}
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
