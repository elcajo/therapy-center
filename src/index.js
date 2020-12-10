import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';



export const useStyles = makeStyles((theme) => ({
  listroot: {
    width: '100%',
    maxWidth: '80ch',
    backgroundColor: theme.palette.background.paper,
  },
  listinline: {
    display: 'inline',
  },
  root: {
    flexGrow: 1,
    border: 0,
    '& > *': {
    margin: theme.spacing(3),
    maxWidth: '100%',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    opacity: 1,
    flexGrow: 1,
    color: '#000005'
  },
  banner_title: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontFamily: "Dosis, sans-serif",
    // fontStyle: 'bold',
    fontSize: 72,
   
  },
  banner_aboutus: {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    height: '100vh',
    width: '100%',
    // backgroundImage:`url(${aboutus})`,
    backgroundSize: 'cover', 
    backgroundPosition: 'center'
  },
  container_white: {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    height: '100vh',
    width: '100%',
    background: "#ffffff",
    // backgroundImage:`url(${aboutus})`,
    backgroundSize: 'cover', 
    backgroundPosition: 'center'
  },
  container_yellow: {
    background: "#fff082",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  ytmedia: {
    height: "20rem",
    display: "flex",
    justifyContent: "center"
  },
  logo: {
    maxWidth: 35,
  },
  // Card Media Properties
  blogsContainer: {
    paddingTop: theme.spacing(5)
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(5)
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 350
  },

  
}));

const theme = createMuiTheme({
    typography:{
      h2: {
        fontSize: 36
      },
      subtitle1: {
        fontSize: 18
      },
      h5: {
        fontFamily: 'Roboto Slab',
        fontStyle: 'italic',
        fontSize: 36
      },
      h6: {
        fontFamily: 'Roboto Slab',
        fontSize: 24
      },

      
    },
    
    palette: {
      primary: {
        light: '#ffffff',
        main: '#fafafa',
        dark: '#c7c7c7',
        contrastText: '#000005',
      },
      secondary: {
        light: '#e5ffff',
        main: '#b2dfdb',
        dark: '#82ada9',
        contrastText: '#000005',
      }
    }
  })


ReactDOM.render(
    <ThemeProvider theme = {theme}>
    <CssBaseline />
    <App />
    </ThemeProvider>,
  document.getElementById('root')
);
