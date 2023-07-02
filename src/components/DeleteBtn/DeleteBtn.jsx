export const DeleteBtn = ({ carId, modalClose, deleteCar }) => {
  const onDeleteBtnClick = () => {
    deleteCar(cars => {
      const filteredCars = cars.filter(car => car.id !== carId);

      return filteredCars;
    });
    modalClose();
  };

  return <button onClick={onDeleteBtnClick}>Delete</button>;
};
