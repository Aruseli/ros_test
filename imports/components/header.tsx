import { Grid, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import React from 'react';
import Image from 'next/image';
import logo from '../../public/logo.png';

export const HeaderLogoTimer = () => {
  const theme = useTheme();
  const matchesXs = useMediaQuery(theme.breakpoints.between('xs', 'sm'));

  return (<Grid container direction='row' alignItems='center' justify={matchesXs ? 'center' : 'space-between'}>
      <Grid item xs={12} sm={6}>
        <div style={{textAlign: matchesXs ? 'center' : 'left'}}>
          <Image src={logo} alt='логотип ИГиРГИ' />
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant='h1' component='div'>
          Онлайн регистрация на IX семинар по геологическому сопровождению бурения горизонтальных скважин и геомеханике!
        </Typography>
      </Grid>
    </Grid>
  )
}