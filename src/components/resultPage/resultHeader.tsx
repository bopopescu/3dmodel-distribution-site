import React, {FC} from 'react';
import { createStyles, makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Title from "../../fragments/title";
import HeaderSearch from "../../fragments/headerSearch";

const useStyles = makeStyles(() => 
  createStyles({
    toolBar: {
      display: "flex",
      backgroundColor: "#E59500",
    },
  })
)

const ResultHeader: FC = () => {
    const classes = useStyles();
    
    return(
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          <Title />
          <HeaderSearch />
        </Toolbar>
      </AppBar>
    )
}

export default ResultHeader;
