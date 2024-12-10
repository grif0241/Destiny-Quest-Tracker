import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CharactersContext } from '../contexts/CharactersContext';
import Nav from '../components/Nav';
import { Box } from '@mui/material';
import resources from '../assets/destiny-quest-resources.json';
import villager from '../assets/icons/villager.png';
import rogue from '../assets/icons/rogue.png';
import mage from '../assets/icons/mage.png';
import battle from '../assets/icons/battle.png';
import diceCube from '../assets/icons/dice-cube.png';
import warrior from '../assets/icons/warrior.png';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import BattleModal from '../components/BattleModal';
import { capitalizeString, capitalizeStringAllLetters } from '../util';

export default function CharacterDetail() {
  const { id } = useParams();
  const characters = useContext(CharactersContext);
  const character = characters.find((char) => char.id === id);
  const { path, career, name, stats, equipment, book, moneyPouch } = character;

  const specialAbilities = calculateSpecialAbilities(character);
  const [battleOpen, setBattleOpen] = React.useState(false);

  const handleClickOpenBattle = () => {
    setBattleOpen(true);
  };

  const handleCloseBattle = () => {
    setBattleOpen(false);
  };

  // TODO clean
  const characterImages = {
    villager,
    rogue,
    mage,
    warrior
  };

  const getCharacterImage = (job) => {
    switch(job) {
      case "villager" :
        return characterImages.villager;
      case "warrior" :
        return characterImages.warrior;
      case "rogue" :
        return characterImages.rogue;
      case "mage" :
        return characterImages.mage;
    }
  }

  // Define the enum todo
  const EquipmentSlot = {
    PASSIVE: 'pa',
    SPEED: 'sp',
    COMBAT: 'co',
    MODIFIER: 'mo'
  };

  return (
    <>
      <Nav />
      <BattleModal specialAbilities={specialAbilities} calculateStats={calculateStats} character={character} open={battleOpen} handleClose={handleCloseBattle} />
      <Box
        sx={{
          padding: 0,
          minHeight: '100vh', // Ensures the Box takes at least the full viewport height
          width: '100%',
          background: 'linear-gradient(to bottom, #3f51b5 20%, transparent 95%)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column', // Allow content to flow vertically
          position: 'relative', // Ensure positioning context for the image
          overflow: 'hidden', // Hide overflow if necessary
        }}
      >

        <h1 style={{color: 'white',}}>{name}, the {capitalizeString(path)}</h1>
        {/* dynamically render career */}
        {career && (<h2 style={{color: 'white',}}>{capitalizeString(career)}</h2>)}
    
        {/* stats */}
        <Elevation character={character} />

        {/* image box */}
        <Box
          sx={{
            width: '200px',
            height: '200px',
            backgroundColor: 'lightblue', // Change this to the desired background color
            borderRadius: '50%', // Keep the image inside a circle
            position: 'relative', // Ensure the image is positioned within the container
            overflow: 'hidden', // Hide any overflow from the image
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '10px solid black',
            marginBottom: 3, // Add margin if needed
          }}
        >
          <img
            src={getCharacterImage(character.path)}
            alt="Path Icon"
            style={{
              width: '100%', 
              height: '100%',
              borderRadius: '50%',
              objectFit: 'cover',
              position: 'absolute', // Ensure it is centered inside the container
            }}
          />
        </Box>

        {/* combat button */}
        <button
          onClick={handleClickOpenBattle}
          style={{
            width: '75px',
            height: '75px',
            borderRadius: '50%',
            border: '3px solid grey',
            padding: 0,
            marginBottom: '20px',
            background: 'none',
            backgroundColor:'grey',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={battle}
            alt="Battle Icon"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
            }}
          />
        </button>

        {/* equipment */}
        <Item>
          <Typography variant="h4" component="div" sx={{ textAlign: 'left' }}>
            Equipment
          </Typography>

          <Box sx={{ textAlign: 'left', padding: '16px' }}>
            {Object.entries(equipment).map(([key, value]) => (
              <Typography key={key} color="text.secondary" sx={{ marginBottom: '8px' }}>
                {capitalizeString(key)}:
                {typeof value === 'object' ? (
                  // If value is an object, convert to a string or render specific properties
                  <span>
                    <ListItem
                      key={value.name}
                      sx={{ borderBottom: '1px solid #ddd' }}
                      onClick={() => {
                        console.log(value);
                    }}
                    >
                      <ListItemText
                        primary={value.name}
                        secondary={
                          <Typography component="span">
                            {value.speed > 0 && <span>Speed +{value.speed} | </span>}
                            {value.brawn > 0 && <span>Brawn +{value.brawn} | </span>}
                            {value.magic > 0 && <span>Magic +{value.magic} | </span>}
                            {value.armour > 0 && <span>Armour +{value.armour} | </span>}
                            {value.specialAbility && <strong>{capitalizeStringAllLetters(value.specialAbility)}</strong>}
                          </Typography>
                        }
                      />
                    </ListItem>
                  </span>
                ) : (
                  // If value is not an object, render it directly
                  ` ${value}`
                )}
              </Typography>
            ))}
          </Box>
        </Item>
      </Box>
    </>
  );
}

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width: '80%',
  // height: '100%',
  lineHeight: '60px',
  padding:10,
}));

function Elevation({character}) {
  const calculatedStats = calculateStats(character);
  const { stats } = character;
  console.log(stats);
  console.log(calculatedStats);
  return (
    <Grid container padding={6} spacing={2}>
      {Object?.entries(calculatedStats).map(([key, value]) => (
        <Grid item xs={4} key={key}>
          <Item elevation={10}>
            <>
              <Typography color="text.secondary">
                {key.toLocaleUpperCase()}
              </Typography>
              <Typography variant="h4" component="div" sx={{ display: 'flex', alignItems: 'center', justifyContent:'center' }}>
                {value}
              </Typography>
            </>
          </Item>
        </Grid>
      ))}
      
      {/* moneyPouch */}
      <Grid item xs={4} key={'key'}>
          <Item elevation={10}>
            <>
              <Typography color="text.secondary">
                {'Gold'.toLocaleUpperCase()}
              </Typography>
              <Typography variant="h4" component="div" sx={{ display: 'flex', alignItems: 'center', justifyContent:'center' }}>
                {character.moneyPouch}
              </Typography>
            </>
          </Item>
      </Grid>
  </Grid>
  );
}

// stat calcuations
function calculateStats(character) {
  const {equipment} = character;
  const stats = {
    armour: 0,
    speed: 0,
    magic: 0,
    brawn:0,
    health: character.stats.health
  }
  // Convert object values to an array
  const valuesArray = Object.values(equipment);

  const totals = valuesArray.reduce((accumulator, currentItem) => {
    const {armour, speed, magic, brawn} = currentItem;
    stats.armour = stats.armour + armour;
    stats.speed = stats.speed + speed
    stats.magic = stats.magic + magic
    stats.brawn = stats.brawn + brawn
    return stats;
  }, stats);

  return totals;
}

function calculateSpecialAbilities(character) {
  const {equipment} = character;
  const valuesArray = Object.values(equipment);
  const abilities = valuesArray.reduce((accumulator, character) => {
    if(character.specialAbility) {
      accumulator.push(character.specialAbility);
    }
    return accumulator
  }, []);
  return abilities;
}
