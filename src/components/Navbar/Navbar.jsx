import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Drawer, AppBar, Toolbar, CssBaseline, List, Typography, IconButton, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Home } from '@material-ui/icons/';
import InfoIcon from '@material-ui/icons/Info';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: 'radial-gradient(circle, #eeaeca 0%, rgba(148,187,233,1) 100%)',
    color: 'black',
    fontWeight: 'bold',

  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
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
    background: 'radial-gradient(circle, #eeaeca 0%, rgba(148,187,233,1) 100%)',
    // background: 'radial-gradient(circle, #0072d4 0%, rgb(16, 29, 143) 70%)',

  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  li: {
    color: 'black',
  }
}));

// const text = ['Home', 'About', 'Service', 'Contact'];


export default function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            Tiny Short Animation
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main className={clsx(classes.content, {
        [classes.contentShift]: open,
      })}>
        <div className={classes.drawerHeader} />
      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton className={classes.li} onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Home', 'Info'].map((text, index) => (
            <ListItem button key={text} className={classes.li}>
              <ListItemIcon className={classes.li}>{index % 2 === 0 ? <Home /> : <InfoIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
          {['Service', 'Contact'].map((text, index) => (
            <ListItem button key={text} className={classes.li}>
              <ListItemIcon className={classes.li}>{index % 2 === 0 ? <WorkOutlineIcon /> : <ContactPhoneIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}





// <List>
// <ListItem button key={text} className={classes.li}>
//   <ListItemIcon className={classes.li}>{<Home />}</ListItemIcon>
//   <ListItemText primary={text[0]} />
//   <ListItemIcon className={classes.li}>{<InfoIcon />}</ListItemIcon>
//   <ListItemText primary={text[1]} />
//   <ListItemIcon className={classes.li}>{<WorkOutlineIcon />}</ListItemIcon>
//   <ListItemText primary={text[2]} />
//   <ListItemIcon className={classes.li}>{<ContactPhoneIcon />}</ListItemIcon>
//   <ListItemText primary={text[3]} />
// </ListItem>
// </List> 