import React, { useEffect } from 'react';
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
import { CardImagesHeader } from './cardImagesHeader';
import { CapitalizedString } from '@/utils/capitalizedString';
import Link from 'next/link';
import { useSelector } from 'react-redux';

export const CharacteristicsCard = ({ id, name }) => {
  const characteristics = useSelector((state) => state.characteristics);

  const description = characteristics?.descriptions
    .filter((obj) => obj.language.name === 'en')
    .map((obj) => obj.description);

  return (
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
              {id}
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'}>
              {CapitalizedString(name)}
            </Heading>
          </Stack>

          <Box px={6} py={10}>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                <strong>Description: </strong>
                {description}
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                <strong>Highest Stat: </strong>
                {characteristics.highest_stat.name}
              </ListItem>
            </List>
          </Box>

          <Text color={'gray.500'} mt={6} textAlign="center">
            <strong>Possible values: </strong>
          </Text>

          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            {characteristics?.possible_values?.map((value) => (
              <Badge key={value} px={2} py={1} fontWeight={'400'}>
                {`# ${value}`}
              </Badge>
            ))}
          </Stack>

          <Link
            href={{
              pathname: `/pokemon/${id}`,
            }}
          >
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
              Return to details!
            </Button>
          </Link>
        </Box>
      </Box>
    </Center>
  );
};
