import { Button, Flex, Stack, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export const ToggleComponent = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex h={16} alignItems={'center'} justifyContent={'right'} mr={3}>
      <Stack direction={'row'} spacing={7}>
        <Button onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Stack>
    </Flex>
  );
};
