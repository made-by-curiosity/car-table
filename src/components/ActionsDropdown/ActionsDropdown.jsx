import { useEffect, useState } from 'react';
import { Actions, ActionsBtn, Dropdown } from './ActionsDropdown.styled';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { DeleteBtn } from 'components/DeleteBtn/DeleteBtn';
import { Modal } from 'components/Modal/Modal';
import { CarInfoForm } from 'components/CarInfoForm/CarInfoForm';

export const ActionsDropdown = ({ carItem, setAllCars }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    if (!isDropdownOpen) {
      return;
    }

    const onDropdownHide = () => {
      setIsDropdownOpen(false);
    };

    const onEscDropdownHide = e => {
      if (e.code === `Escape`) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener('click', onDropdownHide);
    window.addEventListener('keydown', onEscDropdownHide);

    return () => {
      window.removeEventListener('click', onDropdownHide);
      window.removeEventListener('keydown', onEscDropdownHide);
    };
  });

  const onDropdownClick = e => {
    e.stopPropagation();
    setIsDropdownOpen(isOpen => !isOpen);
  };

  const { id, car, car_model, car_color, car_model_year, car_vin } = carItem;

  return (
    <Dropdown>
      <ActionsBtn type="button" onClick={onDropdownClick}>
        <MdOutlineKeyboardArrowDown />
      </ActionsBtn>

      {isDropdownOpen && (
        <Actions>
          <button type="button" onClick={() => setIsEditModalOpen(true)}>
            Edit
          </button>
          <button type="button" onClick={() => setIsDeleteModalOpen(true)}>
            Delete
          </button>
        </Actions>
      )}

      {isDeleteModalOpen && (
        <Modal onModalClose={setIsDeleteModalOpen}>
          {`Are you sure you want to delete ${car} ${car_model} ${car_color} ${car_model_year} ${car_vin}?`}
          <br />
          <DeleteBtn
            carId={id}
            modalClose={() => setIsDeleteModalOpen(false)}
            deleteCar={setAllCars}
          />
          <button type="button" onClick={() => setIsDeleteModalOpen(false)}>
            Cancel
          </button>
        </Modal>
      )}

      {isEditModalOpen && (
        <Modal
          onModalClose={setIsEditModalOpen}
          title={`Editing "${car} ${car_model} ${car_color} ${car_model_year} ${car_vin}"`}
        >
          <CarInfoForm
            carItem={carItem}
            editCar={setAllCars}
            onModalClose={() => setIsEditModalOpen(false)}
          />
        </Modal>
      )}
    </Dropdown>
  );
};
