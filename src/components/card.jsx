/* eslint-disable jsx-a11y/alt-text */
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Badge,
  List,
  ListItem,
  ListIcon,
  Button,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { CapitalizedString } from '@/utils/capitalizedString';
import { FormatString } from '@/utils/formatString';
import { LoaderComponent } from './loader';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { CardImagesHeader } from './cardImagesHeader';
import { JoinArray } from '@/utils/joinArray';

export const CardComponent = ({ pokemonDetails, id }) => {
  const location = useSelector((state) => state.location);

  const habilities = pokemonDetails?.abilities?.map(
    (ability) => ability.ability.name
  );
  const attacks = pokemonDetails?.moves?.map((move) => move.move.name);
  const evolution = pokemonDetails?.forms?.map((form) => form.name);

  const locations = location?.map((loc) =>
    FormatString(loc.location_area.name)
  );

  const locationsName =
    locations && locations.length > 0
      ? JoinArray(locations)
      : 'No location found';

  const shouldBeDisplayed = pokemonDetails?.id && pokemonDetails?.name;

  return (
    <>
      {shouldBeDisplayed ? (
        <Center py={6}>
          <Box
            maxW={'470px'}
            w={'full'}
            boxShadow={'2xl'}
            rounded={'md'}
            overflow={'hidden'}
          >
            <CardImagesHeader id={id} />

            <Box p={6}>
              <Stack spacing={0} align={'center'} mb={3}>
                <Text
                  color={'green.500'}
                  textTransform={'uppercase'}
                  fontWeight={800}
                  fontSize={'sm'}
                  letterSpacing={1.1}
                >
                  {pokemonDetails.id}
                </Text>
                <Heading fontSize={'2xl'} fontFamily={'body'}>
                  {CapitalizedString(pokemonDetails.name)}
                </Heading>
                <Text color={'gray.500'} mt={6}>
                  <strong>Atacks:</strong> {JoinArray(attacks)}
                </Text>
              </Stack>

              <Box px={6} py={10}>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={CheckIcon} color="green.400" />
                    <strong>Habilities:</strong> {JoinArray(habilities)}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckIcon} color="green.400" />
                    <strong>Forms:</strong> {JoinArray(evolution)}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckIcon} color="green.400" />
                    <strong>Location/s:</strong> {locationsName}
                  </ListItem>
                </List>
              </Box>

              <Stack
                align={'center'}
                justify={'center'}
                direction={'row'}
                mt={6}
              >
                {pokemonDetails?.types?.map((type) => (
                  <Badge key={type.slot} px={2} py={1} fontWeight={'400'}>
                    {`# ${type.type.name}`}
                  </Badge>
                ))}
              </Stack>

              <Button
                w={'full'}
                mt={8}
                color={'white'}
                rounded={'md'}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}
              >
                <Link
                  href={{
                    pathname: `/pokemon/characteristics/${id}`,
                    query: { id, name: pokemonDetails.name },
                  }}
                >
                  Check characteristics!
                </Link>
              </Button>
            </Box>
          </Box>
        </Center>
      ) : (
        <LoaderComponent />
      )}
    </>
  );
};
