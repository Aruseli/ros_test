import { Grid, Typography, Hidden } from '@material-ui/core';
import Image from 'next/image';
import React from 'react';
import monitor from '../../public/monitor.jpeg';
import { Space } from './space';


export const Text = () => {
  return (<Grid container direction='row' alignItems='center' justify='space-evenly'>
      <Grid item xs={12}>
        <Typography variant='body1' component='div' align='center'>Планируете ли вы принять участие в турнире по геонавигации?</Typography>
      </Grid>
      <Space unit={1} />
      <Grid item sm={6}>
        <div style={{display:'flex', justifyContent: 'center'}}>
          <Image src={monitor} alt='монитор' />
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant='body1' component='div'>Для участия в турнире не обязательно владеть специализированным ПО и быть геонавигатором. Любой участник может попробовать себя в роли геонавигатора, а наш симулятор Вам поможет.</Typography>
        <Space unit={1} />
        <Typography variant='body1' component='div'>Для участия в турнире выберите компанию!</Typography>
      </Grid>
    </Grid>
  )
}