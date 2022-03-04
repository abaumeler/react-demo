import {
  Box,
  Badge,
  Image,
  useColorModeValue
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons'
import React from 'react';

function Receipe() {
  const receipe = {
      imageUrl: 'https://media.istockphoto.com/photos/lasagna-picture-id635833122',
      imageAlt: 'Tasty Lasagne',
      difficulty: 3,
      vegetarian: false,
      title: 'Lasagne',
      effort: '65 min',
      reviewCount: 34,
      rating: 4,
  }

  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
    <Image src={receipe.imageUrl} alt={receipe.imageAlt} />

    <Box p='6'>
      <Box display='flex' alignItems='baseline'>
        <Badge borderRadius='full' px='2' colorScheme='teal'>
          New
        </Badge>
        <Box
          color='gray.500'
          fontWeight='semibold'
          letterSpacing='wide'
          fontSize='xs'
          textTransform='uppercase'
          ml='2'
        >
          difficulty {receipe.difficulty} &bull; {receipe.vegetarian ? 'vegetarian' : 'not vegetarian'}
        </Box>
      </Box>

      <Box
        mt='1'
        fontWeight='semibold'
        as='h4'
        lineHeight='tight'
        isTruncated
      >
        {receipe.title}
      </Box>

      <Box>
        Preptime {receipe.effort}
        <Box as='span' color='gray.600' fontSize='sm'></Box>
      </Box>

      <Box display='flex' mt='2' alignItems='center'>
        {Array(5)
          .fill('')
          .map((_, i) => (
            <StarIcon
              key={i}
              color={i < receipe.rating ? 'teal.500' : 'gray.300'}
            />
          ))}
        <Box as='span' ml='2' color='gray.600' fontSize='sm'>
          {receipe.reviewCount} reviews
        </Box>
      </Box>
    </Box>
  </Box>
  );
}
export default Receipe;