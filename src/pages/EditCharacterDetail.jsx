import React from 'react';
import { Container } from '@mui/material';
import Nav from '../components/Nav';
import resources from '../assets/destiny-quest-resources.json';
import { useParams } from 'react-router-dom';
import { CharactersContext, CharactersDispatchContext } from '../contexts/CharactersContext';
import EditCharacterForm from '../components/EditCharacterForm';

export default function EditCharacterDetail() {
  const {id} = useParams();
  const characters = React.useContext(CharactersContext);
  const character = characters.find((char) => char.id === id);
  const [query, setQuery] = React.useState('');
  const {book} = character;
  const items = getBookItems(book, resources);
  console.log(resources);

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
        <EditCharacterForm character={character} items={items} />
      </Container>
    </>
  );
}

function getBookItems(book, data) {
  let items = null;
  switch(book) {
    case "Legion of Shadow":
      items = data?.legionOfShadow.items;
      console.log(items);
      return items;
    default:
      items = ['bnope'];
      return items
  }
}