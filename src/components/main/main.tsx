import *as React from 'react';
import {createStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import animalTileDate from "../tileDate/animalTileDate";
import characterTileDate from "../tileDate/characterTileDate";
import furnitureTileDate from "../tileDate/furnitureTileDate";

interface TileDate {
  image: string;
  title: string;
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginTop: "5%",
    },
    gridList: {
      flexWrap: "nowrap",
    },
    title: {
      color: "#969696",
    },
  }),
);

export default function Main(){
    const classes = useStyles();
    
    const tileList = (category: string, tileDate: TileDate[]) => {
      return (
          <Grid item className={classes.root}>
            <h2 className={classes.title}>{category}</h2>
            <GridList className={classes.gridList} cols={4.5}>
              {tileDate.map(tile => (
              　<GridListTile>
                　<img src={tile.image} alt={tile.title} />
                  <GridListTileBar title={tile.title}/>
          　　  　</GridListTile>
        　　　　))}
            </GridList>  
          </Grid>
      )
    }
    
    return(
        <div>
          {tileList("キャラクター", characterTileDate)}
          {tileList("動物", animalTileDate)}
          {tileList("家具", furnitureTileDate)}
        </div>
        
    );
}