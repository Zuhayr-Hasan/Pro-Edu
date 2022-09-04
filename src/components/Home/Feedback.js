import React from 'react'
import { Container } from '@mui/system'
import { Box, Grid, Typography, Button } from '@mui/material'

const feedbackData = [
  {
    name: '',
  }
]

const Feedback = () => {
  return (
    <Grid container>
      <Grid item>
        <Typography></Typography>
        <Box>
          <img />
        </Box>
      </Grid>
      <Grid item>
        <Typography variant="body1"></Typography>
      </Grid>
      <Grid item>
        <Box>
          <img />
        </Box>
        <Box>
          <Typography></Typography>
          <Typography></Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Feedback