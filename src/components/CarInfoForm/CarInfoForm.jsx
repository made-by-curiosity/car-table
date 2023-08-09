import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import {
  AvailabilitySelect,
  CarForm,
  CarInput,
  ErrorInputMessage,
  FieldName,
  InputName,
  SubmitBtn,
} from './CarInfoForm.styled';

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

  const isNewCar = !Object.keys(carItem).length;

  const onSubmit = carToSave => {
    setAllCars(cars => {
      const newCar = {
        ...carToSave,
        id: Date.now(),
        car_model_year: Number(carToSave.car_model_year),
        availability: carToSave.availability === 'true',
      };

      const updatedCars = cars.map(car => {
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

      return isNewCar ? [newCar, ...cars] : updatedCars;
    });

    onModalClose();
  };

  return (
    <CarForm onSubmit={handleSubmit(onSubmit)}>
      <InputName>
        <FieldName>
          Company: <ErrorInputMessage>{errors.car?.message}</ErrorInputMessage>
        </FieldName>
        <CarInput
          type="text"
          {...register('car', {
            disabled: !isNewCar,
            required: 'This field is required!',
            maxLength: {
              value: 26,
              message: 'Should not be longer than 26 characters',
            },
          })}
          placeholder="Mitsubishi"
          autoComplete="off"
          autoFocus={isNewCar}
        />
      </InputName>
      <InputName>
        <FieldName>
          Model:{' '}
          <ErrorInputMessage>{errors.car_model?.message}</ErrorInputMessage>
        </FieldName>
        <CarInput
          type="text"
          {...register('car_model', {
            disabled: !isNewCar,
            required: 'This field is required!',
            maxLength: {
              value: 26,
              message: 'Should not be longer than 26 characters',
            },
          })}
          placeholder="Lancer Evolution"
          autoComplete="off"
        />
      </InputName>
      <InputName>
        <FieldName>
          VIN: <ErrorInputMessage>{errors.car_vin?.message}</ErrorInputMessage>
        </FieldName>
        <CarInput
          type="text"
          {...register('car_vin', {
            disabled: !isNewCar,
            required: 'This field is required!',
            maxLength: {
              value: 26,
              message: 'Should not be longer than 26 characters',
            },
          })}
          placeholder="WAU2GBFCXDN339713"
          autoComplete="off"
        />
      </InputName>
      <InputName>
        <FieldName>
          Year:{' '}
          <ErrorInputMessage>
            {errors.car_model_year?.message}
          </ErrorInputMessage>
        </FieldName>
        <CarInput
          type="text"
          {...register('car_model_year', {
            disabled: !isNewCar,
            required: 'This field is required!',
            pattern: {
              value: /^(19|20)\d{2}$/,
              message: 'Choose year from 1900 until Now',
            },
          })}
          placeholder="2002"
          autoComplete="off"
        />
      </InputName>
      <InputName>
        <FieldName>
          Color:{' '}
          <ErrorInputMessage>{errors.car_color?.message}</ErrorInputMessage>
        </FieldName>
        <CarInput
          type="text"
          {...register('car_color', {
            required: 'This field is required!',
            maxLength: {
              value: 26,
              message: 'Should not be longer than 26 characters',
            },
          })}
          placeholder="Goldenrod"
          autoComplete="off"
          autoFocus={!isNewCar}
        />
      </InputName>
      <InputName>
        <FieldName>
          Price: <ErrorInputMessage>{errors.price?.message}</ErrorInputMessage>
        </FieldName>
        <CarInput
          type="text"
          {...register('price', {
            required: 'This field is required!',
            maxLength: {
              value: 26,
              message: 'Should not be longer than 26 characters',
            },
          })}
          placeholder="$3849.47"
          autoComplete="off"
        />
      </InputName>
      <AvailabilitySelect
        {...register('availability')}
        defaultValue={availability}
      >
        <option value={true}>Available</option>
        <option value={false}>Not Available</option>
      </AvailabilitySelect>
      <SubmitBtn type="submit" {...register('submit')}>
        Submit
      </SubmitBtn>
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
