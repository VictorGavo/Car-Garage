import React, {useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Drawer as MUIDrawer,
    ListItem,
    List,
    ListItemIcon,
    ListItemText,
    Theme,
    useTheme,
    makeStyles,
    createStyles,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Divider,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import clsx from 'clsx';

interface Props{
  history: RouteComponentProps['history'];
  location: RouteComponentProps['location'];
  match: RouteComponentProps['match'];
}

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => createStyles({
  background: {
      backgroundImage: `linear-gradient(rgba(0, 49, 85) 0%, rgba(121, 147, 163, 1) 47%, rgba(249,249,249,1)100%)`,
      width: '100%',
      height: '100%',
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
      color: 'white',
  },
  button_text: {
      color: 'white',
      textDecoration: 'none',
  },
  appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    toolbar:{
      display: 'flex',
      backgroundColor: '#003155',
      color: 'white',
      fontFamily: "Georgia, 'Times New Roman', Times, serif",
    },
    toolbar_button: {
      marginLeft: 'auto',
      color: 'white',
      fontFamily: "Georgia, 'Times New Roman', Times, serif",
    },
    margin_top: {
        marginTop: '50px',
    },
    font: {
        fontFamily: "Georgia, 'Times New Roman', Times, serif",
    },
    leftMargin: {
        marginLeft: '240px',
    },
}));


export const About = withRouter(( props:Props ) => {

  const classes = useStyles();

  const { history } = props;
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDrawerOpen = () => {
      setOpen(true);
  };

  const handleDrawerClose = () => {
      setOpen(false);
  };

  const handleDialogClickOpen = () => {
      setDialogOpen(true);
  };

  const handleDialogClickClose = () => {
      setDialogOpen(false);
  };
  
  const itemsList = [
      {
          text: 'Home',
          onClick: () => history.push('/')
      },
      {
          text: 'Sign In',
          onClick: () => history.push('/signin')
      },
      {
          text: 'About',
          onClick: () => history.push('/about')
      },
      {
          text: 'Contact',
          onClick: () => history.push('/contact')
      },
  ];

    return (
      <>
      <CssBaseline />
        <AppBar position='fixed' className={clsx(classes.appBar, {[classes.appBarShift]: open })}>
            <Toolbar className={classes.toolbar}>
                <IconButton color='inherit' aria-label='open-drawer' onClick={handleDrawerOpen} edge='start' className={clsx(classes.menuButton, open && classes.hide)}>
                    <MenuIcon />
                </IconButton>
                <Typography variant='h6' className={classes.font} noWrap>
                    Victor's Vehicular Venue
                </Typography>
            </Toolbar>
        </AppBar>
        <MUIDrawer className={classes.drawer} variant='persistent' anchor='left' open={open} classes={{paper: classes.drawerPaper,}}>
            <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </div>
            <Divider />
            <List>
                {itemsList.map((item, index) => {
                    const { text, onClick } = item;
                    return (
                        <ListItem button key={text} onClick={onClick}>
                            <ListItemText primary={text} />
                        </ListItem>
                    );
                })}
            </List>
        </MUIDrawer>

        <div className={`${classes.background}`}>
          <div className={classes.main_text}>
          <h1>About Victor Gavojdea</h1>
          <p>
            Victor Gavojdea is a human of Earth who is a friend to all. With a passion for self-improvement and a desire to learn from others, Victor is always striving to be the best human he can be.
          </p>
          <p>
            Victor's career goal is to become an expert in AI with the aim of making healthcare easier to access for individuals. He also wants to have the means to work and connect with others to improve their standard of living and care.
          </p>
          <p>
            Victor's positive attitude and passion for stoic philosophy are his greatest strengths. He believes in the power of humans to create magic when enough people come together, and is always eager to learn and grow from those around him.
          </p>
          <p>
            With a "can do" attitude, Victor wants to bring people together and is not afraid to take a backseat in order to learn from others. He is committed to adapting and overcoming obstacles, and is always looking for ways to be a leader in the pursuit of a shared goal.
          </p>
          <p>
            Victor's passion for self-improvement and learning is something he enjoys, and he believes that every person has a unique gift to offer the world. He encourages others to find and pursue their own gifts, as he believes this is the path to true happiness.
          </p>
          <p>
            In short, Victor is a positive and enthusiastic individual who is always looking to make a difference in the world. He is eager to learn, grow, and make magic happen!
          </p>
          </div>
        </div>
      </>
    );
  });