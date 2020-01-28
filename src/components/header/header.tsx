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
import pencil from "../../assets/images/pencil.png";

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    toolBar: {
      backgroundColor: "#E59500",
    },
    menuButton: {
      color: 'white',
    },
    title: {
      color: 'white',
    },
    item: {
      color: 'white',
    },
    background: {
        backgroundImage: `url(${pencil})`,
        backgroundSize: 'cover',
        width: '100vw',
        height: '100vh',
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
      <Grid container >
        <Grid item xs={12}>
          <AppBar position="static">
            <Toolbar className={classes.toolBar}>
              <Grid container alignItems="baseline">
                <Grid item justify="flex-start">
                  <Typography variant="h6" className={classes.title}>
                  ふりーでぃー！
                  </Typography>
                </Grid>
                <Grid item justify="flex-start">
                  <Hidden smDown>
                    <Button className={classes.item}>ご利用について</Button>
                    <Button className={classes.item}>よくあるご質問</Button>
                    <Button className={classes.item}>お問い合わせ</Button>
                    <Button className={classes.item}>リクエスト</Button>
                  </Hidden>
                </Grid>
              </Grid>
              <Grid item justify="flex-end">
                  <Hidden mdUp>
                    <IconButton 
                    edge="start" 
                    className={classes.menuButton} 
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
      </Grid>
      
    </div>
  );
}