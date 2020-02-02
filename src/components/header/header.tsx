import *as React from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
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
    toolBar: {
      backgroundColor: "#E59500",
    },
    whiteText:{
      color: 'white',
    },
    background: {
      backgroundImage: `url(${pencil})`,
      backgroundSize: 'cover',
      width: '100vw',
      height: '100vh',
    },
    typography: {
      color: "white",
      textShadow: '1px 1px 2px black',
      position: 'relative',
      [theme.breakpoints.down('sm')]: {
        width: 300,
        top: 160,
      },
      [theme.breakpoints.up('md')]: {
        width: 630,
        top: 250,
      },
    },
    paper: {
      position: 'relative',
      [theme.breakpoints.down('sm')]: {
        width: 300,
        top: 180,
      },
      [theme.breakpoints.up('md')]: {
        width: 600,
        top: 270,
      },
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

  return (
    <div>
      <Grid item xs={12}>
          <AppBar position="static">
            <Toolbar className={classes.toolBar}>
              <Grid container alignItems="baseline">
                <Grid item justify="flex-start">
                  <Typography variant="h6" className={classes.whiteText}>
                  ふりーでぃー！
                  </Typography>
                </Grid>
                <Grid item justify="flex-start">
                  <Hidden smDown>
                    <Button className={classes.whiteText}>ご利用について</Button>
                    <Button className={classes.whiteText}>よくあるご質問</Button>
                    <Button className={classes.whiteText}>お問い合わせ</Button>
                    <Button className={classes.whiteText}>リクエスト</Button>
                  </Hidden>
                </Grid>
              </Grid>
              <Grid item justify="flex-end">
                  <Hidden mdUp>
                    <IconButton 
                    edge="start" 
                    className={classes.whiteText} 
                    aria-label="menu"
                    onClick={handleDrawerOpen}
                    >
                      <MenuIcon />
                    </IconButton>
                  </Hidden>
                </Grid>
            </Toolbar>
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
          </AppBar>
        </Grid>
        <Grid 
        container 
        className={classes.background}
        justify="center"
        >
          <Grid item >
            <Typography variant="h2" className={classes.typography}>
              無料かわいい3Dモデル
            </Typography>
            <Paper component="form" className={classes.paper}>
              <IconButton type="submit">
                <SearchIcon />
              </IconButton>
              <InputBase placeholder="かわいいモデルを検索" />
            </Paper>
          </Grid>
        </Grid>
    </div>
  );
}