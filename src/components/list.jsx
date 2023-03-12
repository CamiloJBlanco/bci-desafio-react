import { CapitalizedString } from '@/utils/capitalizedString';
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
import { MdCatchingPokemon } from 'react-icons/Md';
import { useDispatch } from 'react-redux';
import { setPokemon } from '../store/store';

export const ListComponent = ({ data }) => {

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
                <ListIcon as={MdCatchingPokemon} color="green.300" />
                {result?.name && (
                  <Link
                    href={`/pokemon/${id}`}
                    onClick={() => handleButtonClick(result)}
                  >
                    <Text fontWeight="bold">
                      {CapitalizedString(result.name)}
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
