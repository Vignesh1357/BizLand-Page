import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { deepPurple } from '@material-ui/core/colors';
import "./cards.css"

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      height: 150,
    },
  });


function Cards({data, card}){

    const classes = useStyles();
   
    return(
      <>
        {card==1?(
        <div className='box grid-card'>
            { data.map((ele)=>(
            <Card className={classes.root} >
            <CardActionArea id="card-area">
            { /* <CardMedia
                component="img"               
                height="150"
                image={ele.image}              
            /> */}
                <CardContent style={{
                  backgroundColor:deepPurple[50],
                  paddingBottom: 500,
                  paddingTop: 30,
                }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    { ele.title }
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                   {ele.content}                   
                  </Typography>
                </CardContent>
            </CardActionArea>             
          </Card>))}
        </div>):(
          <div className='box grid-card2'>
            { data.map((ele)=>(
            <Card className={classes.root} >
            <CardActionArea id="card-area">
            { /* <CardMedia
                component="img"               
                height="150"
                image={ele.image}              
            /> */}
                <CardContent style={{
                  backgroundColor:deepPurple[50],
                  paddingBottom: 500,
                  paddingTop: 30,
                }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    { ele.title }
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                   {ele.content}                   
                  </Typography>
                </CardContent>
            </CardActionArea>             
          </Card>))}
        </div>
        )}</>
    )
}

export default Cards