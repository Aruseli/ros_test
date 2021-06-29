import { Grid, Typography, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { AutoForm } from 'uniforms-material';
import { MuiPhoneNumber } from './phone-number';


export const Contacts = () => {
  const [value, setValue] = useState('');
  return (<>
      <Grid container direction='row' alignItems='baseline' spacing={5}>
        <Grid item xs={12}>
          <Typography variant='body1' component='div' align='left'>Информация для связи:</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField label="Адрес электронной почты" type='email' variant="outlined" required fullWidth />
        </Grid>
        <Grid item xs={12} sm={4}>
          <MuiPhoneNumber 
            variant='outlined' 
            fullWidth 
            label='Рабочий телефон*' 
            name="phone" 
            value={value}
            onChange={(e) => setValue(e)}
            type="tel"  
            InputProps={{
              placeholder: '+7 (495) 000-00-00*' ,
              required: true,
            }} 
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <MuiPhoneNumber 
            variant='outlined' 
            fullWidth 
            label='Сотовый телефон*' 
            name="phone" 
            value={value}
            onChange={(e) => setValue(e)}
            type="tel"  
            
            InputProps={{
              placeholder: '+7 (900) 000-00-00*' ,
              required: true,
            }} 
          />
        </Grid>
      </Grid>
    </>
  )
}