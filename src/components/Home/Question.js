import React from 'react'
import { Container } from '@mui/system';
import { Grid, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../../Styles/Home/Question.scss'

const accData = [
    {
        heading: 'What other services are you compatible with?',
        para: 'There are many variations of passages of available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the generators on the.',
    },
    {
        heading: 'I have a technical i need resolved, who do i email?',
        para: 'There are many variations of passages of available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the generators on the.',
    },
    {
        heading: 'What other services are you compatible with?',
        para: 'There are many variations of passages of available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the generators on the.',
    },
    {
        heading: 'What other services are you compatible with?',
        para: 'There are many variations of passages of available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the generators on the.',
    }
]

const Question = () => {
  return (
    <Container className="question-section" sx={{mt:10}}>
        <Grid container>
            <Typography variant="h2" className="question-h2">
            Frequently Asked Questions
            </Typography>
            <Typography className="question-p">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.   
            </Typography>
            <Grid item xs={12} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                {accData.map((item) => (
                    <Accordion className="acc-card">
                     <AccordionSummary
                     expandIcon={<ExpandMoreIcon />}
                     aria-controls="panel1a-content"
                     id="panel1a-header"
                     className="question-acc"
                     >
                         <Typography className="question-h5">{item.heading}</Typography>
                     </AccordionSummary>
                     <AccordionDetails>
                         <Typography className="question-para">{item.para}</Typography>
                    </AccordionDetails>
                 </Accordion>
                ))}
            </Grid>
        </Grid>
    </Container>
  )
}

export default Question