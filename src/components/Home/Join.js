import React from 'react'
import { Container } from '@mui/system';
import { Box ,Grid, Typography, Button } from '@mui/material';
import '../../Styles/Home/Join.scss';

const Join = () => {
  return (
    <Container sx={{mt: 13}}>
        <Grid container className="join-section">
            <Grid item lg={8}>
                <Typography variant="h2" className="join-h2">
                Ready to join?
                </Typography>
                <Typography className="join-p">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </Typography>
            </Grid>
            <Grid item lg={4} className="join-btn-card">
                <Box>
                    <Button variant="contained" className="join-btn">Register Now</Button>
                </Box>
            </Grid>
        </Grid>
    </Container>
  )
}

export default Join