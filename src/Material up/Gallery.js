import {Stack,ImageList,ImageListItem}from '@mui/material'

export const Gallery = () => {
  return (
    <Stack>
    <ImageList sx={{width:500,height:450}} cols={3} rowHeight={164}>
        {
            itemData.map(item =>(
             <ImageListItem key={item.img}>
                <img src={item.img}alt={item.title} loading='lazy' />
             </ImageListItem>   
            )

            )
        }

    </ImageList>
   </Stack>
  )
}
const itemData=[
    {
        img:'jungle.jpg',
        title:"Breakfast",
    },
    {
        img:'a.jpeg',
        title:"Breakfast",
    },
    {
        img:'bunge.jpg',
        title:"Breakfast",
    },
    {
        img:'c.jpeg',
        title:"Breakfast",
    },
    {
        img:'h.jpeg',
        title:"Breakfast",
    },
    {
        img:'home.jpg',
        title:"Breakfast",
    },
     {
        img:'j.jpeg',
        title:"Breakfast",
    },
    {
        img:'jungle.jpg',
        title:"Breakfast",
    },
    {
        img:'j.jpeg',
        title:"Breakfast",
    },

]
