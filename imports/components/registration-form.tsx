import { Grid, TextField, makeStyles } from '@material-ui/core';
import React from 'react';


export const DataUser = () => {
  
  return (
    <Grid container direction='row' alignItems='center' justify='space-between' spacing={5}>
      <Grid item xs={12} sm={4}>
        <TextField label="Фамилия" variant="outlined" required fullWidth />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField label="Имя" variant="outlined" required fullWidth />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField label="Отчество" variant="outlined" required fullWidth />
      </Grid>
    </Grid>
  )
}