import *as React from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import pencil from "../../assets/images/pencil.png";

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      [theme.breakpoints.down('sm')]: {
       flexGrow: 1,
      },
      color: 'white',
    },
    toolBar: {
      backgroundColor: "#E59500",
    },
    text:{
      color: 'white',
    },
    background: {
      backgroundImage: `url(${pencil})`,
      backgroundSize: 'cover',
      height: '120vh',
    },
    typography: {
      color: "white",
      textShadow: '1px 1px 2px black',
      position: 'relative',
      textAlign: "center",
      top: "30%"
    },
    paper: {
      position: 'relative',
      margin: "0 auto",
      top: "33%",
      width: "45%",
      
    },
  })
)

export default function Header() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  const headerMenu = () => {
    return(
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          <Typography variant="h6" className={classes.title}>
            ふりーでぃー！
          </Typography>
          <Hidden smDown>
            <Button className={classes.text}>ご利用について</Button>
            <Button className={classes.text}>よくあるご質問</Button>
            <Button className={classes.text}>お問い合わせ</Button>
            <Button className={classes.text}>リクエスト</Button>
          </Hidden>
          <Hidden mdUp>
            <IconButton 
            edge="start" 
            className={classes.text} 
            aria-label="menu"
            onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
        {drawer()}
      </AppBar>
    )
  }
  
  const drawer = () => {
    return(
      <Drawer anchor="right" open={open} onClose={handleDrawerClose}>
        <List>
          <ListItem button>
            <ListItemText primary='ご利用について' />
          </ListItem>
          <ListItem button>
            <ListItemText primary='よくあるご質問' />
          </ListItem>
          <ListItem button>
            <ListItemText primary='お問い合わせ' />
          </ListItem>  
          <ListItem button>
            <ListItemText primary='リクエスト' />
          </ListItem>  
        </List>
      </Drawer>
    )
  }
  
  const background = () => {
    return(
      <div className={classes.background}>
        <Typography variant="h2" className={classes.typography}>
          無料かわいい3Dモデル
        </Typography>
        <Paper component="form" className={classes.paper}>
          <IconButton type="submit">
            <SearchIcon />
          </IconButton>
          <InputBase placeholder="かわいいモデルを検索" />
        </Paper>
      </div>
    )
  }
  

  return (
    <div className={classes.root}>
      {headerMenu()}
      {background()}
    </div>
  );
}