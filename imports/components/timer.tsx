import { Grid, makeStyles, Typography, useMediaQuery, useTheme } from '@material-ui/core';

import React from 'react';
import Countdown from "react-countdown";


const useStyles = makeStyles((theme) => ({
  dateCard: {
    border: '1px solid #4d4d4d',
    borderRadius: 5,
    textAlign: 'center',
    padding: 8,
  },
  date: {
    padding: 8,
    border: '1px solid #4d4d4d',
    borderRadius: 5,
    textAlign: 'center',
    transition: 'border 1s ease-out'
  }
}))


const Completionist = () => <Typography variant='h3' component='div' color='primary'>Семинар начался!</Typography>;

const DateTimer = ({days, hours, minutes, seconds}:{days: number; hours: number; minutes: number; seconds: number;}) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXs = useMediaQuery(theme.breakpoints.between('xs', 'sm'));

  return (<Grid container direction='column' alignItems={matchesXs ? 'center' : 'flex-end'} justify={matchesXs ? 'center' : 'flex-end'}> 
      <Grid item xs={12} style={{padding: '16px 0'}}><Typography variant='h4' component='div'>До начала семинара осталось:</Typography></Grid>
      <Grid item xs={12}>
        <Grid container direction='row' alignItems='center' justify='space-between' spacing={2}>
          <Grid item xs={3}>
            <div className={classes.dateCard}>
              <div className={classes.date}>{days}</div>
              <Typography variant='body2' component='div'>дней</Typography>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.dateCard}>
              <div className={classes.date}>{hours}</div>
              <Typography variant='body2' component='div'>часов</Typography>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.dateCard}>
              <div className={classes.date}>{minutes}</div>
              <Typography variant='body2' component='div'>минут</Typography>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.dateCard}>
              <div className={classes.date}>{seconds}</div>
              <Typography variant='body2' component='div'>секунд</Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

const renderer = ({ days, hours, minutes, seconds, completed }:{days: number; hours: number; minutes: number; seconds: number; completed: any;}) => {
  
  if(completed){
    <Completionist />
  } else {
    return(
      <DateTimer days={days} hours={hours} minutes={minutes} seconds={seconds} />
    ) 
  }
};

export const Timer = () => {

  const date = new Date("Sept 29 2021");
  
  return <Countdown date={date} renderer={renderer} />
}
