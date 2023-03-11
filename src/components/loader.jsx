import { CircularProgress, Stack, Box, Text } from '@chakra-ui/react';

export const LoaderComponent = () => {
  return (
    <Text textAlign={'center'} mt={'15'}>
      <CircularProgress isIndeterminate color="green.300" />
    </Text>
  );
};
