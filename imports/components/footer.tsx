import { Grid, Typography, useTheme, Radio, FormControlLabel, Button, Dialog, makeStyles, DialogTitle, DialogContent, Divider, DialogContentText } from '@material-ui/core';

import React, { useState } from 'react';
import { useRef } from 'react';


const useStyles = makeStyles(theme => ({
  modal: {
    background: '#fff',
    width: 300,

  }
}))

export const Footer = () => {
  const theme = useTheme();

  const [selectedValue, setSelectedValue] = useState(false);
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  return (<><Grid container direction='row' alignItems='center' justify='space-between'>
        <Grid item xs={12} sm={6}>
          <Typography variant='body1' component='div'>Остались вопросы? Напиши нам: <a href='mailto: seminar@igirgi.su' style={{color: theme.palette.primary.main}}>seminar@igirgi.su</a></Typography>
        </Grid>
        <Grid item xs={12} sm={6} style={{textAlign: 'right'}}>
          <FormControlLabel 
            control={<Radio color='primary' />} 
            label={<Typography variant='body1' component='div'>я согласен на <span onClick={() => setOpen(true)} style={{textDecoration: 'underline', color: theme.palette.primary.main}}>обработку персональных данных</span>*</Typography>} />
         </Grid>
      </Grid>
      <Dialog
        open={open}
        onClose={() => setOpen(!open)}
      >
        <DialogTitle disableTypography>Согласие</DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText>
            <Typography variant='body1' component='div'>
              При нажатии всплывает окно с текстом:
              Нажимая кнопку «отправить заявку», я даю свое согласие на обработку моих персональных данных, в соответствии с <a href='http://www.consultant.ru/document/cons_doc_LAW_61801/' rel='noreferrer' target='_blank' style={{color: theme.palette.primary.main}}>Федеральным законом от 27.07.2006 года No152- ФЗ«О персональных данных»</a>, на условиях и для целей, определенных в Согласии на обработку персональных данных
            </Typography>
          </DialogContentText>
        </DialogContent>
        <Divider />
        <Typography variant='body1' component='div' align='right' style={{padding: 16}}>{'АО "ИГиРГИ"'}</Typography>
      </Dialog>
    </>
  )
}