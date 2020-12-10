import React from 'react'
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';




import { useStyles } from '../index';


function ProgramContent() {
    const classes = {... useStyles() };
    return (
        <>
        <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="subtitle2" className={classes.blogTitle}>
          <br />
        </Typography>
        <Container px={30}>
        <Typography variant="subtitle1"  gutterBottom align="center" >
        Preschool programs provide early childhood education and care for children, and help them develop a range of skills that make them ready to learn when they start school, such as:<br /> 
        </Typography>
        </Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1023&q=80"
                  title="Social Skills"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                    Social Skills
                  </Typography>
                  <Typography variant="body1" color="textSecondary" component="p">
                    The ability to empathize and interact successfully with their peer group, and also relate easily to adults.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
                  title="Language skills"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                  Language skills
                  </Typography>
                  <Typography variant="body1" color="textSecondary" component="p">
                  the ability to have adequate language skills in order to benefit from experiences facilitating their cognitive, educational and social development. 
                  </Typography>
                </CardContent>
              </CardActionArea>

            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.unsplash.com/photo-1581726690015-c9861fa5057f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=632&q=80"
                  title="Executive function Skills"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                  Executive function Skills
                  </Typography>
                  <Typography variant="body1" color="textSecondary" component="p">
                   The ability to hold and manipulate information in the brain, plan and regulate one’s behaviour, problem-solve, and be creative.
                  </Typography>
                </CardContent>
              </CardActionArea>

            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.unsplash.com/photo-1565963925128-eebd45213b1f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=851&q=80"
                  title="Emotional Skills"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                  Emotional Skills
                  </Typography>
                  <Typography variant="body1" color="textSecondary" component="p">
                   The ability to adapt behaviours depending on the situation, to control impulses and to shift attention. 
                  </Typography>
                </CardContent>
              </CardActionArea>

            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.unsplash.com/photo-1496117376488-15352091db1b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1057&q=80"
                  title="Self-regulation Skill"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                  Self-regulation Skills
                  </Typography>
                  <Typography variant="body1" color="textSecondary" component="p">
                  The ability to postpone immediate satisfaction to attain long-term goals, sustain attention, be persistent, and remain concentrated.
                  </Typography>
                </CardContent>
              </CardActionArea>

            </Card>
          </Grid>
        </Grid>
        <Typography variant="subtitle2" className={classes.blogTitle}>
          <br />
        </Typography>
      </Container>
        </>
    )
}

export default ProgramContent
