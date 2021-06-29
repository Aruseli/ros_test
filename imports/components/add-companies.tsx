import React, { useState } from 'react';
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions, Divider, Typography } from '@material-ui/core';
import { Space } from './space';


export const AddCompanies = ({
  open,
  onClose,
  onAddCompany,
  companies,
}:{
  open?: boolean;
  onClose?: () => any;
  onAddCompany?: (value: string) => any;
  companies?: {
    id: string;
    title: string;
  }[];
}) => {

  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (<Dialog
      open={open}
      keepMounted
      onClose={onClose}
      style={{minWidth: 300}}
    >
      <DialogTitle style={{padding: '16px 24px 0 24px'}}>{"Добавить компания"}</DialogTitle>
      <DialogContent style={{paddingBottom: 16}}>
        <TextField
          autoFocus
          variant='outlined'
          margin="dense"
          label="Название"
          fullWidth
          value={value}
          onChange={handleChange}
          style={{paddingBottom: 8}}
        />
        <Button
          variant='contained'
          color='primary'
          fullWidth
          disabled={!value || !!companies.find(c => c.title == value)}
          onClick={() => {
            onAddCompany(value);
            setValue('');
          }}
        >
          Добавить!
        </Button>
      </DialogContent>
      <Divider />
      <Typography variant='body2' align='right' style={{padding: 8}}>{'АО "ИГиРГИ"'}</Typography>
    </Dialog>
  )
}
