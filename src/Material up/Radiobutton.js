import {
    Box,
    FormControl,
    FormLabel,
    FormControlLabel,
    RadioGroup,
    Radio,
}from '@mui/material'

function Radiobutton() {
  return (
   <Box>
    <FormControl>
        <FormLabel id='job-experience-group-label'>
            Years of experiennce
        </FormLabel>
        <RadioGroup name='job-experience-group'
        aria-labelledby='job-experience-group-label'
        >
            <FormControlLabel control={<Radio />} label='0-2'value='0-2' />
            <FormControlLabel control={<Radio />} label='3-5'value='3-5' />
            <FormControlLabel control={<Radio />} label='6-10'value='6-10' />
        </RadioGroup>
    </FormControl>
   </Box>
  )
}

export default Radiobutton