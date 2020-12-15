import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_TEACHERS_PENDING,
    REQUEST_TEACHERS_SUCCESS,
    REQUEST_TEACHERS_FAILED
} from './constants.js';

const initalStateSearch = {
    searchField: ''
}

export const searchTeachers = (state=initalStateSearch, action={}) => {
    switch(action.type){
         case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload});
        default:
            return state;
    }
}

const initialStateTeachers = {
	isPending: false,
	teachers: [],
	error: ''
}


export const requestTeachers = (state = initialStateTeachers, action={}) => {
	switch(action.type){
		case REQUEST_TEACHERS_PENDING:
			return Object.assign({}, state, { isPending: true })
		case REQUEST_TEACHERS_SUCCESS:
			return Object.assign({}, state, { teachers: action.payload, isPending: false })
		case REQUEST_TEACHERS_FAILED:
			return Object.assign({}, state, { error: action.payload, isPending: false })
		default:
			return state;
	}
}