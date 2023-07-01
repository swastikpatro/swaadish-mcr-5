import { createContext, useContext, useReducer } from 'react';
import { recipes } from './recipesData';

const RecipeContext = createContext(null);

export const useRecipeContext = () => useContext(RecipeContext);

const initialState = {
  recipeList: recipes,
};

const recipeReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_RECIPE': {
      return {
        ...state,
        recipeList: [...state.recipeList, action.payload],
      };
    }
    case 'DELETE_RECIPE': {
      return {
        ...state,
        recipeList: state.recipeList.filter(({ id }) => id !== action.payload),
      };
    }
    case 'EDIT_RECIPE': {
      return {
        ...state,
        recipeList: state.recipeList.map((singleRecipe) => {
          if (singleRecipe.id === action.payload.id) {
            return action.payload;
          } else {
            return singleRecipe;
          }
        }),
      };
    }

    default:
      throw new Error(`Error: ${action.type} does not exist`);
  }
};

const RecipeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(recipeReducer, initialState);

  const deleteRecipeDispatch = ({ recipeId }) => {
    dispatch({ type: 'DELETE_RECIPE', payload: recipeId });
  };

  const addRecipeDispatch = ({ recipe }) => {
    dispatch({ type: 'ADD_RECIPE', payload: recipe });
  };
  const editRecipeDispatch = ({ recipe }) => {
    dispatch({ type: 'EDIT_RECIPE', payload: recipe });
  };
  return (
    <RecipeContext.Provider
      value={{
        ...state,
        deleteRecipeDispatch,
        addRecipeDispatch,
        editRecipeDispatch,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeContextProvider;
