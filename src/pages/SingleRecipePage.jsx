import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const SingleRecipePage = () => {
  const { recipeId } = useParams();
  return <Box as='main'>SingleRecipePage {recipeId}</Box>;
};

export default SingleRecipePage;
