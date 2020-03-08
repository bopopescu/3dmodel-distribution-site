import React, {FC} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Title from "../../fragments/title";

const useStyles = makeStyles(() => 
  createStyles({
    toolBar: {
      backgroundColor: "#E59500",
    },
  })
)

const TopHeader: FC = () => {
  const classes = useStyles();
  
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolBar}>
        <Title />
      </Toolbar>
     </AppBar>
  );
}

export default TopHeader;