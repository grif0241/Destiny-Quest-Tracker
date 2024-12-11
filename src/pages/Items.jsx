import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import resources from '../assets/destiny-quest-resources.json'
import AbilityModal from '../components/AbilityModal';
import Nav from '../components/Nav';
import AbilityComboBox from '../components/AbilityComboBox';
import ItemComboBox from '../components/ItemComboBox';
import { Container } from '@mui/material';
import ItemModal from '../components/ItemModal';

export default function Items() {
  const [open, setOpen] = React.useState(false);
  const [targetItem, setTargetItem] = React.useState({});
  const [query, setQuery] = React.useState('');

  const handleClickOpen = (ev) => {
    setOpen(true);
  };
  const handleClose = (ev) => {
    setOpen(false);
    setTargetItem({});
  };

  const handleQuery = (ev) => {
    setQuery(ev)
  }

  // flatten the item array
  const { items } = resources.legionOfShadow;
  const allItems = Object.values(items).flat();

  const filteredItems = query
    ? allItems.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    )
    : allItems;

  // Define the enum
  const ItemType = {
    PASSIVE: 'pa',
    SPEED: 'sp',
    COMBAT: 'co',
    MODIFIER: 'mo'
  };

  // Freeze the object to make it immutable
  Object.freeze(ItemType);

  // Example usage of the enum
  function getItemDescription(type) {
    switch (type) {
      case ItemType.PASSIVE:
        return 'This is a passive Item.';
      case ItemType.SPEED:
        return 'This is a speed Item.';
      case ItemType.COMBAT:
        return 'This is a combat Item.';
      case ItemType.MODIFIER:
        return 'This is a modifier Item.';
      default:
        return 'Unknown Item type.';
    }
  }

  return (
    // page container
    <>
      <Nav />
      <Container
        sx={{
          marginTop: 4,
          paddingX: { xs: '16px', md: 0 }
        }}
      >
        <Grid item xs={12} md={6}>
          <ItemComboBox handleQuery={handleQuery} />
          <List dense={true}>
            {filteredItems.map((item) => (
              <ListItem
                key={item.name}
                sx={{ borderBottom: '1px solid #ddd' }}
                onClick={() => {
                  handleClickOpen();
                  setTargetItem(item);
                }}
              >
                <ListItemText
                  primary={`${item.name}`}
                // secondary={`Item`}
                />
                <ListItemText
                  primary={`${item.speed}`}
                  secondary={`sp`}
                />
                <ListItemText
                  primary={`${item.brawn}`}
                  secondary={'br'}
                />
                <ListItemText
                  primary={`${item.magic}`}
                  secondary={'ma'}
                />
                <ListItemText
                  primary={`${item.specialAbility}`}
                // secondary={'ability'}
                />
              </ListItem>
            ))}
          </List>
          <ItemModal
            open={open}
            targetItem={targetItem}
            handleClose={handleClose}
          />
        </Grid>
      </Container>
    </>
  );
}
