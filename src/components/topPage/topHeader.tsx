import React, {FC, useState} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Title from "../../fragments/title";

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
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
  })
)

const TopHeader: FC = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  const MenuDrawer = () => {
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
  
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolBar}>
        <Title />
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
      {MenuDrawer()}
     </AppBar>
  );
}

export default TopHeader;