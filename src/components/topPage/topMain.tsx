import React, {FC, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';

import pencil from "../../assets/images/pencil.png";

import firebase from '../../firebase';
import {TileDate} from "../../types/types";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginTop: "5%",
    },
    background: {
      backgroundImage: `url(${pencil})`,
      backgroundSize: 'cover',
      height: '100vh',
    },
    typography: {
      color: "white",
      textShadow: '1px 1px 2px black',
      position: 'relative',
      textAlign: "center",
      top: "30%"
    },
    paper: {
      display:"flex",
      position: 'relative',
      marginLeft: "auto",
      marginRight: "auto",
      top: "33%",
      width: "45%",
    },
    inputBase: {
      width: "90%",
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
  const [keyword, setKeyword] = useState("");
  
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
   
   const handleSubmit = () => {
     history.push(keyword);
   }
  
   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
     setKeyword(event.target.value);
   }
   
   const background = () => {
    return(
      <div className={classes.background}>
        <Typography variant="h2" className={classes.typography}>
          無料かわいい3Dモデル
        </Typography>
        <Paper component="form" onSubmit={handleSubmit} className={classes.paper}>
          <IconButton type="submit">
            <SearchIcon />
          </IconButton>
          <InputBase 
          placeholder="かわいいモデルを検索" 
          onChange={handleChange} 
          className={classes.inputBase}
          />
        </Paper>
      </div>
    )
  }
  
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
        {background()}
        {displayTileList()}
      </div>
    );
}

export default TopMain;