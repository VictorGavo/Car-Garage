import React, { useState} from 'react';
import { Navbar, useStyles } from '../Navbar'


export const Contact = () => {

    const classes = useStyles();

    return (
        <>
        
        <Navbar />
        <div className={`${classes.background}`}>
            <div className={classes.main_text}>
                Please don't contact me
            </div>
        </div>
    </>
    )
}