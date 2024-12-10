import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import resources from '../assets/destiny-quest-resources.json';

export default function AbilityComboBox( {handleQuery}) {
  const {abilities} = resources.legionOfShadow;  

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={abilities}
      getOptionLabel={(option) => option.name} // Define which property to use as the label
      sx={{ width: "100%" }}
      renderInput={(params) => <TextField {...params} name="Ability" label="Ability" />}
      onChange={(event, value) => {
        if (value) {
          handleQuery(value.name);
        } else {
          handleQuery('');
        }
      }}
    />
  );
}