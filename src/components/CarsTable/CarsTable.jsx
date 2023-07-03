import PropTypes from 'prop-types';
import { Table, TableData, TableHeader, TableRow } from './CarsTable.styled';
import { ActionsDropdown } from 'components/ActionsDropdown/ActionsDropdown';

export const CarsTable = ({ cars, setAllCars }) => {
  return (
    <Table>
      <thead>
        <TableRow>
          <TableHeader>Company</TableHeader>
          <TableHeader>Model</TableHeader>
          <TableHeader>VIN</TableHeader>
          <TableHeader>Color</TableHeader>
          <TableHeader>Year</TableHeader>
          <TableHeader>Price</TableHeader>
          <TableHeader>Availability</TableHeader>
          <TableHeader>Actions</TableHeader>
        </TableRow>
      </thead>
      <tbody>
        {cars.map((carItem, idx) => {
          const {
            id,
            car,
            car_model,
            car_color,
            car_model_year,
            car_vin,
            price,
            availability,
          } = carItem;
          return (
            <TableRow key={id}>
              <TableData>{car}</TableData>
              <TableData>{car_model}</TableData>
              <TableData>{car_vin}</TableData>
              <TableData>{car_color}</TableData>
              <TableData>{car_model_year}</TableData>
              <TableData>{price}</TableData>
              <TableData>
                {availability ? 'Available' : 'Not Available'}
              </TableData>
              <TableData>
                <ActionsDropdown
                  carItem={carItem}
                  setAllCars={setAllCars}
                  carIdx={idx}
                />
              </TableData>
            </TableRow>
          );
        })}
      </tbody>
    </Table>
  );
};

CarsTable.propTypes = {
  setAllCars: PropTypes.func.isRequired,
  cars: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      car: PropTypes.string.isRequired,
      car_model: PropTypes.string.isRequired,
      car_color: PropTypes.string.isRequired,
      car_model_year: PropTypes.number.isRequired,
      car_vin: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      availability: PropTypes.bool.isRequired,
    })
  ),
};
