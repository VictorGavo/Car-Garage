// import React, { Suspense } from 'react';
// import { makeStyles } from '@material-ui/core';
// import { AuthCheck } from 'reactfire';
// import Button from '@material-ui/core/Button';
// import { Link } from 'react-router-dom';
// import Digits from '../../assets/images/logo.webp'

// const useStyles = makeStyles({
//   logo: {
//       color: 'white',
//       conent: `url(${Digits})`,
//       maxWidth: '20%',
//       height: 'auto',
//   },
//   navlogo: {
//       display: 'flex',
//       flexDirection: 'row',
//       justifyContent: 'flex-start',
//       alignItems: 'flex-start',
//   },
//   center: {
//       justifyContent: 'center',
//       alignItems: 'center',
//   },
//   column: {
//       display: 'flex',
//       flexDirection: 'column',
//   },
//   row: {
//       display: 'flex',
//       flexDirection: 'row',
//   },
//   navbar: {
//       backgroundColor: '#003155',
//       zIndex: 1,
//       borderBottom: '1px solid grey',
//   },
//   navbarItem: {
//       color: 'white',
//       textDecoration: 'none',
//   },
//   p5: {
//       padding: '5px',
//   },
//   spaceBetween: {
//       justifyContent: 'space-between',
//   },
//   alignCenter: {
//       alignItems: 'center',
//   },
//   ul: {
//       listStyleType: 'none',
//   },
//   width60: {
//       width: '60%',
//   },
//   width100: {
//       width: '100%',
//   },
//   psides: {
//       paddingRight: '10px',
//       paddingleft: '10px',
//   },
// })
  
  
// export const Navbar = () => {

//   const classes = useStyles();  


//     return ( 
//         <div className={`${classes.row} ${classes.navbar} ${classes.width100} ${classes.alignCenter} ${classes.p5} ${classes.spaceBetween} `}>
//             <div className={`${classes.navlogo} `}>
//                 <Link to='/' className={`${classes.logo} ${classes.p5} `}>
//                 </Link>
//             </div>
//             <div className={`${classes.width60} ${classes.alignCenter} `}>
//                 <ul className={`${classes.ul} ${classes.row} ${classes.spaceBetween} ${classes.psides}`}>
//                     <Suspense fallback={'loading...'}>
//                         <AuthCheck fallback={
//                             <li>
//                                 <Link to="/signin" className={`${classes.navbarItem} ${classes.psides}`}>Sign In</Link>
//                             </li>
//                         }>
//                         <li>
//                             <Button>
//                                 <Link to='/Garage' className={`${classes.navbarItem} ${classes.psides}`}>My Garage</Link>
//                             </Button>
//                         </li>
//                         <li>
//                             <Button>
//                                 <Link to='/Contact' className={`${classes.navbarItem} ${classes.psides}`}>Contact Us</Link>
//                             </Button>
//                         </li>
//                         <li>
//                             <Button>
//                                 <Link to='/About' className={`${classes.navbarItem} ${classes.psides}`}>About Us</Link>
//                             </Button>
//                         </li>
//                     </AuthCheck>
//                     </Suspense>
//                 </ul>
//             </div>
//         </div>
//     )
// }

import React, { Suspense, useState } from 'react';
import { Link } from 'react-router-dom';
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

export const useStyles = makeStyles((theme: Theme) => createStyles({
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

export const Navbar = withRouter(( props:Props ) => {

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
            text: 'Garage',
            onClick: () => history.push('/garage')
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
            </>
    )
});