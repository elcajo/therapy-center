import React, {Component} from 'react'
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';

import TeacherCardList from './TeacherCardList';
import SearchBox from './SearchBox';
import ErrorBoundary from './ErrorBoundary';

// import { withStyles } from "@material-ui/core/styles";

import { setSearchField, requestTeachers } from '../actions'


const useStyles = theme => ({
  blogsContainer: {
    paddingTop: theme.spacing(5)
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(5)
  },
});


  
const mapStateToProps = state => {
	return{
		searchField: state.searchTeachers.searchField,
		teachers: state.requestTeachers.teachers,
		isPending: state.requestTeachers.isPending,
		error: state.requestTeachers.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestTeachers: () => dispatch(requestTeachers())
	}
}


class TeacherCard extends Component  {
	componentDidMount(){
		this.props.onRequestTeachers();
	}
 
  render() {
    const { searchField, onSearchChange, teachers, isPending } = this.props;
    const filteredTeachers = teachers.filter(teacher =>{
      return teacher.name.toLowerCase().includes(searchField.toLowerCase());
    })
    
      return isPending ?
        <h1 align="center">Loading</h1> :
      (
          <>
          
          <Container maxWidth="lg">
          <Typography variant="subtitle2" >
            <br />
          </Typography>
          <Container py={10}>
          <SearchBox searchChange={onSearchChange} />
          <Typography variant="subtitle1"  gutterBottom align="center" > </Typography>
          </Container>

          <ErrorBoundary>
          {/* <div style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }} >

              </div> */}
          <TeacherCardList teachers={filteredTeachers}/>
            </ErrorBoundary>  

          <Typography variant="subtitle2" >
            <br />
          </Typography>
        </Container>
          </>
      );
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(TeacherCard);

