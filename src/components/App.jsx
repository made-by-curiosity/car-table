import { useEffect, useMemo, useState } from 'react';
import { Container } from './Container/Container';
import { CarsTable } from './CarsTable/CarsTable';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';
import { FilterWrapper } from './FilterWrapper/FilterWrapper';

import { getCars } from 'services/carsApi';
import storage from '../services/localStorageApi';

const CARS_STORAGE_KEY = 'all-cars';

export const App = () => {
  const [allCars, setAllCars] = useState(storage.load(CARS_STORAGE_KEY) ?? []);
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

  const carsToShow = filteredCars.length > 0 ? filteredCars : allCars;

  return (
    <div>
      <Section title="Cars table list">
        <Container>
          <FilterWrapper>
            <button type="button">Add new car</button>
            <Filter onSearch={onSearch} />
            <div>Total: {carsToShow.length}</div>
          </FilterWrapper>
          <CarsTable cars={carsToShow} />
        </Container>
      </Section>
    </div>
  );
};
