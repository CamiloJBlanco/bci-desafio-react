import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Link,
} from '@chakra-ui/react';

export const FallBackComponent = () => {
  return (
    <>
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
          >
            UPPPS...
            <br />
            <Text as={'span'} color={'green.400'}>
              Seems no data was found
            </Text>
            <Text
              color={'gray.500'}
              fontSize={{ base: 'lg', sm: 'md', md: 'md' }}
            >
              Please try reviewing your internet connection
            </Text>
          </Heading>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}
          >
            <Link href="/">
              <Button
                colorScheme={'green'}
                bg={'green.400'}
                rounded={'full'}
                px={6}
                _hover={{
                  bg: 'green.500',
                }}
              >
                Return to Home
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};
