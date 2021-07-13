import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position:'sticky',
    top:0,
    zIndex:'1'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color:"black",
    fontWeight:"bold",
    marginRight: '40%'
  },
  float:{
    flexGrow:1,
    color: "black",
    float: "right",
    marginRight: '3%'
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: 'white'}}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            BizLand.
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}