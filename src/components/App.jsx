import { useEffect, useMemo, useState } from 'react';
import { Container } from './Container/Container';
import { CarsTable } from './CarsTable/CarsTable';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';
import { FilterWrapper } from './FilterWrapper/FilterWrapper';

import { getCars } from 'services/carsApi';
import storage from '../services/localStorageApi';
import { Pagination } from './Pagination/Pagination';

const CARS_STORAGE_KEY = 'all-cars';
const PER_PAGE = 20;

export const App = () => {
  const [allCars, setAllCars] = useState(storage.load(CARS_STORAGE_KEY) ?? []);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (allCars.length !== 0) {
      return;
    }

    (async () => {
      try {
        const initialCars = await getCars();

        setAllCars(initialCars.data.cars);
        storage.save(CARS_STORAGE_KEY, initialCars.data.cars);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [allCars.length]);

  const onSearch = query => {
    setQuery(query.trim().toLowerCase());
    setPage(1);
  };

  const filteredCars = useMemo(() => {
    return allCars.filter(car => {
      const carValues = Object.values(car);
      const normalizedValues = carValues.map(value => {
        if (typeof value === 'string') {
          return value.toLowerCase();
        }
        return value;
      });

      const isCarValue =
        normalizedValues.includes(query) ||
        normalizedValues.includes(Number(query));

      return isCarValue;
    });
  }, [allCars, query]);

  const totalCarsToShow = filteredCars.length > 0 ? filteredCars : allCars;

  const showCurrentCars = () => {
    const startIndex = page * PER_PAGE - PER_PAGE;
    const endIndex = page * PER_PAGE;
    return [...totalCarsToShow].slice(startIndex, endIndex);
  };

  const currentCarsToShow = showCurrentCars();
  console.log(currentCarsToShow);

  const showNextPage = () => {
    setPage(page => page + 1);
  };

  const showPrevPage = () => {
    setPage(page => page - 1);
  };

  return (
    <div>
      <Section title="Cars table list">
        <Container>
          <FilterWrapper>
            <button type="button">Add new car</button>
            <Filter onSearch={onSearch} />
            <div>Total: {totalCarsToShow.length}</div>
            <Pagination
              showNextPage={showNextPage}
              showPrevPage={showPrevPage}
              page={page}
              perPage={PER_PAGE}
              totalCars={totalCarsToShow.length}
            />
          </FilterWrapper>
          <CarsTable cars={currentCarsToShow} />
        </Container>
      </Section>
    </div>
  );
};
