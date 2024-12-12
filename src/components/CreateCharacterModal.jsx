import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Divider } from '@mui/material';
import { CharactersContext, CharactersDispatchContext } from '../contexts/CharactersContext';
import { v4 as uuidv4 } from 'uuid';
import { capitalizeString } from '../util';

export default function CreateCharacterModal({ open, handleClose }) {
  const dispatch = React.useContext(CharactersDispatchContext);

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const { name } = formJson;
            dispatch({
              type: 'created',
              character: {
                id: uuidv4(),
                name: capitalizeString(name),
                stats: {
                  speed: 0,
                  brawn: 0,
                  magic: 0,
                  armor: 0,
                  health: 30
                },
                book: "Legion of Shadow",
                moneyPouch: 10,
                path: 'villager',
                career: '',
                specialAbilties: [],
                backPack: [
                  {
                    slot: 1,
                    item: ''
                  },
                  {
                    slot: 2,
                    item: ''
                  },
                  {
                    slot: 3,
                    item: ''
                  },
                  {
                    slot: 4,
                    item: ''
                  },
                  {
                    slot: 5,
                    item: ''
                  },
                ],
                equipment: {
                  cloak: {
                    name: '',
                    speed: 0,
                    brawn: 0,
                    magic: 0,
                    armour: 0,
                    specialAbility: '',
                    entryNo: 0,
                    locationEnemy: '',
                  },
                  head: {
                    name: '',
                    speed: 0,
                    brawn: 0,
                    magic: 0,
                    armour: 0,
                    specialAbility: '',
                    entryNo: 0,
                    locationEnemy: '',
                  },
                  gloves: {
                    name: '',
                    speed: 0,
                    brawn: 0,
                    magic: 0,
                    armour: 0,
                    specialAbility: '',
                    entryNo: 0,
                    locationEnemy: '',
                  },
                  mainHand: {
                    name: '',
                    speed: 0,
                    brawn: 0,
                    magic: 0,
                    armour: 0,
                    specialAbility: '',
                    entryNo: 0,
                    locationEnemy: '',
                  },
                  chest: {
                    name: '',
                    speed: 0,
                    brawn: 0,
                    magic: 0,
                    armour: 0,
                    specialAbility: '',
                    entryNo: 0,
                    locationEnemy: '',
                  },
                  leftHand: {
                    name: '',
                    speed: 0,
                    brawn: 0,
                    magic: 0,
                    armour: 0,
                    specialAbility: '',
                    entryNo: 0,
                    locationEnemy: '',
                  },
                  talisman: {
                    name: '',
                    speed: 0,
                    brawn: 0,
                    magic: 0,
                    armour: 0,
                    specialAbility: '',
                    entryNo: 0,
                    locationEnemy: '',
                  },
                  feet: {
                    name: '',
                    speed: 0,
                    brawn: 0,
                    magic: 0,
                    armour: 0,
                    specialAbility: '',
                    entryNo: 0,
                    locationEnemy: '',
                  },
                  necklace: {
                    name: '',
                    speed: 0,
                    brawn: 0,
                    magic: 0,
                    armour: 0,
                    specialAbility: '',
                    entryNo: 0,
                    locationEnemy: '',
                  },
                  ring1: {
                    name: '',
                    speed: 0,
                    brawn: 0,
                    magic: 0,
                    armour: 0,
                    specialAbility: '',
                    entryNo: 0,
                    locationEnemy: '',
                  },
                  ring2: {
                    name: '',
                    speed: 0,
                    brawn: 0,
                    magic: 0,
                    armour: 0,
                    specialAbility: '',
                    entryNo: 0,
                    locationEnemy: '',
                  },
                },
                notes: "",
                bag: ""
              }
            })

            handleClose();
          },
        }}
      >
        <DialogTitle>Charater Creation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            All you need to begin your journey in Destiny Quest is a name
          </DialogContentText>
          <Divider sx={{ marginY: 2 }} />
          <DialogContentText>
            Your character will start off with nothing but 10 gold crowns
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Character Name"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Create</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
