import React from 'react'
import { Box ,Grid, Typography, Container, Button} from '@mui/material';
import Elearing from '../../images/explore.svg'
import '../../Styles/Home/Elearning.scss'
import useMediaQuery from '@mui/material/useMediaQuery'

function Elearning() {
  return (
    <Container sx={{ mt: 5 }}>
      <Grid container>
        <Grid item lg={5} md={5}>
          <img src={Elearing} className='img-fluid' />
        </Grid>
        <Grid item lg={7} md={7} className='coures-section'>
          <Typography variant='h2' className='course-h1'>
            Explore The elearning Institute
          </Typography>
          <Typography className='course-p'>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure.Anything embarrassing hidden in the middle of text.
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined.
          </Typography>
          <Box>
            <Box className='course-section-cards'>
              <Box className='course-section-card-1'>
                <Typography className='course-section-card-likes'>
                  3.2K+
                </Typography>
                <Typography className='course-section-card-span'>
                  Online Course
                </Typography>
              </Box>
              <Box className='course-section-card-1'>
                <Typography className='course-section-card-likes'>
                  600+
                </Typography>
                <Typography className='course-section-card-span'>
                  Expert member
                </Typography>
              </Box>
              <Box className='course-section-card-1'>
                <Typography className='course-section-card-likes'>
                  1k+
                </Typography>
                <Typography className='course-section-card-span'>
                  Rating Review
                </Typography>
              </Box>
            </Box>
            <Button className='course-btn'>Read More</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Elearning