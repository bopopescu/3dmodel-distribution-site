import React, {FC, useEffect, useState} from "react";
import {useHistory, useParams} from 'react-router-dom';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import GetAppIcon from '@material-ui/icons/GetApp';

import firebase from '../firebase';
import {TileDate} from "../types/types";

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
    downloadButton: {
      color: "white",
      backgroundColor: "#3fb865",
    },
    downloadIcon: {
      color: "white",
    },
  })
);

const DownloadPage: FC = () => {
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
              <img className={classes.tileImage} src={tile.image} alt={tile.title} />
            </div>
          ))}
        </div>
      )
    }
    
    const download = () => {
      const storage = firebase.storage();
      const gsReference = storage.refFromURL("gs://freed-44dd6.appspot.com/3dModels/キャラクター/男/男.zip");
      
      gsReference.getDownloadURL().then(function(url){
        
        
        console.log(url);
        
      })
      
    }
    
    
    
    const clickDownloadButton = () => {
      download();
    }
  
    
    const downloadButton = () => {
      return(
        <div className={classes.root}>
          {data.map((tile) => (
            <Button 
              className={classes.downloadButton}
              variant="contained" 
              startIcon={<GetAppIcon className={classes.downloadIcon} />}
              href={tile.downloadUrl}
            >
              {"無料ダウンロード"}
            </Button>
            
          ))}
        </div>
      )
    }
  
  
    
    return(
        <div>
          <h2>{keyword}</h2>
          {displayImage()}
          {downloadButton()}
        </div>
    )
}

export default DownloadPage;