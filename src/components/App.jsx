import { useEffect, useMemo, useState } from 'react';
import { Container } from './Container/Container';
import { CarsTable } from './CarsTable/CarsTable';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';
import { TopActionsSection } from './TopActionsSection/TopActionsSection';
import { Pagination } from './Pagination/Pagination';
import { Modal } from './Modal/Modal';
import { CarInfoForm } from './CarInfoForm/CarInfoForm';
import { AddCarBtn } from './AddCarBtn/AddCarBtn';
import { getCars } from 'services/carsApi';
import storage from '../services/localStorageApi';

const CARS_STORAGE_KEY = 'all-cars';
const PER_PAGE = 20;

export const App = () => {
  const [allCars, setAllCars] = useState(
    () => storage.load(CARS_STORAGE_KEY) ?? []
  );
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  useEffect(() => {
    if (allCars.length !== 0) {
      storage.save(CARS_STORAGE_KEY, allCars);
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
  }, [allCars]);

  const onSearch = query => {
    setQuery(query.trim().toLowerCase());
    setPage(1);
  };

  const showNextPage = () => {
    setPage(page => page + 1);
  };

  const showPrevPage = () => {
    setPage(page => page - 1);
  };

  const filteredCars = useMemo(() => {
    if (!query) {
      return allCars;
    }

    return allCars.filter(car => {
      const carValues = Object.values(car);
      const normalizedValues = carValues.map((value, index, array) => {
        if (array[0] === value) {
          return null;
        }

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

  const showCurrentCars = () => {
    const startIndex = page * PER_PAGE - PER_PAGE;
    const endIndex = page * PER_PAGE;
    return [...filteredCars].slice(startIndex, endIndex);
  };

  const currentCarsToShow = showCurrentCars();

  return (
    <>
      <div>
        <Section title="Cars">
          <Container>
            <TopActionsSection>
              <AddCarBtn onCarAdd={() => setIsAddModalOpen(true)} />
              <Filter onSearch={onSearch} />
              <div>Total: {filteredCars.length}</div>
              <Pagination
                showNextPage={showNextPage}
                showPrevPage={showPrevPage}
                page={page}
                perPage={PER_PAGE}
                totalCars={filteredCars.length}
              />
            </TopActionsSection>
            <CarsTable cars={currentCarsToShow} setAllCars={setAllCars} />
            <Pagination
              showNextPage={showNextPage}
              showPrevPage={showPrevPage}
              page={page}
              perPage={PER_PAGE}
              totalCars={filteredCars.length}
            />
          </Container>
        </Section>
      </div>
      {isAddModalOpen && (
        <Modal onModalClose={setIsAddModalOpen} title="Add new car">
          <CarInfoForm
            onModalClose={() => setIsAddModalOpen(false)}
            setAllCars={setAllCars}
          />
        </Modal>
      )}
    </>
  );
};
