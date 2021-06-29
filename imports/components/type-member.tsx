import React, { useState } from 'react';
import { Typography, Grid, Button } from '@material-ui/core';

import { ReportTopic } from './hidden-block';
import { Collapse } from '@material-ui/core';


export const TypeMember = () => {
  const[hiddenBlock, setHiddenBlock] = useState(false);
  const[switchingAuthor, setSwitchingAuthor] = useState(false);
  const[switchingFormat, setSwitchingFormat] = useState(false);

  return (<>
      <Grid container direction='row' alignItems='baseline' spacing={5}>
        <Grid item xs={12} sm={6}>
          <Typography variant='body1' component='div' align='center'>Участвую в семинаре как:</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button 
            variant={switchingAuthor ? 'contained' : 'outlined'}
            fullWidth 
            component='div' 
            onClick={() => {
              setHiddenBlock(false);
              setSwitchingAuthor(true);
            }} style={{background: switchingAuthor ? 'yellow' : 'white'}}>Докладчик/соавтор</Button>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Button 
            variant={!switchingAuthor ? 'contained' : 'outlined'} 
            fullWidth 
            component='div' 
            onClick={() => {
              setHiddenBlock(true);
              setSwitchingAuthor(false);
            }} style={{background: !switchingAuthor ? 'yellow' : 'white'}}>Слушатель</Button>
        </Grid>
      </Grid>
      <Collapse in={!hiddenBlock} style={{width: '100%', padding: '16px 0'}}>
        <ReportTopic />
      </Collapse>
      <Grid container direction='row' alignItems='baseline' spacing={5}>
        <Grid item xs={12} sm={6}>
          <Typography variant='body1' component='div' align='center'>Форма участия:</Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Button 
            variant={switchingFormat ? 'contained' : 'outlined'}
            fullWidth 
            component='div' 
            onClick={() => setSwitchingFormat(true)} style={{background: switchingFormat ? 'yellow' : 'white'}}>Очная</Button>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Button 
            variant={!switchingFormat ? 'contained' : 'outlined'} 
            fullWidth 
            component='div' 
            onClick={() => setSwitchingFormat(false)} style={{background: !switchingFormat ? 'yellow' : 'white'}}>Заочная(ВКС)</Button>
        </Grid>
      </Grid>
    </>
  )
}