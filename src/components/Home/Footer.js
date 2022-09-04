import React from 'react'
import { Container } from '@mui/system';
import { Grid, Typography, Box } from '@mui/material';
import Facebook from '../../images/facebook.svg'
import Twitter from '../../images/twitter.svg'
import LinkedIn from '../../images/linkedIn.svg'

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#161616', mt: 10 }}>
      <Grid
        container
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Grid item sx={{mt: 8}}>
          <Typography
            variant='h2'
            className='footer-h2'
            sx={{ color: 'white' }}
          >
            Pro Edu
          </Typography>
        </Grid>
        <Grid item sx={{mt:3}}>
          <Typography className='footer-p1' sx={{ color: 'white' }}>
            Office 41, Zawaya Buildin, Ghala Muscat, Sultanate of Oman
          </Typography>
        </Grid>
        <Grid item className='footer-p2' sx={{mt:1}}>
          <Typography sx={{ color: 'white' }}>
            Privacy Ploicy | Terms of use
          </Typography>
        </Grid>
        <Grid item sx={{ display: 'flex', mt: 5, mb: 8 }}>
          <Box>
            <img src={Twitter} />
          </Box>
          <Box sx={{mx: 3}}>
            <img src={Facebook} />
          </Box>
          <Box>
            <img src={LinkedIn} />
          </Box>
          {/* <Box>
            <img src={} />
          </Box> */}
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer