import React, {FC, useState} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    title: {
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

const ResultHeader: FC = () => {
    const classes = useStyles();
    
    return(
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          <Typography variant="h6" className={classes.title} >
            ふりーでぃー！
          </Typography>
        </Toolbar>
      </AppBar>
    )
}

export default ResultHeader;
