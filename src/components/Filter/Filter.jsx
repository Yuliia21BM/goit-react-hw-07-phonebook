import { Box } from '../Box';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { chatngeFilterValue } from '../redux/filterSlice';

import { FilterInput, FilterTitle } from './Filter.styled';

const filterId = nanoid();

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(chatngeFilterValue(e.currentTarget.value.toLowerCase()));
  };
  return (
    <Box display="flex" flexDirection="column">
      <FilterTitle htmlFor={filterId}>Finde contact by name</FilterTitle>
      <FilterInput type="text" id={filterId} onChange={handleFilterChange} />
    </Box>
  );
};
