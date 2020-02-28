import React, {FC, useState} from 'react';
import {useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import {getData} from "../functions/functions";
import {TileDate} from "../types/types";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginTop: "5%",
    },
    category: {
      color: "#E59500",
      textAlign: "center",
      margin: "0 auto",
    },
    gridContainar: {
      marginTop: "2%",
    },
    gridList: {
      flexWrap: "nowrap",
      width: "80%",
    },
    tileImage: {
      height: "180px",
      width: "180px",
    },
    
  }),
);

const TopMain: FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const [data, setData] = useState<TileDate[]>([]);
  
  const displayTileList = (keyword: string) => {
    getData(setData,keyword);
    
    return (
      <div className={classes.root}>
        <h2 className={classes.category}>{keyword}</h2>
        <Grid container className={classes.gridContainar} justify="center">
          <GridList className={classes.gridList} cols={4.5}>
            {data.map(tile => (
              <GridListTile>
              <Button 
                onClick={() =>history.push("3d-model/" + tile.title)}
              >
                <img className={classes.tileImage} src={tile.image} alt={tile.title} />
              </Button>
          　　　</GridListTile>
        　 　))}
          </GridList>  
        </Grid>
      </div>
    )
  }
  
  return(
      <div>
        {displayTileList("おすすめ")}
      </div>
    );
}

export default TopMain;