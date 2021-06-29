import React, { useState } from 'react';
import { TextField, Button, Typography } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { AddCompanies } from './add-companies';


export const SelectCompanies = () => {
  const [companies, setCompanies] = useState([
    { id: 'ТатНефть', title: 'ТатНефть'},
    { id: 'WWF', title: 'World Wildlife Fund'},
    { id: 'Лукойл', title: 'Лукойл'},
    { id: 'Гринпис', title: 'Гринпис'},
  ])

  const [open, setOpen] = useState(false);

  return (<><Autocomplete
        options={companies}
        getOptionLabel={(option) => option.title}
        fullWidth
        renderInput={(params) => <TextField {...params} label="Компания" variant="filled" />}
      />
      <Button variant='text' style={{float: 'right'}} onClick={() => setOpen(!open)}><Typography variant='body2' color='secondary'>+ добавить новую компанию</Typography></Button>
      <AddCompanies 
        open={open} 
        companies={companies}
        onClose={() => setOpen(false)} 
        onAddCompany={(value) => {
          setCompanies([...companies, {id: value, title: value}]);
          setOpen(false);
        }}
      />
    </>
  )
}
