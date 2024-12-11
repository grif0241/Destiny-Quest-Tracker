import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import villager from '../assets/icons/villager.png';
import archer from '../assets/icons/archer.png';
import mage from '../assets/icons/mage.png';
import warrior from '../assets/icons/warrior.png';
import { Link, useNavigate } from 'react-router-dom';
import { CharactersContext, CharactersDispatchContext } from '../contexts/CharactersContext';
import { capitalizeString } from '../util';

export default function CharacterCard({ character }) {
  const navigate = useNavigate();

  const characterImages = {
    villager,
    archer,
    mage,
    warrior
  };

  const getCharacterImage = (job) => {
    switch (job) {
      case "villager":
        return characterImages.villager;
      case "warrior":
        return characterImages.warrior;
      case "archer":
        return characterImages.archer;
      case "mage":
        return characterImages.mage;
    }
  }

  const handleNavigate = () => {
    navigate('/characters');
  };

  const dispatch = React.useContext(CharactersDispatchContext);
  return (
    <Card
      sx={{ backgroundColor: 'lightGreen', marginBottom: 2, paddingX: 5, minWidth: 275, display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignContent: 'center', alignItems: 'center' }}
      onClick={() => console.log('open character dialogue')}
    >
      <img
        width="50px"
        height="50px"
        src={getCharacterImage(character.path)}
        alt="Villager"
        style={{
          borderRadius: '50%',
          objectFit: 'cover'
        }}
      />
      <Link
        to={`/characters/${character.id}`}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
          <Typography variant="h4" component="div" sx={{ display: 'flex', alignItems: 'center' }}>
            {character?.name}
          </Typography>
          <Typography sx={{}} color="text.secondary">
            {capitalizeString(character?.path)}
          </Typography>
        </CardContent>
      </Link>
      <button onClick={
        () => {
          dispatch({
            type: 'deleted',
            character
          })
        }
      } >Delete</button>
    </Card>
  );
}
