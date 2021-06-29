import { Button, Grid, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import React, { useState } from 'react';


export const ReportTopic = () => {
  const topics = [
    { id: 'Доклад 1', title: 'Доклад 1'},
    { id: 'Доклад 2', title: 'Доклад 2'},
    { id: 'Доклад 3', title: 'Доклад 3'},
  ];

  const[switching, setSwitching] = useState(false);

  return (<>
      <Grid container direction='row' alignItems='center' justify='space-between' spacing={5} style={{padding: '24px 0'}}>
        <Grid item xs={12} sm={6}>
          <Autocomplete
            options={topics}
            getOptionLabel={(option) => option.title}
            fullWidth
            renderInput={(params) => <TextField {...params} label="Направление доклада" variant="filled" />}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <Button style={{background: switching ? 'yellow' : 'transparent'}} variant={switching ? 'contained' : 'outlined'} fullWidth onClick={() => setSwitching(true)}>Докладчик</Button>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Button style={{background: !switching ? 'yellow' : 'transparent'}} variant={!switching ? 'contained' : 'outlined'} fullWidth onClick={() => setSwitching(false)}>Соавтор</Button>
        </Grid>
      </Grid>
      <Grid container direction='row' alignItems='baseline' justify='space-between' spacing={5} style={{padding: '24px 0'}}>
        <Grid item xs={12} sm={6}>
          <TextField label="Тема доклада" variant="outlined" required fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
            label="Краткое содержание доклада" 
            variant="outlined" 
            multiline 
            fullWidth 
            inputProps={{
              style: {resize: 'vertical'},
              rows: 10,
            }}
          />
        </Grid>
      </Grid>
    </>
  )
}