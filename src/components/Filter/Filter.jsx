import { useState } from 'react';

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
      <input type="text" name="search" onChange={onChange} value={inputValue} />
      <button type="submit">Search</button>
    </form>
  );
};
