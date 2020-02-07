import *as React from 'react';
import {createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import animalTileDate from "../tileDate/animalTileDate";
import characterTileDate from "../tileDate/characterTileDate";
import furnitureTileDate from "../tileDate/furnitureTileDate";
import Grid from '@material-ui/core/Grid';

interface TileDate {
  image: string;
  title: string;
}

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
    tileTitle: {
      background: "#a9d7de",
      opacity: ".95",
      textAlign: "center",
    },
  }),
);

export default function Main(){
    const classes = useStyles();
    
    const tileList = (category: string, tileDate: TileDate[]) => {
      return (
        <div className={classes.root}>
          <h2 className={classes.category}>{category}</h2>
          <Grid container className={classes.gridContainar} justify="center">
            <GridList className={classes.gridList} cols={4.5}>
              {tileDate.map(tile => (
                <GridListTile>
                  <img src={tile.image} alt={tile.title} />
                  <GridListTileBar className={classes.tileTitle} title={tile.title}/>
          　　  　</GridListTile>
        　　  　))}
            </GridList>  
          </Grid>
        </div>
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