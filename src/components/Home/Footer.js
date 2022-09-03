import React from 'react'
import { Container } from '@mui/system';
import { Grid, Typography, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{backgroundColor: '#161616', mt: 10}}>
        <Grid container>
            <Grid item>
                <Typography variant="h2" className="footer-h2">
                Pro Edu
                </Typography>
            </Grid>
            <Grid item>
                <Typography className="footer-p1">
                Office 41, Zawaya Buildin, Ghala Muscat, 
                Sultanate of Oman
                </Typography>
            </Grid>
            <Grid item className="footer-p2">
                <Typography>Privacy Ploicy | Terms of use</Typography>
            </Grid>
            <Grid item>
                <Box>
                    <img src="" />
                </Box>
                <Box>
                    <img src="" />
                </Box>
                <Box>
                    <img src="" />
                </Box>
                <Box>
                    <img src="" />
                </Box>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Footer