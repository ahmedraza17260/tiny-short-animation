import React from 'react';
import useWebAnimations from '@wellyshen/use-web-animations';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import { Container, Grid } from '@material-ui/core';
import classes from './Services.module.css';
import services from '.././img/services.svg';
import services7 from '.././img/services-7.svg';
import services5 from '.././img/services-5.svg';

const Services = () => {
    const webDevelopment = useWebAnimations({
        keyframes: {
            transform: "translateX(40px)",
        },
        timing: {
            duration: 1500,
            iterations: Infinity, // Repeat once
            direction: "alternate", // Run the animation forwards and then backwards
            easing: "ease-in-out", // Use a fancy timing function
        }
    })

    const appDevelopment = useWebAnimations({
        keyframes: {
            transform: "translateY(50px)",
        },
        timing: {
            duration: 1500,
            iterations: Infinity, // Repeat once
            direction: "alternate", // Run the animation forwards and then backwards
            easing: "ease-in-out", // Use a fancy timing function
        }

    })

    const mobileApplication = useWebAnimations({
        keyframes: {
            transform: "translateX(40px)",
        },
        timing: {
            duration: 1500,
            iterations: Infinity, // Repeat once
            direction: "alternate", // Run the animation forwards and then backwards
            easing: "ease-in-out", // Use a fancy timing function
        }
    })

    const softwareDevelopment = useWebAnimations({
        keyframes: {
            transform: "translateX(50px)",
        },
        timing: {
            duration: 1500,
            iterations: Infinity, // Repeat once
            direction: "alternate", // Run the animation forwards and then backwards
            easing: "ease-in-out", // Use a fancy timing function
        }
    })
    return (
        <div className={classes.container}>
            <Container className={classes.back}>
                <Grid container spacing={5} className={classes.containerBorder}>

                    <Grid item xs={12} sm={6}>
                        <img src={services7} alt="" ref={webDevelopment.ref} />
                    </Grid>

                    <Grid item xs={12} sm={6} className={classes.content}>

                        <ScrollAnimation animateIn="animate__rotateIn" delay={100} >
                            <h1 className={classes.contentTitle}>Web Development</h1>
                            <p className={classes.contentP}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni cumque sapiente deleniti quam iure quidem fugiat at repellat. Assumenda minus alias beatae nulla autem, dolore quos ex dignissimos sequi velit.</p>
                        </ScrollAnimation>

                    </Grid>
                </Grid>

                <Grid container spacing={5} className={classes.containerBorder}>

                    <Grid item xs={12} sm={6} className={classes.content}>
                        <ScrollAnimation animateIn="animate__rotateIn " delay={100}>
                            <h1 className={classes.contentTitle}>App Development</h1>
                            <p className={classes.contentP}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, ipsum. Perferendis, sed ratione. Possimus repellendus quam similique nisi. Et reprehenderit illum quo quod enim. Rerum, facilis quis. Quos, voluptas dolor.</p>
                        </ScrollAnimation>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <img src={services5} alt="" ref={appDevelopment.ref} />
                    </Grid>
                </Grid>


                <Grid container spacing={5} className={classes.containerBorder}>

                    <Grid item xs={12} sm={6}>
                        <img src={services} ref={mobileApplication.ref} alt="" />
                    </Grid>

                    <Grid item xs={12} sm={6} className={classes.content}>
                        <ScrollAnimation animateIn="animate__rotateIn" delay={100}>

                            <h1 className={classes.contentTitle}>Mobile Application</h1>
                            <p className={classes.contentP}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero molestiae fugit natus in itaque aspernatur magnam repellendus, asperiores, odio porro culpa ea dolores illo nobis perferendis vero saepe dicta amet!</p>
                        </ScrollAnimation>

                    </Grid>


                </Grid>

                <Grid container spacing={5} className={classes.containerBorder}>


                    <Grid item xs={12} sm={6} className={classes.content}>
                        <ScrollAnimation animateIn="animate__rotateIn" delay={100}>

                            <h1 className={classes.contentTitle}>Software Development</h1>
                            <p className={classes.contentP}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero molestiae fugit natus in itaque aspernatur magnam repellendus, asperiores, odio porro culpa ea dolores illo nobis perferendis vero saepe dicta amet!</p>
                        </ScrollAnimation>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <img src={services7} ref={softwareDevelopment.ref} alt="" />
                    </Grid>


                </Grid>



            </Container>
        </div>
    );
}
export default Services; 