import React, {FC, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {createStyles, makeStyles} from '@material-ui/core/styles';

import firebase from '../firebase';
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
    tile: {
      display: "flex",
      flexWrap: "nowrap",
      width: "80%",
      textAlign: "center",
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
  
  const getData = async () => {
    const db = firebase.firestore();
    const tileDataRef = db.collection("tileData");
    const searchedData = tileDataRef.where("keyword", "array-contains", "おすすめ");
    const temporaryData: object[] = [];
    
    const snapShot = await searchedData.get();
    
    snapShot.docs.map(doc => {
      temporaryData.push(doc.data());
    })
    
    setData(temporaryData as TileDate[]);
  }
  
  useEffect(() => {
     getData();
   }, []);
  
  const displayTileList = () => {
    return (
      <div className={classes.root}>
        <h2 className={classes.category}>おすすめ</h2>
        <div className={classes.tile}>
          {data.map(tile => (
            <div>
              <Button 
                onClick={() =>history.push("download/" + tile.title)}
              >
                <img className={classes.tileImage} src={tile.image} alt={tile.title} />
              </Button>
          　   <h3>{tile.title}</h3>
            </div>
      　  ))}
      　</div>
      </div>
    )
  }
  
  return(
      <div>
        {displayTileList()}
      </div>
    );
}

export default TopMain;