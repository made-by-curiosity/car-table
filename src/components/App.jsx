import { useEffect, useMemo, useState } from 'react';
import { Container } from './Container/Container';
import { CarsTable } from './CarsTable/CarsTable';
import { Section } from './Section/Section';

import { getCars } from 'services/carsApi';

export const App = () => {
  const [allCars, setAllCars] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (allCars.length !== 0) {
      return;
    }

    (async () => {
      try {
        const initialCars = await getCars();
        console.log(initialCars);

        setAllCars(initialCars.data.cars);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [allCars.length]);

  const onFilter = e => {
    setQuery(e.target.value.trim());
  };

  const filteredCars = useMemo(() => {
    return allCars.filter(car => {
      const carValues = Object.values(car);
      const isCarValue =
        carValues.includes(query) || carValues.includes(Number(query));
      return isCarValue;
    });
  }, [allCars, query]);

  return (
    <div>
      <Section title="Cars table list">
        <Container>
          <input type="text" name="filter" onChange={onFilter} value={query} />
          <CarsTable cars={filteredCars} />
        </Container>
      </Section>
    </div>
  );
};
