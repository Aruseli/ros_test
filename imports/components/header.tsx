import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import Image from 'next/image';
import logo from '../../public/logo.png';

export const HeaderLogoTimer = () => {
  return (<Grid container direction='row' alignItems='center' justify='space-between'>
      <Grid item xs={6}>
        <div>
          <Image src={logo} alt='логотип ИГиРГИ' />
        </div>
      </Grid>
      <Grid item xs={6}>
        <Typography variant='h1' component='div'>
          Онлайн регистрация на IX семинар по геологическому сопровождению бурения горизонтальных скважин и геомеханике!
        </Typography>
      </Grid>
    </Grid>
  )
}