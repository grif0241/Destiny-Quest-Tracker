import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from './Drawer';
import { useLocation } from 'react-router-dom';
import CreateCharacterModal from './CreateCharacterModal';
import { useParams } from 'react-router-dom';
import { CharactersContext } from '../contexts/CharactersContext';
import EditCharacterModal from './EditCharacterModal';
import resources from '../assets/destiny-quest-resources.json';

export default function ButtonAppBar() {
  const {id} = useParams();
  const characters = React.useContext(CharactersContext);
  const character = characters.find((char) => char.id === id);
  let items = null;
  let careers = null; 
  let paths = null; 
  
  const location = useLocation();
  const {pathname} = location;

  if (character) {
    const { book } = character;
    items = getBookItems(book, resources);
    careers = getCareers(book, resources);
    paths = getPaths(book, resources);
  }


  const [open, setOpen] = React.useState(false);
  const [editOpen, setEditOpen] = React.useState(false);

  // create character
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // edit specific character
  const handleClickOpenEdit = () => {
    setEditOpen(true);
  };

  const handleCloseEdit = () => {
    setEditOpen(false);
  };
  
  const getCurrentPageName = () => {
    let page = null;

    const characterDetailPattern = /\/characters\/[0-9a-fA-F\-]{36}/;
    const characterDetailEditPattern = /\/[0-9a-fA-F\-]{36}\/edit/;

    if (characterDetailEditPattern.test(pathname)) {
      page = `EDIT`;
    } else if(characterDetailPattern.test(pathname)) {
      page = `CHARACTER`;
    } else {
      page = pathname.split('/')[1].toLocaleUpperCase();
    }
    return page;
  };

  const page = getCurrentPageName();

  return (
    <AppBar position="static"> {/* Add margin here */}
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <Drawer page={page} />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {page}
        </Typography>
        {/* create btn */}
        { page === "CHARACTERS" ? <Button onClick={handleClickOpen} color="inherit">Create</Button> : null }

        {/* edit btn */}
        { page === "CHARACTER" ? <Button onClick={handleClickOpenEdit} color="inherit">Edit</Button> : null }
          
      </Toolbar>
        <CreateCharacterModal open={open} handleClose={handleClose} />
        <EditCharacterModal careers={careers} paths={paths} items={items} character={character} open={editOpen} handleClose={handleCloseEdit} />
    </AppBar>
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

function getCareers(book, data) {
  let careers = null;
  switch(book) {
    case "Legion of Shadow":
      careers = data?.legionOfShadow.careers;
      console.log(careers);
      return careers;
    default:
      careers = ['bnope'];
      return careers
  }
}

function getPaths(book, data) {
  let paths = null;
  switch(book) {
    case "Legion of Shadow":
      paths = data?.legionOfShadow.paths;
      console.log(paths);
      return paths;
    default:
      paths = ['bnope'];
      return paths
  }
}