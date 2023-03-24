import {Drawer,Box,Typography,IconButton} from "@mui/material"
import {useState} from "react";
import MenuIcon from '@mui/icons-material'
function Sidebar() {
    const [isDrawerOpen,setIsDrawerOpen]= useState(false)
  return (
    <>
    <IconButton size='large' edge='start' color='inherit'aria-label='logo' onClick ={()=>setIsDrawerOpen(true)}>
    <MenuIcon />
    </IconButton>
   <Drawer anchor="left" open={isDrawerOpen} onClose={()=>setIsDrawerOpen(false)}>
    <Box p={2} width='250px' textAlign='center' role='presentation'>
    <Typography varient='h6' component='div'>sideepanel</Typography>
    </Box>
   </Drawer>
   </>
  )
}

export default Sidebar