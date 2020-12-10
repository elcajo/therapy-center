import React, {Component} from 'react'
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';

import TeacherCardList from './TeacherCardList';
import SearchBox from './SearchBox';


import { withStyles } from "@material-ui/core/styles";
import { teachers } from './teachers';


const styles = theme => ({
  blogsContainer: {
    paddingTop: theme.spacing(5)
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(5)
  },
});





class TeacherCard extends Component  {
  constructor(){
    super()
    this.state = {
      teachers: teachers,
      searchfield: ''
    }

  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { classes } = this.props;
    const filteredTeachers = teachers.filter(teacher =>{
      return teacher.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
      return (
          <>
          
          <Container maxWidth="lg" className={classes.blogsContainer}>
          <Typography variant="subtitle2" className={classes.blogTitle}>
            <br />
          </Typography>
          <Container py={10}>
          <SearchBox searchChange={this.onSearchChange} />
          <Typography variant="subtitle1"  gutterBottom align="center" > </Typography>
          </Container>
            
          <TeacherCardList teachers={filteredTeachers} />

          <Typography variant="subtitle2" className={classes.blogTitle}>
            <br />
          </Typography>
        </Container>
          </>
      );
    }
}


export default withStyles(styles, { withTheme: true })(TeacherCard);

