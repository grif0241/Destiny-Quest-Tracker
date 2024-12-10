import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import resources from '../assets/destiny-quest-resources.json';
import Nav from '../components/Nav';
import { Container } from '@mui/material';

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

export default function Items() {
  
  return (
    <>
      <Nav />
      <Container
        sx={{ 
          marginTop:4,
          paddingX: {xs: '16px', md: 0}
        }}
      >
        <Grid item xs={12} md={6}>
          <List dense={true}>
            {generate(
              <ListItem>
                <ListItemText
                  primary="Single-line item"
                  secondary={'Secondary text'}
                  />
              </ListItem>,
            )}
          </List>
        </Grid>
      </Container>
    </>
  );
}
