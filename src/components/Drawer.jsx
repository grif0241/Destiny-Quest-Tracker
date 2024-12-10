import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import BoltIcon from '@mui/icons-material/Bolt';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MenuIcon from '@mui/icons-material/Menu';
import { ArrowBack } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function Drawer({page}) {
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    left: false,
  });

  // used on CharacterDetail page
  const handleBackClick = () => {
    navigate('/characters');
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {/* the pages */}
      {[
        {name: 'Characters', icon: <PersonIcon />}, 
        {name: 'Items', icon: <AssignmentIcon />},
        {name: 'Abilities', icon: <BoltIcon />},
      ].map((nav) => (
        <ListItem key={nav.name} disablePadding>
          <ListItemButton component={Link} to={`/${nav.name.toLowerCase()}`}>
            <ListItemIcon>
              {nav.icon}
            </ListItemIcon>
            <ListItemText primary={nav.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
      <Divider />
      <List>
        {[
          {name: 'Settings', icon: <PersonIcon />}, 
          {name: 'Credits', icon: <AssignmentIcon />},
        ].map((nav, index) => (
          <ListItem key={nav.name} disablePadding>
            <ListItemButton component={Link} to={`/${nav.name.toLowerCase()}`}>
              <ListItemIcon>
                {nav.icon}
              </ListItemIcon>
              <ListItemText primary={nav.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment key={'left'}>
      {/* If on CharacterDetail - show back btn */}
      {page === 'CHARACTER' ? <ArrowBack onClick={handleBackClick} /> : 
        <MenuIcon onClick={toggleDrawer('left', true)}></MenuIcon>
      }
      <SwipeableDrawer
        anchor={'left'}
        open={state.left}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        {list('left')}
      </SwipeableDrawer>
    </React.Fragment>
  );
}
