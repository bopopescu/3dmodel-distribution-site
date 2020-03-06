import React, {FC, useEffect, useState} from "react";
import {useHistory, useParams} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {createStyles, makeStyles} from '@material-ui/core/styles';

import firebase from '../firebase';
import {TileDate} from "../types/types";
import ResultHeader from "../components/resutlPage/resutlHeader"

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      width: "80%",
      textAlign: "center",
    },
    tileImage: {
      height: "218px",
      width: "218px",
    },
  }),
);

const ResultPage: FC = () => {
  const { keyword } = useParams();
  const history = useHistory();
  const classes = useStyles();
  const [data, setData] = useState<TileDate[]>([]);
  
  const getData = async (searchWord: string | undefined) => {
    const db = firebase.firestore();
    const tileDataRef = db.collection("tileData");
    const searchedData = tileDataRef.where("keyword", "array-contains", searchWord);
    const temporaryData: object[] = [];
    
    const snapShot = await searchedData.get();
    
    snapShot.docs.map(doc => {
      temporaryData.push(doc.data());
    })
    
    setData(temporaryData as TileDate[]);
  }
  
  useEffect(() => {
     getData(keyword);
   }, []);
  
  const displayImage = () => {
    return(
      <div className={classes.root}>
        {data.map((tile) => (
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
    )
  }
  
  return(
    <div>
      <ResultHeader />
      {displayImage()}
    </div>
  )
}

export default ResultPage;