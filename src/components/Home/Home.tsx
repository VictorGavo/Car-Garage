import React from 'react';
import { Navbar, useStyles } from '../../components/Navbar'



export const Home =() => {

    const classes = useStyles();
    return (
        <>
            <Navbar />
            <div className={`${classes.background}`}>
                <div className={`${classes.main_text}`}>
                    <h1>Welcome to Victor's Vehicular Venue!</h1>
                    <p>A place for car enthusiasts to keep track of their favorite vehicles</p>
                    <p>Create an account or sign in to start adding cars to your collection</p>
                </div>
            </div>

        </>
    )
};