import React from 'react'
import { Container } from '@mui/system';
import { Box ,Grid, Typography, Button } from '@mui/material';
import logo from '../../images/js.svg';
import fullStack from '../../images/full-stack.svg'
import photography from '../../images/photography.svg'
import bulk from '../../images/bulk.svg'
import ui from '../../images/ui-ux.svg'
import build from '../../images/build.svg'
import '../../Styles/Home/Discover.scss'

const data = [
    {
        imge: logo,
        heading:"Fundamental Of UI/UX Design",
        para:"Some quick example text to build on the card title and make up the bulk of the card.",
        price: 'Price : 20$'
    },
    {
        imge: fullStack,
        heading:"Javascript Basic to advanced",
        para:"Some quick example text to build on the card title and make up the bulk of the card.",
        price: 'Price : 20$'
    },
    {
        imge: photography,
        heading:"Fullstack Web Development",
        para:"Some quick example text to build on the card title and make up the bulk of the card.",
        price: 'Price : 20$'
    },
    {
        imge:bulk,
        heading:"Photography Basic Rules",
        para:"Some quick example text to build on the card title and make up the bulk of the card."
    },
    {
        imge:build,
        heading:"Fullstack Web Development",
        para:"Some quick example text to build on the card title and make up the bulk of the card.",
        price: 'Price : 20$'
    },
    {
        imge:ui,
        heading:"Fundamental Of UI/UX Design",
        para:"Some quick example text to build on the card title and make up the bulk of the card.",
        price: 'Price : 20$'
    }
]

const Discover = () => {
  return (
    <Container>
        <Grid container spacing={3} sx={{mt:5}} className="discover">
            <Typography 
                variant="h3"
                sx={{fontWeight: '600'}}
                className="discover-h1"
            >
                Discover Our Popular Courses
            </Typography>
            <Typography className="discover-p">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </Typography>
            {data.map((val)=>(
                 <Grid item xs={12} sm={12} md={6} lg={6} sx={{mt: 4}}>
                    <Box className="parent" sx={{ display:"flex"}}>
                        <Box className='child1'>
                            <img src={ val.imge } />
                        </Box>
                        <Box className='child1' sx={{ border:'1px solid #E8E8E8'}}>
                            <Typography variant='h4' className="devep-heading">{val.heading}</Typography>
                            <Typography variant='h6' className="devep-para">{val.para}</Typography>
                            <Typography className="devep-price">{val.price}</Typography>
                        </Box>
                    </Box>
                 </Grid>
            ))}
            <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', mt: 5}}>
                <Button variant="contained" className="discover-btn">See More Courses</Button>
            </Box>
        </Grid>     
    </Container>
  )
}

export default Discover