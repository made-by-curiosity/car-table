import { useState } from 'react';
import { SearchBtn, SearchInput } from './Filter.styled';

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
    <form onSubmit={onSubmit}>
      <SearchInput
        type="text"
        name="search"
        onChange={onChange}
        value={inputValue}
      />
      <SearchBtn type="submit">Search</SearchBtn>
    </form>
  );
};
