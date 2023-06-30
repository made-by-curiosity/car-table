import PropTypes from 'prop-types';
import { PaginationBtn, PaginationContainer } from './Pagination.styled';

export const Pagination = ({
  showPrevPage,
  showNextPage,
  page,
  perPage,
  totalCars,
}) => {
  const totalPages = Math.ceil(totalCars / perPage);

  return (
    <PaginationContainer>
      <PaginationBtn type="button" onClick={showPrevPage} disabled={page === 1}>
        Previous
      </PaginationBtn>
      <span>
        Page {page} of {totalPages}
      </span>
      <PaginationBtn
        type="button"
        onClick={showNextPage}
        disabled={page * perPage >= totalCars}
      >
        Next
      </PaginationBtn>
    </PaginationContainer>
  );
};

Pagination.propTypes = {
  showPrevPage: PropTypes.func.isRequired,
  showNextPage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  totalCars: PropTypes.number.isRequired,
};
