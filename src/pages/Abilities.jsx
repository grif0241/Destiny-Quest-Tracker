import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import resources from '../assets/destiny-quest-resources.json'
import AbilityModal from '../components/AbilityModal';
import Nav from '../components/Nav';
import AbilityComboBox from '../components/AbilityComboBox';
import { Container } from '@mui/material';

export default function Abilities() {
  const [open, setOpen] = React.useState(false);
  const [targetAbility, setTargetAbility] = React.useState({});
  const [query, setQuery] = React.useState('');

  const handleClickOpen = (ev) => {
    setOpen(true);
  };
  const handleClose = (ev) => {
    setOpen(false);
    setTargetAbility({});
  };

  const handleQuery = (ev) => {
    setQuery(ev)
  }

  const {abilities} = resources.legionOfShadow;  

  const filteredAbilities = query
  ? abilities.filter((ability) =>
      ability.name.toLowerCase().includes(query.toLowerCase())
    )
  : abilities;

  // Define the enum
  const AbilityType = {
    PASSIVE: 'pa',
    SPEED: 'sp',
    COMBAT: 'co',
    MODIFIER: 'mo'
  };
  
  // Freeze the object to make it immutable
  Object.freeze(AbilityType);

  // Example usage of the enum
  function getAbilityDescription(type) {
    switch (type) {
      case AbilityType.PASSIVE:
        return 'This is a passive ability.';
      case AbilityType.SPEED:
        return 'This is a speed ability.';
      case AbilityType.COMBAT:
        return 'This is a combat ability.';
      case AbilityType.MODIFIER:
        return 'This is a modifier ability.';
      default:
        return 'Unknown ability type.';
    }
  }

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
        <Grid item xs={12} md={6}>
          <AbilityComboBox handleQuery={handleQuery} />
          <List dense={true}>
            {filteredAbilities.map((ability) => (
              <ListItem
                key={ability.name}
                sx={{ borderBottom: '1px solid #ddd' }}
                onClick={() => {
                  handleClickOpen();
                  setTargetAbility(ability);
                }}
              >
                <ListItemText
                  primary={ability.name}
                  secondary={getAbilityDescription(ability.type)}
                />
              </ListItem>
            ))}
          </List>
          <AbilityModal 
            open={open}
            targetAbility={targetAbility}
            handleClose={handleClose}
          />
        </Grid>
      </Container>
    </>
  );
}
