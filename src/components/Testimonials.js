import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import {Box} from '@material-ui/core'
import Typography from '@material-ui/core/Typography';

import avatar1 from '../images/avatar1.jpg';
import avatar2 from '../images/avatar2.jpg';
import avatar3 from '../images/avatar3.jpg';
import { useStyles } from '../index';




function Testimonials() {
    const classes = {... useStyles() };
    return (
        <>
        <Box className={classes.container_white} >
        
            <List className={classes.listroot}>
                <Typography variant="h5" align="center" >Testimonials<br/> </Typography>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                <Avatar alt="Kirby Durken" src={avatar1} />
                </ListItemAvatar>
                <ListItemText
                primary="Great Teachers and Lessons"
                secondary={
                    <React.Fragment>
                    <Typography
                        component="span"
                        variant="body2"
                        className={classes.listinline}
                        color="textPrimary"
                    >
                    {"We would like to take this opportunity to thank you all so much for all of your hard work and dedication. Our wish when starting with you was for our daughter to simply be happy and cared for and this has been surpassed in bucket-loads! The kindness and professionalism shown by your staff (to all of us!) has been outstanding and my daughter has blossomed under your care…    "}
                    </Typography>
                      — Kirby Durken
                    </React.Fragment>
                }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                <Avatar alt="Ali Connors" src={avatar2} />
                </ListItemAvatar>
                <ListItemText
                primary="Impressive"
                secondary={
                    <React.Fragment>
                    <Typography
                        component="span"
                        variant="body2"
                        className={classes.listinline}
                        color="textPrimary"
                    >
                     {"We are impressed with the caring nature of the baby room staff, particularly our daughter’s key worker who has helped her to settle into nursery and enjoy her time there. We are happy with how the nursery has handled our daughter’s food allergy. The staff have never seen it as a problem and she always has been offered healthy and nutritious alternatives…    "}
                    </Typography>
                      — Ali Connors
                    </React.Fragment>
                }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                <Avatar alt="Amanda Fritz" src={avatar3} />
                </ListItemAvatar>
                <ListItemText
                primary="Very Accommodating"
                secondary={
                    <React.Fragment>
                    <Typography
                        component="span"
                        variant="body2"
                        className={classes.listinline}
                        color="textPrimary"
                        >
                    {"I have found the nursery exceptionally responsive to the individual requests that I have had with regard to the care of my children. Examples include how well the nursery has accommodated my wishes for changes in sleep routines, potty training or even diets as my babies have grown…    "}
                   </Typography>
                      — Amanda Fritz
                    </React.Fragment>
                }
                />
            </ListItem>
            </List>
            </Box>
        </>
    )
}

export default Testimonials
