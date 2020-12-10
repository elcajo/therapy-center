import React from 'react';

import {AppBar, Toolbar, Typography, Button, IconButton, Container} from '@material-ui/core';


import { Link } from 'react-router-dom';
import bltc from '../images/bltc.png';

import { useStyles } from '../index';


function Navbar() {
  const classes ={... useStyles() };

  return (
    

    <Container maxWidth="fixed">
      <AppBar style={{ opacity: 0.9, boxShadow: 'none'}}>
        <Toolbar>
          <Link to="/therapy-center">
            <IconButton edge="start">
                <img src={bltc} alt="logo" className={classes.logo} />
              </IconButton>
          </Link>
          <Typography variant="h6" className={classes.title}>
            BLTC
          </Typography>
          <Link to="/therapy-center" style={{ color: '#FFF', textDecoration: 'none' }}><Button>About Us</Button></Link>
          <Link to="/preschoolprogram" style={{ color: '#FFF', textDecoration: 'none' }}><Button>Preschool Program</Button></Link>
          <Link to="/teachers" style={{ color: '#FFF', textDecoration: 'none' }}><Button>Teachers</Button></Link>
        </Toolbar>
      </AppBar>
    </Container>

  );
}

export default Navbar;


