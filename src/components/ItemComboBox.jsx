import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import resources from '../assets/destiny-quest-resources.json';

export default function ItemComboBox({ handleQuery }) {
  const { items } = resources.legionOfShadow;
  const allItems = Object.values(items).flat();

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={allItems}
      getOptionLabel={(option) => option.name} // Define which property to use as the label
      sx={{ width: "100%" }}
      renderInput={(params) => <TextField {...params} name="Item" label="Item" />}
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