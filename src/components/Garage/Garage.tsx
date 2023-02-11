import React, { useState } from 'react';
import { useGetData } from '../../custom-hooks';
import { Link } from 'react-router-dom';
import { Paper } from '@material-ui/core';
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
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import clsx from 'clsx';
import { RouteComponentProps, withRouter, Switch, Route } from 'react-router-dom';
import { DataTable } from '../DataTable';
import { CarForm } from '../CarForm';
import { Navbar, useStyles } from '../Navbar';

interface GarageProps {
    history: RouteComponentProps['history'];
    location: RouteComponentProps['location'];
    match: RouteComponentProps['match'];
}

const drawerWidth = 240;

const dataStyles = makeStyles((theme: Theme) => createStyles({
    main: {
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`,
        width: '100%',
        height: '100%',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "Georgia, 'Times New Roman', Times, serif",
    },
    h3: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
    },
    text: {
        display: 'flex',
        flexDirection: 'column',
        color: '#4ef3b4',
        textDecoration: 'none',
        backgroundColor: 'white',
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo:{
        margin: '0 0 0 0.45em',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo_a: {
        color: '#4ef3b4',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo_navigation: {
        listStyle: 'none',
        textTransform: 'uppercase',
        textDecoration: 'none',
    },
    root: {
      display: 'flex',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
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
}))

export const Garage = withRouter(( props:GarageProps) => {
    
    console.log(`What is props? ${props}`);
    const { history } = props;
    const classes = useStyles();
    const g_classes = dataStyles();
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
    
    
    return (
        <>
        
        <div className={`${g_classes.root} ${g_classes.column}`}>
            
            <AppBar position='sticky' className={clsx(g_classes.appBar, {[g_classes.appBarShift]: open })}>
                <Toolbar className={g_classes.toolbar}>
                <Navbar />
                    {/* Dialog Pop Up */}
                    <Dialog open={dialogOpen} onClose={handleDialogClickClose} aria-labelledby='form-dialog-title'>
                        <DialogTitle id="form-dialog-title">Add New Car</DialogTitle>
                        <DialogContent>
                            <DialogContentText></DialogContentText>
                            <CarForm />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleDialogClickClose} color='primary'>Cancel</Button>
                            <Button onClick={handleDialogClickOpen} color='primary'>Done</Button>
                        </DialogActions>
                    </Dialog>
                    {/* End dialog pop-up */}
                </Toolbar>
            </AppBar>

            <main className={`${clsx(g_classes.content, {[g_classes.contentShift]: open,})} ${g_classes.leftMargin}`}>
                <div className={g_classes.drawerHeader} />
                <DataTable />
            </main>
        </div>
        </>
    )
});