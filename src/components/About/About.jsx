import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { Container, Grid, Button } from '@material-ui/core';
import classes from './About.module.css';
import about from '.././img/profile.svg';

const About = () => {

  return (
    <div className={classes.container}>
      <Container>
        <Grid container spacing={5} className={classes.containerBorder}>


          <Grid item xs={12} sm={6}>
            <img src={about} alt="" className={classes.image} />
          </Grid>
          <Grid item xs={12} sm={6} className={classes.content}>
            <ScrollAnimation animateIn="animate__fadeInTopRight" delay={100} >
              <Button variant="contained" className={classes.button}>About Us</Button>
              <p className={classes.contentP}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In suscipit exercitationem, facere atque ducimus, ab harum praesentium impedit laudantium ratione voluptatem aspernatur quisquam, totam voluptates ipsum dolores eveniet blanditiis magnam.</p>
            </ScrollAnimation>
          </Grid>



        </Grid>

      </Container>
    </div>
  );
}
export default About;