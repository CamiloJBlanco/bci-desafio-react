/* eslint-disable jsx-a11y/alt-text */
import { Avatar, Flex, Image } from '@chakra-ui/react';
import React from 'react';

export const CardImagesHeader = ({ id }) => {
  return (
    <>
      <Image
        h={'120px'}
        w={'full'}
        src={
          'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
        }
        objectFit={'cover'}
      />
      <Flex justify={'center'} mt={-12}>
        <Avatar
          size={'xl'}
          src={`https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/${id}.png`}
          alt={'Pokemon'}
          css={{
            border: '2px solid white',
          }}
        />
      </Flex>
    </>
  );
};
