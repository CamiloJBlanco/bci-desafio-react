import React from 'react';
import { Box, Heading, Container, Text, Stack } from '@chakra-ui/react';

export const HomeComponent = () => {
  return (
    <>
      <Container maxW={'4xl'}>
        <Stack as={Box} textAlign={'center'} spacing={{ base: 4, md: 8 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'100%'}
          >
            Pokédex <br />
            <Text as={'span'} color={'blue.400'}>
              create by Camilo
            </Text>
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
    </>
  );
};
