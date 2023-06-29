export const Pagination = ({
  showPrevPage,
  showNextPage,
  page,
  perPage,
  totalCars,
}) => {
  return (
    <div>
      <button type="button" onClick={showPrevPage} disabled={page === 1}>
        Prev page
      </button>
      <span>Page: {page}</span>
      <button
        type="button"
        onClick={showNextPage}
        disabled={page * perPage >= totalCars}
      >
        Next page
      </button>
    </div>
  );
};
