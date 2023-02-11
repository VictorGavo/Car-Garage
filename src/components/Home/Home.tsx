import React, { Suspense, useState } from 'react';
// import { makeStyles, useTheme } from '@material-ui/core';
// import Button from '@material-ui/core/Button';
import { Navbar } from '../../components/Navbar'
import { Link } from 'react-router-dom';

//V1.1
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
    title: string;
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

export const Home = withRouter(( props:Props ) => {

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
                    <h1>{props.title}</h1>
                    <Button>
                        <Link to='/garage' className={classes.button_text}>Take me to my Garage</Link>
                    </Button>
                </div>
            </div>
        </>
    )
});