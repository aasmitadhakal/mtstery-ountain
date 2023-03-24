import {Card,CardContent,Typography, Button,CardActions,CardMedia} from '@mui/material'

function Cards() {
  return (
    <div className='w-full p-8 grid grid-cols-3 gap-2'>
        {/* for card 1 */}
        <div>
    <Card>
        <CardMedia 
        component='img'
        height='140'
        image='jungle.jpg'
        />
        <CardContent >
            <Typography gutterBottom varient='h5' component='div'>
                React
                </Typography>
                <Typography varient='body2' color='text.secondary'>
                    React is a javascript liabary for bulding useer
                     interface .React can be used as a base in the the
                      development of single-page or mobile applications
                </Typography>
        </CardContent>
        <CardActions>
            <Button size='small'>Share</Button>
            <Button size='small'>Learn More</Button>
        </CardActions>
    </Card>
    </div>
    {/* for card 2 */}
    <div>
    <Card>
        <CardMedia 
        component='img'
        height='140'
        image='jungle.jpg'
        />
        <CardContent >
            <Typography gutterBottom varient='h5' component='div'>
                React
                </Typography>
                <Typography varient='body2' color='text.secondary'>
                    React is a javascript liabary for bulding useer
                     interface .React can be used as a base in the the
                      development of single-page or mobile applications
                </Typography>
        </CardContent>
        <CardActions>
            <Button size='small'>Share</Button>
            <Button size='small'>Learn More</Button>
        </CardActions>
    </Card>
    </div>
    <div>
    <Card>
        <CardMedia 
        component='img'
        height='140'
        image='jungle.jpg'
        />
        <CardContent >
            <Typography gutterBottom varient='h5' component='div'>
                React
                </Typography>
                <Typography varient='body2' color='text.secondary'>
                    React is a javascript liabary for bulding useer
                     interface .React can be used as a base in the the
                      development of single-page or mobile applications
                </Typography>
        </CardContent>
        <CardActions>
            <Button size='small'>Share</Button>
            <Button size='small'>Learn More</Button>
        </CardActions>
    </Card>
    </div>
    <div>
    <Card>
        <CardMedia 
        component='img'
        height='140'
        image='jungle.jpg'
        />
        <CardContent >
            <Typography gutterBottom varient='h5' component='div'>
                React
                </Typography>
                <Typography varient='body2' color='text.secondary'>
                    React is a javascript liabary for bulding useer
                     interface .React can be used as a base in the the
                      development of single-page or mobile applications
                </Typography>
        </CardContent>
        <CardActions>
            <Button size='small'>Share</Button>
            <Button size='small'>Learn More</Button>
        </CardActions>
    </Card>
    </div>
    <div>
    <Card>
        <CardMedia 
        component='img'
        height='140'
        image='jungle.jpg'
        />
        <CardContent >
            <Typography gutterBottom varient='h5' component='div'>
                React
                </Typography>
                <Typography varient='body2' color='text.secondary'>
                    React is a javascript liabary for bulding useer
                     interface .React can be used as a base in the the
                      development of single-page or mobile applications
                </Typography>
        </CardContent>
        <CardActions>
            <Button size='small'>Share</Button>
            <Button size='small'>Learn More</Button>
        </CardActions>
    </Card>
    </div>
    <div>
    <Card>
        <CardMedia 
        component='img'
        height='140'
        image='jungle.jpg'
        />
        <CardContent >
            <Typography gutterBottom varient='h5' component='div'>
                React
                </Typography>
                <Typography varient='body2' color='text.secondary'>
                    React is a javascript liabary for bulding useer
                     interface .React can be used as a base in the the
                      development of single-page or mobile applications
                </Typography>
        </CardContent>
        <CardActions>
        <Button size='small'>Share</Button>
            <Button size='small'>Learn More</Button>
        </CardActions>
    </Card>
    </div>
   </div>
  )
}

export default Cards