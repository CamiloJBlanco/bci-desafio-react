import {
  Box,
  Grid,
  GridItem,
  List,
  ListIcon,
  ListItem,
  Text,
} from '@chakra-ui/react';
import { CgPokemon } from 'react-icons/Cg';

export const ListComponent = ({ data }) => {
  const capitalizedString = (name) =>
    name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={5} alignItems="center" ml={5}>
      {(Array.isArray(data) ? data : [data]).map((result, index) => (
        <GridItem key={index}>
          <List>
            <ListItem display="flex" alignItems="center">
              <ListIcon as={CgPokemon} color="red.500" />
              {result?.name && (
                <Text fontWeight="bold">{capitalizedString(result.name)}</Text>
              )}
            </ListItem>
          </List>
        </GridItem>
      ))}
    </Grid>
  );
};
