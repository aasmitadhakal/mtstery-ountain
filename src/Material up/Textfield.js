import {Stack, TextField,InputAdornment} from '@mui/material'
import {useState} from 'react'

function Textfield() {
  const [value,setValue]=useState('')  
  return (
    <>
    <div className='bg-blue-200 border border-2 boder-gray-400'>
   <Stack spacing={4}>
    <Stack direction='row' spacing={2}>
    <TextField label='Name' variant='outlined' required error/>
    <TextField label='Name' variant='filled'/>
    <TextField label='Name' variant='standard'/>
    <TextField label='Name' variant='outlined'/>
    </Stack>
    <Stack direction='row' spacing={2}>
        <TextField label='smalll secondary' value={value} onChange={e=>setValue(e.target.value)}
        error ={!value}
        helperText={value ? 'Required':'donot share your password with anyone '}
        size='small' color='secondary'/>
    </Stack>
    <Stack direction='row' spacing={2}>
        <TextField label='form input*' size='small' color='secondary'/>
        <TextField 
        label='Password'
        type='password'
        size='small'
        helperText='Do not share your password with anyone'
        disabled
        />
        <TextField label='Read only' InputProps={{readOnly:true}} />
    </Stack>
    <Stack direction='row' spacing={2}>
        <TextField label='Amount' InputProps={
            {
             startAdornment:<InputAdornment position='start'>$</InputAdornment>,
            }
        }/>
        <TextField label='Weight'
         InputProps={
            {
             endAdornment:<InputAdornment position='end'>Kg</InputAdornment>,
            }
        }
        />
    </Stack>
   </Stack>
   </div>
   </>
  )
}

export default Textfield