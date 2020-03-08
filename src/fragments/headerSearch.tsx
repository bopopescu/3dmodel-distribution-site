import React, {FC, useState} from 'react';
import {useHistory} from 'react-router-dom';
import { createStyles, makeStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(() =>
  createStyles({
    paper: {
      display: "flex",
      position: 'relative',
      marginLeft: "auto",
      marginRight: "auto",
      top: "33%",
      width: "30%",
    },
    inputBase: {
      width: "80%",
    },
    category: {
      color: "#E59500",
      textAlign: "center",
      margin: "0 auto",
    },
  }),
);


const HeaderSearch:FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const [keyword, setKeyword] = useState("");
    
  const handleSubmit = () => {
    history.push(keyword);
  }
  
   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
     setKeyword(event.target.value);
   }
    
  return(
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
  )
}

export default HeaderSearch;