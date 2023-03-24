import React from 'react';
import {Stack,
   Button,
   IconButton,
   ButtonGroup,

  } from '@mui/material';
  import useState from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Materialui=()=> {

  return (
  
    <Stack spacing={4}>
      <Stack spacing={2} direction='row'>
     
        <Button variant='contained' >primary</Button>
        <Button variant='text' >primary</Button>
        <Button variant='outlined'>primary</Button>
       
      </Stack>
      <Stack spacing={2} direction='row'>
        <Button varient='contained' color='primary' size='small' startIcon={< ArrowDropDownIcon />}>Primary</Button>
        <Button varient='contained' color='error' size='medium' endIcon={<  ArrowDropDownIcon/>}>Secondary</Button>
        <Button varient='contained' color='error' size='large '>Secondary</Button>
        <IconButton aria-label='send'color='success' size='small '>
          <  ArrowDropDownIcon/>
        </IconButton>
      </Stack>
      <Stack direction='row'>
        <ButtonGroup variant='text'
         orientation='vertical'
          size='small'
          color='secondary'
          aria-label='aligment button group'
          >
      <Button onClick={()=>alert('left')}>Left</Button>
      <Button>Center</Button>
      <Button>Right</Button>
      </ButtonGroup>
      </Stack>
    </Stack>
     
  );
}

export default Materialui