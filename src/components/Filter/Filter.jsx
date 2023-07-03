import PropTypes from 'prop-types';
import { useState } from 'react';
import { SearchBtn, SearchForm, SearchInput } from './Filter.styled';
import { BiSearchAlt } from 'react-icons/bi';

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
