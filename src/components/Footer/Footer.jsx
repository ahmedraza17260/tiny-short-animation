import React from 'react';
import classes from './Footer.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";


const Footer = () => {
    return (
        <div className={classes.container}>
            <ScrollAnimation animateIn="animate__rotateIn">
                <h4> Powered by Ahmed Raza </h4>
            </ScrollAnimation>
            <br />
            <ScrollAnimation animateIn="animate__slideInRight">
                <a href="https://github.com/ahmedraza17260" rel="noopener noreferrer" target="_blank">
                    {" "}
                    <h3> Copyright &copy; 2020 Ahmed Raza </h3>{" "}
                </a>
                <h3> All Right Reserved </h3>
            </ScrollAnimation>
        </div>
    );
}

export default Footer;
