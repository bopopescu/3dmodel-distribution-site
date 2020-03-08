import React, {FC} from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
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
    
  return(
    <Typography variant="h6" className={classes.title}>
      ふりーでぃー！
    </Typography>
  )
}

export default Title;