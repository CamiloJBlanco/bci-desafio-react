import { Box, Heading, Container, Text, Stack } from '@chakra-ui/react';
import { ListComponent } from './list';
import { LoaderComponent } from './loader';
import { SearchBar } from './searchBar';

export const HomeComponent = ({ data, fetching, error, setName }) => {
  return (
    <>
      <Container maxW={'4xl'}>
        <Stack as={Box} textAlign={'center'} spacing={{ base: 4, md: 8 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
            lineHeight={'100%'}
          >
            Pokédex
          </Heading>
          <Text
            color={'gray.500'}
            fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
            textAlign={'center'}
          >
            This app has been created and designed to catalog and provide
            information regarding the various species of Pokémon featured in the
            Pokémon video game, anime and manga series.
          </Text>
        </Stack>
      </Container>

      <SearchBar setName={setName} />

      <Box mt={5}>
        {fetching && !data ? (
          <LoaderComponent />
        ) : !fetching && error ? (
          'No se han encontrado resultados, prueba verificando el nombre del Pokémon...'
        ) : (
          <ListComponent data={data} />
        )}
      </Box>
    </>
  );
};
