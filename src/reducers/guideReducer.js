import { ADD_GUIDE, REMOVE_GUIDE, PROMOTE_USER, DEMOTE_GUIDE } from '../actions/actionTypes';

let id = 0;

export default (state = [], action)=>{
	switch(action.type){
		
		case PROMOTE_USER:
		case ADD_GUIDE:
			id += 1;
			action.payload.id = id;
			action.payload.type = 'guide';
			return state.concat(action.payload)
		case DEMOTE_GUIDE:
		case REMOVE_GUIDE:
			return state.filter((guide)=>guide.id !== action.payload.id)
		default:
			return state
	}
}