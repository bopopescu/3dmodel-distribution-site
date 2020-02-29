import React, {FC, useState} from "react";
import {useHistory, useParams} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {createStyles, makeStyles} from '@material-ui/core/styles';

import {getData} from "../functions/functions";
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
  }),
);

const ResultPage: FC = () => {
  const { keyword } = useParams();
  const history = useHistory();
  const classes = useStyles();
  const [data, setData] = useState<TileDate[]>([]);
  
  const displayImage = () => {
    getData(setData, keyword);
    
    return(
      <div className={classes.root}>
        {data.map((tile) => (
          <div>
            <Button 
              onClick={() =>history.push("3d-model/" + tile.title)}
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
      <h2>検索結果は{keyword}さんだよ!</h2>
      {displayImage()}
    </div>
  )
}

export default ResultPage;