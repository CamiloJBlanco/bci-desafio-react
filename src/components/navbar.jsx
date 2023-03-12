import { Box, Flex, Image, Link } from '@chakra-ui/react';
import { ToggleComponent } from './toggle';

export const NavBar = () => {
  return (
    <>
      <Box px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Link href="/">
            <Image
              alt="homeButton"
              src="/pokeball.png"
              width={8}
              height={8}
            />
          </Link>
          <ToggleComponent />
        </Flex>
      </Box>
    </>
  );
};
