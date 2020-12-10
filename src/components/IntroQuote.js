import React from 'react'
import Box from '@material-ui/core/Box';

import { useStyles } from '../index'; 

// import Container from '@material-ui/core/Container';
// import CssBaseline from '@material-ui/core/CssBaseline';

import {Typography} from "@material-ui/core";





    
function IntroQuote() {
  const classes ={... useStyles() };
    return (
        <>

            <Box className={classes.container_yellow}>
                <Typography variant="h5" align="center" gutterBottom>Our Motto:<br/>"See the able, not the label"<br/></Typography>
                <Typography variant="subtitle1" align="center" gutterBottom> <br/></Typography>

               <div className={classes.ytmedia}>
                <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                  width="70%" frameborder='0' title='productvideo'
                  />
                  </div>


            </Box>
        </>
    )
}

export default IntroQuote
