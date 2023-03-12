import { useState } from 'react';
import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from '@chakra-ui/react';

export const SearchBar = ({ setName }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    setName(searchTerm.toLowerCase());
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}
    >
      <Stack spacing={3} mt={5} mb={5}>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            placeholder="Start looking for your favorite Pokémon..."
            value={searchTerm}
            onChange={handleInputChange}
          />
          <InputRightElement width="6rem">
            <Button h="2rem" size="sm" type="submit">
              {'Search'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </Stack>
    </form>
  );
};
