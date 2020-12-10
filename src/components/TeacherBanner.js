import React from 'react'
import {Box, Typography} from '@material-ui/core'


import teachers from '../images/teachers.webm';

import { useStyles } from '../index';

function TeacherBanner() {
    const classes = {... useStyles() };
      return (
          <>
              <Box className={classes.banner_aboutus}>
              <video autoPlay loop muted 
                style={{
                  position: "absolute",
                  width: "100%",
                  left: "50%",
                  top: "50%",
                  height: "100%",
                  objectFit: "cover",
                  transform: "translate(-50%, -50%)",
                  zIndex: "-1"
                }}>
                  <source src={teachers} type="video/webm"/>
                </video>
  
                  <Typography variant="h1" className={classes.banner_title} align="center"  >The Teachers</Typography>
              </Box>  
          
          </>
      )
  }

export default TeacherBanner
