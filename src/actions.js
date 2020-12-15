import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_TEACHERS_PENDING,
    REQUEST_TEACHERS_SUCCESS,
    REQUEST_TEACHERS_FAILED
} from './constants.js';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})  

export const requestTeachers = () => (dispatch) => {
	dispatch({type: REQUEST_TEACHERS_PENDING});
	fetch('https://secure-waters-78233.herokuapp.com/getAllTeachers')
		.then(response => response.json())
		.then(data => dispatch({ type: REQUEST_TEACHERS_SUCCESS, payload: data }))
		.catch( error => dispatch({ type: REQUEST_TEACHERS_FAILED, payload: error }))
} 