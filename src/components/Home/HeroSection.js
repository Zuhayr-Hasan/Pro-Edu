import { Box, Grid, Typography, Button } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import girlimg from '../../images/digital-learning.svg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import { Container } from "@mui/system";
import '../../Styles/Home/HeroSection.scss'

function HeroSection() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return (
     <Container sx={{position: 'relative'}}>
        <Box className="carousel-content">
            <Typography varient="h1" className="carousel-h1">
                Get Started Digital Learning
            </Typography>
            <Button variant="contained" className="carousel-btn">Get Started</Button>
        </Box>
        <Grid item xs={12}>
            <Box>
                <Slider {...settings}>
                    <Box>
                        <img src={girlimg} alt="Logo" className="img-fluid" />;
                    </Box>
                    <Box>
                        <img src={girlimg} alt="Logo" className="img-fluid" />;
                    </Box>
                    <Box>
                        <img src={girlimg} alt="Logo" className="img-fluid" />;
                    </Box>
                    <Box>
                        <img src={girlimg} alt="Logo"  className="img-fluid"/>;
                    </Box>
                    <Box>
                        <img src={girlimg} alt="Logo"  className="img-fluid"/>;
                    </Box>
                    <Box>
                        <img src={girlimg} alt="Logo" className="img-fluid" />;
                    </Box>
                </Slider>
            </Box>
        </Grid>
     </Container>
    )
}

export default HeroSection