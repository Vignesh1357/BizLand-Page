import React from 'react';
import Button from '@material-ui/core/Button';
import './home.css'


export default function Home(){


    return(
        <div className='flex'>
            <div className='flex-row'>
            <h1>Welcome to <span>BizLand</span></h1>
            </div>
            <div>
                <h4>We are a team of talented designers making websites with Bootstrap</h4>
            </div>
            <div>
                <div className='flex-row'>
                <Button  id='btn' variant="contained" style={{
                    backgroundColor:'red',
                    height: 40,
                }}>
                    Get Started
                </Button>
                <h5>Watch Video</h5>
                </div>
            </div>
        </div>
    )
}