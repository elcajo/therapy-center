import React from 'react'
import Typography from '@material-ui/core/Typography';


import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';




import { useStyles } from '../index';



const DataCard = ({tch_id, imgfile, name, email, subject}) =>  {
    const classes = {... useStyles() };
    return (
        <>
        

        <Grid container spacing={3} justify="center" >
        <Grid item xs={12} sm={6} md={4} >

        <Card className={classes.card}  >
                 <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={`https://github.com/elcajo/elcajo-website/blob/gh-pages/static/media/${imgfile}.jpg?raw=true`}
                  />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2" align="center">
                    {tch_id} - {name}
                  </Typography>
                  <Typography variant="body1" color="textSecondary" component="p" align="center">
                    {email}
                  </Typography>
                  <Typography variant="body1" color="textSecondary" component="p" align="center">
                    {subject}
                  </Typography>
                </CardContent>
                </CardActionArea>
                </Card>

                </Grid>
                  </Grid>
          

        </>
    )
}

export default DataCard
