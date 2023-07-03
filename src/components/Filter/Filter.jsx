import PropTypes from 'prop-types';
import { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { SearchBtn, SearchForm, SearchInput } from './Filter.styled';

export const Filter = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const onChange = e => {
    setInputValue(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    onSearch(inputValue);

    setInputValue('');
  };

  return (
    <SearchForm onSubmit={onSubmit}>
      <SearchInput
        type="text"
        name="search"
        onChange={onChange}
        value={inputValue}
        autoFocus
        autoComplete="off"
      />
      <SearchBtn type="submit">
        <BiSearchAlt />
      </SearchBtn>
    </SearchForm>
  );
};

Filter.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
