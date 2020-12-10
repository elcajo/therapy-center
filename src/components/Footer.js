import React from 'react'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';


// import FacebookIcon from '@material-ui/icons/Facebook';
// import YouTubeIcon from '@material-ui/icons/YouTube';
// import GitHubIcon from '@material-ui/icons/GitHub';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer() {
    return (
        <>
          <Box
            display="flex"
            alignItems="center"
            bgcolor="#fff082"
            height="10vh"
      >
        <Grid container>
            <Grid item xs justifyContent="flex-start">
            <Box display="flex" justifyContent="flex-start" pl={5}> </Box>
            {/* <Box display="flex" justifyContent="flex-start" pl={5}>Created By: github.com/elcajo</Box> */}
            </Grid>
            <Grid item xs={6} justifyContent="center">
            <Box display="flex" justifyContent="center">Beyond Limits Therapy Center © 2020. All Rights Reserve</Box>
            </Grid>
            <Grid item xs >
            <Box display="flex" justifyContent="flex-end" pr={5}>
 
                    {/* <FacebookIcon /> 
                    <YouTubeIcon /> 
                    <GitHubIcon /> 
                    <LinkedInIcon /> */}

            </Box>
            </Grid>
        </Grid>
          </Box>  
        </>
    )
}

export default Footer
