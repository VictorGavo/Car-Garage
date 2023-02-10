import React, { Suspense } from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Navbar } from '../../components/Navbar'
import { Link } from 'react-router-dom';

interface Props{
    title: string;
}

const useStyles = makeStyles({
    background: {
      backgroundImage: `linear-gradient(#F5A623 0%, #F5A623 47%, #FFF 100%)`,
      width: '100%',
      height: '90%',
      backgroundPosition: 'center',
      position: 'absolute',
      zIndex: -1,
    },
    main_text: {
      textAlign: 'center',
      position: 'relative',
      top: '40%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: '#1C1C1C',
    },
    button_text: {
      color: '#1C1C1C',
      textDecoration: 'none',
    },
  });

export const Home = ( props:Props ) => {

    const classes = useStyles();

    return (
        <>
            {<Navbar />}
            <div className={`${classes.background}`}>
                <div className={classes.main_text}>
                    <h1>{props.title}</h1>
                    <Button>
                        <Link to='/garage' className={classes.button_text}>Take me to my Garage</Link>
                    </Button>
                </div>
            </div>
        </>
    )
}