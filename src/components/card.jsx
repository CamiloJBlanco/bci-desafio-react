/* eslint-disable jsx-a11y/alt-text */
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  Badge,
  List,
  ListItem,
  ListIcon,
  Image,
  Flex,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { CapitalizedString } from '@/utils/capitalizedString';
import { FormatString } from '@/utils/formatString';

export const CardComponent = ({ data, id, location }) => {
  const habilities = data?.abilities?.map((ability) => ability.ability.name);
  const atacks = data?.moves?.map((move) => move.move.name);
  const evolution = data?.forms?.map((form) => form.name);

  const locations = location?.map((loc) =>
    FormatString(loc.location_area.name)
  );

  const locationsName = locations ? locations.join(', ') : 'No location found';

  return (
    <Center py={6}>
      <Box
        maxW={'470px'}
        w={'full'}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
      >
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

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={3}>
            <Text
              color={'green.500'}
              textTransform={'uppercase'}
              fontWeight={800}
              fontSize={'sm'}
              letterSpacing={1.1}
            >
              {data.id}
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'}>
              {CapitalizedString(data.name)}
            </Heading>
            <Text color={'gray.500'} mt={6}>
              <strong>Atacks:</strong> {atacks?.join(', ')}
            </Text>
          </Stack>

          <Box px={6} py={10}>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                <strong>Habilities:</strong> {habilities?.join(', ')}
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                <strong>Forms:</strong> {evolution?.join(', ')}
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                <strong>Location:</strong> {locationsName}
              </ListItem>
            </List>
          </Box>

          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            {data?.types?.map((type) => (
              <Badge key={type.slot} px={2} py={1} fontWeight={'400'}>
                {`# ${type.type.name}`}
              </Badge>
            ))}
          </Stack>
        </Box>
      </Box>
    </Center>
  );
};
