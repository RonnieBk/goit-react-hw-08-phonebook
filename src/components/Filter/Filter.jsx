import { setFilter } from '../../redux/contacts/filterSlice';
import { useDispatch } from 'react-redux';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = evt => {
    const { value } = evt.target;
    dispatch(setFilter(value));
  };

  return (
    <FormControl>
      <FormLabel htmlFor="filter">Find by name</FormLabel>
      <Input
        type="text"
        id="filter"
        name="filter"
        onChange={handleChange}
        placeholder="Search"
        _placeholder={{ color: 'teal' }}
        mb="10px"
        borderColor="teal"
        focusBorderColor="teal.400"
      />
    </FormControl>
  );
};
