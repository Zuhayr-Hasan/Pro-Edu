import React from 'react'
import { Container } from '@mui/system';
import { Box ,Grid, Typography, Button } from '@mui/material';
import Hossain from '../../images/hossain.svg';
import Imran from '../../images/imran.svg';
import Jannatul from '../../images/jannatul.svg';
import Akter from '../../images/akter.svg';
import '../../Styles/Home/Meet.scss'

const gridData = [
    {
        img: Hossain,
        name: 'Awlad Hossain',
        designation: 'UIUX Designer'
    },
    {
        img: Imran,
        name: 'Jannatul Islam',
        designation: 'Motion Design'
    },
    {
        img: Jannatul,
        name: 'Imran Hossain',
        designation: 'Graphic Designer'
    },
    {
        img: Akter,
        name: 'Nishi Akter',
        designation: 'Web Developer'
    }
]

const Meet = () => {
  return (
    <Container className="meet-section" sx={{mt: 10}}>
        <Grid container>
            <Typography variant="h2" className="meet-h2">
            Meet Our Successfull Students
            </Typography>
            <Typography className="meet-p" sx={{mt: 2}}>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </Typography>
            <Grid container spacing={2} sx={{mt: 3}}>
                {gridData.map((item) => (
                    <Grid item xs={12} sm={12} md={6} lg={3} sx={{mt: 4}}>
                        <Box className="meet-card">
                            <Box>
                                <img src={item.img} className="img-fluid" />
                            </Box>
                            <Box sx={{border: '2px solid #eee'}}>
                                <Typography variant="h4" className="meet-h4">{item.name}</Typography>
                                <Typography className="meet-desig">{item.designation}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
            <Box sx={{display: 'flex', justifyContent: 'center', width: '100%', mt: 5}}>
                <Box>
                   <Button variant="contained" className="meet-btn">View All</Button>       
                </Box>
            </Box>
        </Grid>
    </Container>
  )
}

export default Meet