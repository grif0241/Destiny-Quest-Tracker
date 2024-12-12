import { createContext, useEffect, useReducer } from "react";

export const CharactersContext = createContext(null); // allows other components to see stateful characters []
export const CharactersDispatchContext = createContext(null); // allows other components to dispatch action against stateful characters []

function getInitialCharacters() {
  const storedCharacters = localStorage.getItem('characters');
  return storedCharacters ? JSON.parse(storedCharacters) : [];
}

export function CharactersProvider({ children }) {
  const [characters, dispatch] = useReducer(
    charactersReducer, getInitialCharacters()
  );

  // on mount & whenever the stateful characters changes, update localStorage
  useEffect(() => {
    localStorage.setItem('characters', JSON.stringify(characters));
  }, [characters]);

  return (
    // custom component that provides characters and the dispatch function to its children
    <CharactersContext.Provider value={characters}>
      <CharactersDispatchContext.Provider value={dispatch} >
        {children}
      </CharactersDispatchContext.Provider>
    </CharactersContext.Provider>
  )
}

function charactersReducer(characters, action) {
  switch (action.type) {
    case 'created': {
      const { character } = action;
      return [...characters, character]
    }
    case 'edited': {
      const { character: updatedCharacter, id } = action;

      // Update the character with the specified id
      const x = characters.map(char =>
        char.id === id ? { ...char, ...updatedCharacter } : char
      );
      return x;
    }
    case 'deleted': {
      return characters.filter(char => char.id !== action.character.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
