import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CharactersContext } from '../contexts/CharactersContext';
import Nav from '../components/Nav';
import { Accordion, Box } from '@mui/material';
import resources from '../assets/destiny-quest-resources.json';
import villager from '../assets/icons/villager.png';
import mage from '../assets/icons/mage.png';
import battle from '../assets/icons/battle.png';
import diceCube from '../assets/icons/dice-cube.png';
import archer from '../assets/icons/archer.png';
import warrior from '../assets/icons/warrior.png';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ListItem from '@mui/material/ListItem';
import { TextareaAutosize } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import BattleModal from '../components/BattleModal';
import { capitalizeString, capitalizeStringAllLetters } from '../util';

export default function CharacterDetail() {
  const { id } = useParams();
  const characters = useContext(CharactersContext);
  const character = characters.find((char) => char.id === id);
  const { path, career, name, stats, equipment, book, moneyPouch, notes, bag } = character;

  const specialAbilities = calculateSpecialAbilities(character);
  const [battleOpen, setBattleOpen] = React.useState(false);

  const handleClickOpenBattle = () => {
    setBattleOpen(true);
  };

  const handleCloseBattle = () => {
    setBattleOpen(false);
  };

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

  // Define the enum
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
          minHeight: '100vh',
          width: '100%',
          background: 'linear-gradient(to bottom, #3f51b5 55%, transparent 95%)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden',
        }}
      >

        <h1 style={{ color: 'white', }}>{name}, the {capitalizeString(path)}</h1>

        {/* dynamically render career */}
        {career && (<h2 style={{ color: 'white', }}>{capitalizeString(career)}</h2>)}

        {/* stats */}
        <Elevation character={character} />

        {/* image box */}
        <Box
          sx={{
            width: '200px',
            height: '200px',
            backgroundColor: 'lightblue',
            borderRadius: '50%',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '10px solid black',
            marginBottom: 3,
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
              position: 'absolute',
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
            backgroundColor: 'grey',
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
        {/* backpack */}
        <Item>
          <Typography variant="h4" component="div" sx={{ textAlign: 'left' }}>
            Backpack
          </Typography>
          <Box sx={{ maxWidth: '600px', width: '100%' }}>
            <TextareaAutosize
              disabled={true}
              defaultValue={bag}
              aria-label="minimum height" minRows={5} placeholder="Minimum 5 rows" maxRows={10}
              name="notes"
              style={{
                width: '100%',
                boxSizing: 'border-box',
                padding: '8px',
                fontSize: '16px',
              }}
            />

          </Box>
        </Item>
        {/* notes */}
        <Item>
          <Typography variant="h4" component="div" sx={{ textAlign: 'left' }}>
            Notes
          </Typography>
          <Box sx={{ maxWidth: '600px', width: '100%' }}>
            <TextareaAutosize
              disabled={true}
              defaultValue={notes}
              aria-label="minimum height" minRows={5} placeholder="Minimum 5 rows"
              name="notes"
              style={{
                width: '100%',
                boxSizing: 'border-box',
                padding: '8px',
                fontSize: '16px',
              }}
            />
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
  lineHeight: '60px',
  padding: 10,
}));

function Elevation({ character }) {
  const calculatedStats = calculateStats(character);
  const { stats } = character;
  return (
    <Grid container padding={6} spacing={2}>
      {Object?.entries(calculatedStats).map(([key, value]) => (
        <Grid item xs={4} key={key}>
          <Item elevation={10}>
            <>
              <Typography color="text.secondary">
                {key.toLocaleUpperCase()}
              </Typography>
              <Typography variant="h4" component="div" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
            <Typography variant="h4" component="div" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
  const { equipment } = character;
  const stats = {
    armour: 0,
    speed: 0,
    magic: 0,
    brawn: 0,
    health: character.stats.health
  }
  // Convert object values to an array
  const valuesArray = Object.values(equipment);

  const totals = valuesArray.reduce((accumulator, currentItem) => {
    const { armour, speed, magic, brawn } = currentItem;
    stats.armour = stats.armour + armour;
    stats.speed = stats.speed + speed
    stats.magic = stats.magic + magic
    stats.brawn = stats.brawn + brawn
    return stats;
  }, stats);

  return totals;
}

function calculateSpecialAbilities(character) {
  const { equipment } = character;
  const valuesArray = Object.values(equipment);
  const abilities = valuesArray.reduce((accumulator, character) => {
    if (character.specialAbility) {
      accumulator.push(character.specialAbility);
    }
    return accumulator
  }, []);
  return abilities;
}
