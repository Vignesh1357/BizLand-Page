import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { deepPurple } from '@material-ui/core/colors';
import "./thirdcard.css"

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      height: 100,
      width: '80%'
    },
  });


function ThirdCards({data}){

    const classes = useStyles();
   
    return(
        <div className='thirdCard-box grid-thirdcard'>
            { data.map((ele)=>(
            <Card className={classes.root} >
            <CardActionArea id="thirdcard-area">
            { /* <CardMedia
                component="img"               
                height="150"
                image={ele.image}              
            /> */}
                <CardContent style={{
                  backgroundColor:deepPurple[50],
                  paddingBottom: 500,
                  paddingTop: 20,
                
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
    )
}

export default ThirdCards