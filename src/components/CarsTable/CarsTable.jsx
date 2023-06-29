import { Table, TableData, TableHeader } from './CarsTable.styled';

export const CarsTable = ({ cars }) => {
  console.log(cars);

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <TableHeader>Company</TableHeader>
            <TableHeader>Model</TableHeader>
            <TableHeader>VIN</TableHeader>
            <TableHeader>Color</TableHeader>
            <TableHeader>Year</TableHeader>
            <TableHeader>Price</TableHeader>
            <TableHeader>Availability</TableHeader>
            <TableHeader>Actions</TableHeader>
          </tr>
        </thead>
        <tbody>
          {cars.map(
            ({
              id,
              car,
              car_model,
              car_color,
              car_model_year,
              car_vin,
              price,
              availability,
            }) => (
              <tr key={id}>
                <TableData>{car}</TableData>
                <TableData>{car_model}</TableData>
                <TableData>{car_vin}</TableData>
                <TableData>{car_color}</TableData>
                <TableData>{car_model_year}</TableData>
                <TableData>{price}</TableData>
                <TableData>
                  {availability ? 'Available' : 'Not Available'}
                </TableData>
                <TableData>Edit/Delete</TableData>
              </tr>
            )
          )}
        </tbody>
      </Table>
    </div>
  );
};
