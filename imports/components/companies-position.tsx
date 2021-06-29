import { Grid, TextField } from '@material-ui/core';
import React from 'react';

import { SelectCompanies } from './companies';


export const CompaniesPosition = () => {
  return (<Grid container direction='row' alignItems='baseline' justify='space-between' spacing={5}>
      <Grid item xs={12} sm={6}>
        <SelectCompanies />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField label="Должность" variant="outlined" required fullWidth />
      </Grid>
    </Grid>
  )
}
