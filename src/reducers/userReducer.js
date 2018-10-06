import { ADD_USER, REMOVE_USER, PROMOTE_USER, DEMOTE_GUIDE } from '../actions/actionTypes';

let id = 0;

export default (state = [], action)=>{
	switch(action.type){
		case DEMOTE_GUIDE:
		case ADD_USER:
			id += 1;
			action.payload.id = id;
			action.payload.type = 'user';
			return state.concat(action.payload)
		case PROMOTE_USER:
		case REMOVE_USER:
			return state.filter((user)=>user.id !== action.payload.id)
		default:
			return state
	}
}