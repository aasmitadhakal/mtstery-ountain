import {Accordion,AccordionSummary,AccordionDetails,Typography} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
function Accordin() {
  return (
    <div>
        <Accordion>
            <AccordionSummary
            id='panel1-header'
            aria-controls='panel1-content'
            expandIcon={<ExpandMoreIcon/>}
            >
                <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography> React is a javascript liabary for bulding useer
                     interface .React can be used as a base in the the
                      development of singlelorem ipsum fhtrrrr dddd vdrs </Typography>
            </AccordionDetails>
        </Accordion>
    </div>
  )
}

export default Accordin