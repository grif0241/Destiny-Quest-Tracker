import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Container, Grid } from '@mui/material';
import Slide from '@mui/material/Slide';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import diceCubeOutline from '../assets/icons/dice-cube-outline.png';
import diceCube from '../assets/icons/dice-cube.png';
import Popover from '@mui/material/Popover';
import resources from '../assets/destiny-quest-resources.json';
import Checkbox from '@mui/material/Checkbox';
import dice1 from '../assets/icons/dice-1.png';
import dice2 from '../assets/icons/dice-2.png';
import dice3 from '../assets/icons/dice-3.png';
import dice4 from '../assets/icons/dice-4.png';
import dice5 from '../assets/icons/dice-5.png';
import dice6 from '../assets/icons/dice-6.png';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function BattleModal({specialAbilities, calculateStats, character, open, handleClose}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const stats = calculateStats(character);
  console.log(specialAbilities);

  const {abilities} = resources.legionOfShadow;  
  console.log(abilities)

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedAbility, setSelectedAbility] = React.useState(null);

  const handleClick = (event, ability) => {
    setAnchorEl(event.currentTarget);
    setSelectedAbility(ability);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setSelectedAbility(null);
  };

  const openBool = Boolean(anchorEl);
  const id = openBool ? 'simple-popover' : undefined;


  return (
    <React.Fragment>
      
      <Dialog
        fullWidth={true}
        maxWidth={'lg'}
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        fullScreen={fullScreen} // Enable full screen on small screens
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              BATTLE
            </Typography>
          </Toolbar>
        </AppBar>
        <Container
            sx={{
              display: 'flex',
              flexDirection: 'column',
              // justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
              backgroundColor: 'lightSteelBlue'
            }}
        >
          <span>
            <h2>{character.name} stats</h2>
            <p>Speed: {stats.speed}</p>
            <p>Armour: {stats.armour}</p>
            <p>Magic: {stats.magic}</p>
            <p>Brawn: {stats.brawn}</p>
          </span>

          <span>
          <ul>
            {specialAbilities.map((ability) => (
              <div key={ability} style={{ margin: '10px' }}>
                <Button aria-describedby={id} variant="contained" onClick={(event) => handleClick(event, ability)}>
                  {ability.toLowerCase()}
                </Button>
                <Popover
                  id={id}
                  open={open && selectedAbility === ability}
                  // anchorEl={anchorEl}
                  onClose={handlePopoverClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                >
                  <Typography sx={{ p: 2 }}>
                    {
                      abilities
                        .filter((ab) => ab.name?.toLowerCase() === ability?.toLowerCase())
                        .map((ab) => <p key={ab.name}>{ab.description}</p>)
                    }
                  </Typography>
                </Popover>
          <input type="checkbox" name={ability} id={ability} />
        </div>
      ))}
            </ul>
          </span>
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={6} sm={6}>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <label style={{ color: 'whitesmoke', fontSize: 'x-large' }} htmlFor="hero-health">Hero Health: </label>
                <input id="hero-health" name="hero-health" type="number" defaultValue={character.stats.health} min="0" max="100" />
              </div>
            </Grid>
            <Grid item xs={6} sm={6}>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <label style={{ color: 'whitesmoke', fontSize: 'x-large' }} htmlFor="enemy-health">Enemy Health: </label>
                <input id="enemy-health" name="enemy-health" type="number" defaultValue={0} min="0" max="100" />
              </div>
            </Grid>
          </Grid>

          <FlexboxGapStack />
        </Container>
      </Dialog>
    </React.Fragment>
  );
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  flexGrow: 1,
}));

function FlexboxGapStack() {

  const [roll, setRoll] = React.useState(null);
  const rollDice = () => {
    const value = Math.floor(Math.random() * 6) + 1;
    return value;
  }

  const handleSpeedRoll = () => {
    const value1 = rollDice();
    const value2 = rollDice();
    const total = value1 + value2;
    setRoll(total);
    return total;
  }

  const handleDamageRoll = () => {
    const value = rollDice();
    setRoll(value);
    return value;
  }

  return (
    <Box sx={{ width: 360, margin: '16px auto' }}>
      <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
        <Item
          sx={{
            backgroundColor:'lightYellow'
          }}  
        >
          <Button onClick={handleSpeedRoll}>Roll Speed</Button>
          <img 
            src={diceCube} 
            style={{           
              width: '25px',
              height: '25px',
              borderRadius: '50%',}} 
            alt="" 
          />
        </Item>
        <Item
          sx={{
            backgroundColor:'lavenderblush'
          }} 
        >
          <Button onClick={handleDamageRoll}>Roll Damage</Button>
          <img 
            src={diceCubeOutline} 
            style={{           
              width: '25px',
              height: '25px',
              borderRadius: '50%',}} 
            alt="" 
          />
        </Item>
        <Item>
          {roll ? <h1>{roll}</h1> : <h1>Roll dice to battle</h1>}
        </Item>
      </Stack>
    </Box>
  );
}

