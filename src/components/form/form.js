import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './form.css'
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      marginTop: 50,
    
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
      },
    }));

export default function Form() {
    const classes = useStyles();

    return (
        <div className="map-grid">
            <div className='map-image'>
                <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=733&q=80" width="90%"/>
            </div>
            <div className='container'>
            <div className={classes.root} id='form-grid'>
                <div>
                    <TextField
                    id="standard-full-width"
            
                    style={{ margin: 8 ,
                    }}
                    placeholder="Your Name"
                    fullWidth
                    margin="normal"
                    variant='outlined'
                    color='primary'
                    InputLabelProps={{
                    shrink: true,
                    }}
                    />
                </div>
                <div>
                    <TextField
                    id="standard-full-width"
                    style={{ margin: 8,
                    }}
                    placeholder="Your Email"
                    fullWidth
                    margin="normal"
                    variant='outlined'
                    color="primary"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    />
                </div>
            </div>
            <div className={classes.root}>
                <div id='subjectMsg-grid'>
                <TextField
                    id="standard-full-width"
                    style={{ marginLeft: '2%'}}
                    placeholder="Subject"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    color='primary'
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                </div>
            </div>
            <div className={classes.root}>
                <div id='subjectMsg-grid'> 
                    <TextField
                    id="standard-full-width"
                    style={{ 
                        marginLeft:'2%',
                        }}
                    placeholder="Message"
                    fullWidth
                    multiline
                    margin="normal"
                    variant="outlined"
                    rows={5}
                    color='primary'
                    InputLabelProps={{
                    shrink: true,
                    }}
                    />
                </div>
            </div>
        <div style={{
            marginBottom: 30,
            marginLeft:'30%',
            marginRight:'30%'
        }}>
        <div id='subjectMsg-grid'>
        <Button variant="contained" color="primary">
            Send Message
        </Button></div>
        </div></div>
      </div>)}