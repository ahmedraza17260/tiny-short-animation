import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import webAnimationApi from '@wellyshen/use-web-animations';
import { Container, Grid } from '@material-ui/core';
import classes from './Contact.module.css';
import EmailIcon from '@material-ui/icons/Email';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const Contact = () => {

    const animation = webAnimationApi({
        keyframes: {
            transform: "translateY(20px)",
        },
        timing: {
            duration: 2500,
            iterations: Infinity, // Repeat once
            direction: "alternate", // Run the animation forwards and then backwards
            easing: "ease-in-out",
        }
    });

    const animation1 = webAnimationApi({
        keyframes: {
            transform: "translateY(20px)",
        },
        timing: {
            duration: 2500,
            iterations: Infinity, // Repeat once
            direction: "alternate", // Run the animation forwards and then backwards
            easing: "ease-in-out",
        }
    });


    return (
        <div className={classes.container}>
            <Container>
                <Grid container spacing={5}>

                    <Grid item xs={12} sm={12}>
                        <ScrollAnimation animateIn="animate__rotateIn">
                            <h1 className={classes.title}> Contact Me </h1>
                        </ScrollAnimation>
                    </Grid>

                    <Grid item xs={12} sm={12} className={classes.content}>
                        <EmailIcon className={classes.icon} ref={animation.ref} />
                        <p>ahmedraza17260@gmail.com</p>
                    </Grid>

                    <Grid item xs={12} sm={12} className={classes.content}>
                        <WhatsAppIcon className={classes.icon} ref={animation1.ref} />
                        <p>0323-2190116</p>
                    </Grid>

                </Grid>

            </Container>
        </div>
    );
}

export default Contact;
