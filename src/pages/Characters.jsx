import React, {useContext} from 'react';
import CharacterCard from '../components/CharacterCard';
import Nav from '../components/Nav';
import { CharactersContext, CharactersDispatchContext } from '../contexts/CharactersContext';
import { Container } from '@mui/material';

export default function Characters() {
  const characters = useContext(CharactersContext);
  return (
    // page container
    <>
      <Nav />
      <Container
        sx={{ 
          marginTop:4,
          paddingX: {xs: '16px', md: 0}
        }}
      >
        { characters.length > 0 ? characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        )): "No characters"}
      </Container>
    </>
  )
}
