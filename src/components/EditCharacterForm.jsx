import React, { useState, useContext } from 'react';
import { TextField, Button, MenuItem, Select, InputLabel, FormControl, Box, Grid, Typography } from '@mui/material';
import AbilityComboBox from './AbilityComboBox';
import ItemComboBox from './ItemComboBox';
import Autocomplete from '@mui/material/Autocomplete';
import { CharactersContext, CharactersDispatchContext } from '../contexts/CharactersContext';
import {Divider} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import FullScreenLoading from './FullScreenLoading';
import { capitalizeString } from '../util';

function EditCharacterForm( { careers, paths, items, handleClose } ) {
  const { id } = useParams();
  const navigate = useNavigate();

  const characters = useContext(CharactersContext);
  const character = characters.find((char) => char.id === id);
  console.log(character);

  const dispatch = React.useContext(CharactersDispatchContext);
  const { chest, cloak, feet, gloves, head, leftHand, mainHand, necklace, ring, talisman } = items;
  const {career, path, name, moneyPouch, stats} = character;
  const [formData, setFormData] = useState(character);
  const [loading, setLoading] = useState(false);

  console.log(formData);

  // equipment change handler - Autocomplete does not work with e.target the same way regular form elements do. The event provided by Autocomplete is different
  const handleEquipmentChange = (slot) => (event, newValue) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      equipment: {
        ...prevFormData.equipment,
        [slot]: newValue,
      },
    }));
  };

  const handleHealthChange = (ev, newValue) => {
    const { name, value  } = ev.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      stats: {
        ...prevFormData.stats,
        health: value,
      },
    }));
  }

  // use for regular text content?
  const handleChange = (e) => {
    console.log(e.target.name)
    const { name, value  } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    setLoading(true);
    console.log('Form Data:', formData);
    dispatch({
      type: 'edited',
      character: formData,
      id

    });
    setTimeout(() => {
    // navigate(`/characters/${character.id}`);
    handleClose();

    setLoading(false);
  }, 200);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, width:'100%'}}
    >
      {loading && (<FullScreenLoading />)}

      {/* personal */}
      <Grid sx={{marginTop:{xs: 12, md: 0}}} container spacing={2}>
        <Grid item xs={12}>
          <Typography>Personal</Typography>
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            label="Name"
            name="name"
            value={formData.name || name}
            onChange={handleChange}
            variant="outlined"
            required
            fullWidth
            defaultValue={name}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <FormControl fullWidth={true} variant="outlined" required>
            <InputLabel>Path</InputLabel>
            <Select
              name="path"
              value={formData.path || path}
              onChange={handleChange}
              label="Path"
              defaultValue={path}
            >
              <MenuItem value="villager">Villager</MenuItem>
              <MenuItem value="mage">Mage</MenuItem>
              <MenuItem value="rogue">Archer</MenuItem>
              <MenuItem value="warrior">Warrior</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={3}>
          <FormControl fullWidth={true} variant="outlined" required>
            <InputLabel>Career</InputLabel>
            <Select
              name="career"
              value={formData.career || career}
              onChange={handleChange}
              label="Career"
              defaultValue={career}
              required={false}
              disabled={path == "villager"}
            >
              {careers.map((career) => (
                <MenuItem value={career}> {capitalizeString(career)} </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField 
            type='number'
            name='health'
            label="Health"
            value={formData.stats.health}
            onChange={handleHealthChange}
            variant="outlined"
            required
            fullWidth
            defaultValue={stats.health}
          />
        </Grid>

        <Grid item xs={6} sm={3}>
          <TextField 
            type='number'
            name='moneyPouch'
            label="Gold"
            value={formData.moneyPouch}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            defaultValue={moneyPouch}
          />
        </Grid>
      </Grid>
      <Divider />

      {/* equipment */}
      <Grid sx={{marginTop:0}} container spacing={2}>
        <Grid item xs={12}>
          <Typography>Equipment</Typography>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Autocomplete
            disablePortal
            id="head"
            options={head} // Assuming items.head is an array of options
            getOptionLabel={(option) => option.name} // Display the name of each option
            value={formData.equipment.head} // Default value
            onChange={handleEquipmentChange('head')}
            renderInput={(params) => (
              <TextField {...params} label="Head" name="head" />
            )}
            sx={{ marginBottom: '16px' }}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <Autocomplete
            disablePortal
            id="cloak"
            options={cloak} // Assuming items.cloak is an array of options
            getOptionLabel={(option) => option.name} // Display the name of each option
            value={formData.equipment.cloak} // Default value
            onChange={handleEquipmentChange('cloak')}
            renderInput={(params) => (
              <TextField {...params} label="Cloak" name="cloak" />
            )}
            sx={{ marginBottom: '16px' }}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <Autocomplete
            disablePortal
            id="gloves"
            options={gloves} // Assuming items.gloves is an array of options
            getOptionLabel={(option) => option.name} // Display the name of each option
            value={formData.equipment.gloves} // Default value
            onChange={handleEquipmentChange('gloves')}
            renderInput={(params) => (
              <TextField {...params} label="Gloves" name="gloves" />
            )}
            sx={{ marginBottom: '16px' }}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <Autocomplete
            disablePortal
            id="mainHand"
            options={mainHand} // Assuming items.mainHand is an array of options
            getOptionLabel={(option) => option.name} // Display the name of each option
            value={formData.equipment.mainHand} // Default value
            onChange={handleEquipmentChange('mainHand')}
            renderInput={(params) => (
              <TextField {...params} label="Main hand" name="mainHand" />
            )}
            sx={{ marginBottom: '16px' }}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <Autocomplete
            disablePortal
            id="chest"
            options={chest} // Assuming items.chest is an array of options
            getOptionLabel={(option) => option.name} // Display the name of each option
            value={formData.equipment.chest} // Default value
            onChange={handleEquipmentChange('chest')}
            renderInput={(params) => (
              <TextField {...params} label="Chest" name="chest" />
            )}
            sx={{ marginBottom: '16px' }}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <Autocomplete
            disablePortal
            id="leftHand"
            options={leftHand} // Assuming items.leftHand is an array of options
            getOptionLabel={(option) => option.name} // Display the name of each option
            value={formData.equipment.leftHand} // Default value
            onChange={handleEquipmentChange('leftHand')}
            renderInput={(params) => (
              <TextField {...params} label="Left hand" name="leftHand" />
            )}
            sx={{ marginBottom: '16px' }}
            />
        </Grid>
        <Grid item xs={6} sm={3}>
            <Autocomplete
              disablePortal
              id="talisman"
              options={talisman} // Assuming items.talisman is an array of options
              getOptionLabel={(option) => option.name} // Display the name of each option
              value={formData.equipment.talisman} // Default value
              onChange={handleEquipmentChange('talisman')}
              renderInput={(params) => (
                <TextField {...params} label="Talisman" name="talisman" />
              )}
              sx={{ marginBottom: '16px' }}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <Autocomplete
            disablePortal
            id="feet"
            options={feet} // Assuming items.feet is an array of options
            getOptionLabel={(option) => option.name} // Display the name of each option
            value={formData.equipment.feet} // Default value
            onChange={handleEquipmentChange('feet')}
            renderInput={(params) => (
              <TextField {...params} label="Feet" name="feet" />
            )}
            sx={{ marginBottom: '16px' }}
            />
        </Grid>
        <Grid item xs={6} sm={3}>
          <Autocomplete
            disablePortal
            id="necklace"
            options={necklace} // Assuming items.necklace is an array of options
            getOptionLabel={(option) => option.name} // Display the name of each option
            value={formData.equipment.necklace} // Default value
            onChange={handleEquipmentChange('necklace')}
            renderInput={(params) => (
              <TextField {...params} label="Necklace" name="necklace" />
            )}
            sx={{ marginBottom: '16px' }}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <Autocomplete
            disablePortal
            id="ring1"
            options={ring} // Assuming items.ring is an array of options
            getOptionLabel={(option) => option.name} // Display the name of each option
            value={formData.equipment.ring1} // Default value
            onChange={handleEquipmentChange('ring1')}
            renderInput={(params) => (
              <TextField {...params} label="Ring 1" name="ring1" />
            )}
            sx={{ marginBottom: '16px' }}
            />
        </Grid>
        <Grid item xs={6} sm={3}>
          <Autocomplete
            disablePortal
            id="ring2"
            options={ring} // Assuming items.ring is an array of options
            getOptionLabel={(option) => option.name} // Display the name of each option
            value={formData.equipment.ring2} // Default value
            onChange={handleEquipmentChange('ring2')}
            renderInput={(params) => (
              <TextField {...params} label="Ring 2" name="ring2" />
            )}
            sx={{ marginBottom: '16px' }}
            />
        </Grid>
      </Grid>
      <Divider />

      {/* backpack */}
      <Grid sx={{marginTop:0}} container spacing={2}>
        <Grid item xs={12}>
          <Typography>Backpack</Typography>
        </Grid>
      </Grid>
      <Divider />

      <Button type="submit" variant="contained" color="primary">
        Save
      </Button>
    </Box>
  );
}

export default EditCharacterForm;