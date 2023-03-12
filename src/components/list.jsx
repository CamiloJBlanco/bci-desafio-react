import {
  Box,
  Grid,
  GridItem,
  List,
  ListIcon,
  ListItem,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { CgPokemon } from 'react-icons/Cg';
import { useDispatch } from 'react-redux';
import { setPokemon } from '../store/store';

export const ListComponent = ({ data }) => {
  const capitalizedString = (name) =>
    name.charAt(0).toUpperCase() + name.slice(1);

  const dispatch = useDispatch();

  const handleButtonClick = (data) => {
    dispatch(setPokemon(data));
  };

  return (
    <Grid templateColumns="repeat(6, 1fr)" gap={5} alignItems="center" ml={5}>
      {(Array.isArray(data) ? data : [data]).map((result, index) => {
        const id = result.url?.split('/').filter(Boolean).pop() ?? result.id;
        return (
          <GridItem key={index}>
            <List>
              <ListItem display="flex" alignItems="center">
                <ListIcon as={CgPokemon} color="red.500" />
                {result?.name && (
                  <Link
                    href={`/pokemon/${id}`}
                    onClick={() => handleButtonClick(result)}
                  >
                    <Text fontWeight="bold">
                      {capitalizedString(result.name)}
                    </Text>
                  </Link>
                )}
              </ListItem>
            </List>
          </GridItem>
        );
      })}
    </Grid>
  );
};
