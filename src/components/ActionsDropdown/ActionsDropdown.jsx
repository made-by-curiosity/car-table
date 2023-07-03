import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { MdDeleteForever, MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { BiSolidEdit } from 'react-icons/bi';
import {
  Actions,
  ActionsBtn,
  DeleteBtn,
  Dropdown,
  EditBtn,
} from './ActionsDropdown.styled';
import { Modal } from 'components/Modal/Modal';
import { CarInfoForm } from 'components/CarInfoForm/CarInfoForm';
import { DeleteConfirmation } from 'components/DeleteConfirmation/DeleteConfirmation';

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

  return (
    <Dropdown>
      <ActionsBtn
        type="button"
        onClick={onDropdownClick}
        isDropdownOpen={isDropdownOpen}
      >
        <MdOutlineKeyboardArrowDown />
      </ActionsBtn>

      {isDropdownOpen && (
        <Actions>
          <EditBtn type="button" onClick={() => setIsEditModalOpen(true)}>
            <BiSolidEdit />
          </EditBtn>
          <DeleteBtn type="button" onClick={() => setIsDeleteModalOpen(true)}>
            <MdDeleteForever />
          </DeleteBtn>
        </Actions>
      )}

      {isDeleteModalOpen && (
        <Modal onModalClose={setIsDeleteModalOpen} title="Delete car">
          <DeleteConfirmation
            modalClose={() => setIsDeleteModalOpen(false)}
            setAllCars={setAllCars}
            carItem={carItem}
          />
        </Modal>
      )}

      {isEditModalOpen && (
        <Modal onModalClose={setIsEditModalOpen} title="Editing">
          <CarInfoForm
            carItem={carItem}
            setAllCars={setAllCars}
            onModalClose={() => setIsEditModalOpen(false)}
          />
        </Modal>
      )}
    </Dropdown>
  );
};

ActionsDropdown.propTypes = {
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
  setAllCars: PropTypes.func.isRequired,
};
