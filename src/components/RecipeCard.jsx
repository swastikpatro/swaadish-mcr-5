import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  Link as ChakraLink,
  Spacer,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useRecipeContext } from '../RecipeContext';
const RecipeCard = ({ recipeData }) => {
  const { id, cuisine, name, image } = recipeData;
  const { deleteRecipeDispatch } = useRecipeContext();
  return (
    <Card maxW='sm'>
      <CardBody>
        <Image src={image} alt={name} borderRadius='lg' />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{name}</Heading>
          <Text fontWeight={'semibold'} size='md'>
            Cuisine Type: {cuisine}
          </Text>
          <Text fontWeight={'semibold'} size='md'>
            Instructions:{' '}
            <ChakraLink as={Link} to={`/recipe/${id}`}>
              See instructions
            </ChakraLink>
          </Text>
          <Text fontWeight={'semibold'} size='md'>
            Ingredients:{' '}
            <ChakraLink as={Link} to={`/recipe/${id}`}>
              See ingredients
            </ChakraLink>
          </Text>
        </Stack>
      </CardBody>

      <Divider />

      <CardFooter>
        <ButtonGroup spacing='2'>
          {/* <Button variant='solid' colorScheme='blue'>
            Edit
          </Button> */}
          <Button
            variant='ghost'
            colorScheme='blue'
            onClick={() => deleteRecipeDispatch({ recipeId: id })}
          >
            Delete
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default RecipeCard;
