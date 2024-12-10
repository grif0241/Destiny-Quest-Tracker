import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ItemComboBox( {handleQuery, handleChange, items, slot}) {

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={items}
      getOptionLabel={(option) => option.name} // Define which property to use as the label
      sx={{ width: "100%" }}
      renderInput={(params) => <TextField {...params} name={slot} label={slot} />}
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