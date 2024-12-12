import React, { useState, useContext } from 'react';
import { TextField, Button, MenuItem, Select, InputLabel, FormControl, Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Autocomplete from '@mui/material/Autocomplete';
import { TextareaAutosize } from '@mui/material';
import { CharactersContext, CharactersDispatchContext } from '../contexts/CharactersContext';
import { Divider } from '@mui/material';
import { useParams } from 'react-router-dom';
import FullScreenLoading from './FullScreenLoading';
import { capitalizeString } from '../util';

function EditCharacterForm({ careers, paths, items, handleClose }) {
  const { id } = useParams();

  const characters = useContext(CharactersContext);
  const character = characters.find((char) => char.id === id);

  const dispatch = React.useContext(CharactersDispatchContext);
  const { chest, cloak, feet, gloves, head, leftHand, mainHand, necklace, ring, talisman } = items;
  const { career, path, name, moneyPouch, stats, notes, bag } = character;
  const [formData, setFormData] = useState(character);
  const [loading, setLoading] = useState(false);

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
    const { name, value } = ev.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      stats: {
        ...prevFormData.stats,
        health: value,
      },
    }));
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    setLoading(true);
    dispatch({
      type: 'edited',
      character: formData,
      id

    });
    setTimeout(() => {
      handleClose();
      setLoading(false);
    }, 200);
  };

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '80%',
    lineHeight: '60px',
    padding: 10,
  }));

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%', height: '100%', marginTop: '30px' }}
    >
      {loading && (<FullScreenLoading />)}

      {/* personal */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography>Personal</Typography>
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            label="Name"
            name="name"
            defaultValue={name}
            onChange={handleChange}
            variant="outlined"
            required
            fullWidth
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
              <MenuItem value="archer">Archer</MenuItem>
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
      <Grid sx={{ marginTop: 0 }} container spacing={2}>
        <Grid item xs={12}>
          <Typography>Equipment</Typography>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Autocomplete
            disablePortal
            id="head"
            options={head}
            getOptionLabel={(option) => option.name}
            value={formData.equipment.head}
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
            options={cloak}
            getOptionLabel={(option) => option.name}
            value={formData.equipment.cloak}
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
            options={gloves}
            getOptionLabel={(option) => option.name}
            value={formData.equipment.gloves}
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
            options={mainHand}
            getOptionLabel={(option) => option.name}
            value={formData.equipment.mainHand}
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
            options={chest}
            getOptionLabel={(option) => option.name}
            value={formData.equipment.chest}
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
            options={leftHand} s
            getOptionLabel={(option) => option.name}
            value={formData.equipment.leftHand}
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
            options={talisman}
            getOptionLabel={(option) => option.name}
            value={formData.equipment.talisman}
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
            options={feet}
            getOptionLabel={(option) => option.name}
            value={formData.equipment.feet}
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
            options={necklace}
            getOptionLabel={(option) => option.name}
            value={formData.equipment.necklace}
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
            options={ring}
            getOptionLabel={(option) => option.name}
            value={formData.equipment.ring1}
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
            options={ring}
            getOptionLabel={(option) => option.name}
            value={formData.equipment.ring2}
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
      <Grid sx={{ marginTop: 0 }} container spacing={2}>
        <Grid item xs={12}>
          <Typography>Backpack</Typography>
          <Box sx={{ maxWidth: '600px', width: '100%' }}>
            <TextareaAutosize
              defaultValue={bag}
              name="bag"
              onChange={handleChange}
              style={{
                width: '100%',
                boxSizing: 'border-box',
                padding: '8px',
                fontSize: '16px',
              }}
              aria-label="minimum height"
              minRows={5}
              maxRows={10}
              placeholder="Note backpack items here"
            />
          </Box>
        </Grid>
      </Grid>
      <Divider />

      {/* notes */}
      <Grid sx={{ marginTop: 0 }} container spacing={2}>
        <Grid item xs={12}>
          <Typography>Notes</Typography>
          <Box sx={{ maxWidth: '600px', width: '100%' }}>
            <TextareaAutosize
              defaultValue={notes}
              name="notes"
              onChange={handleChange}
              style={{
                width: '100%',
                boxSizing: 'border-box',
                padding: '8px',
                fontSize: '16px',
              }}
              aria-label="minimum height"
              minRows={5}
              placeholder="Scribble notes here"
            />
          </Box>
        </Grid>
      </Grid>
      <Divider />
      <Button type="submit" variant="contained" color="primary">
        Save
      </Button>
      <Divider />
    </Box>
  );
}

export default EditCharacterForm;