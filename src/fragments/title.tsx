import React, {FC} from 'react';
import {useHistory} from 'react-router-dom';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => 
    createStyles({
      title: {
        color: 'white',
      },
    })
  )

const Title:FC = () => {
  const classes = useStyles();
  const history = useHistory();
    
  return(
    <Button
     onClick={() =>history.push("/")}
    >
      <Typography variant="h6" className={classes.title}>
      ふりーでぃー！
      </Typography>
    </Button>
  )
}

export default Title;