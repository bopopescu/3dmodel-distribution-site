import React, {FC} from 'react';
import {createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginTop: "5%",
    },
    appBar: {
      top: 'auto',
      bottom: 0,
      width: '100vw',
    },
    toolBar: {
      backgroundColor: "#fafafa",
    },
    text: {
      color: '#555',
      opacity: ".7"
    }
  }),
);

const Footer: FC = () => {
    const classes = useStyles();
    
    return(
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar className={classes.toolBar}>
            <Button className={classes.text}>ご利用規約</Button>
            <Button className={classes.text}>プライバシーポリシー</Button>
            <Button className={classes.text}>免責事項</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
}

export default Footer;