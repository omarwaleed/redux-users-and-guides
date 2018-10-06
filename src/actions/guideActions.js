import { 
	ADD_GUIDE, REMOVE_GUIDE, DEMOTE_GUIDE
} from "./actionTypes";

export const addGuide = (guide)=>({
	type: ADD_GUIDE,
	payload: guide
})

export const removeGuide = (id)=>({
	type: REMOVE_GUIDE,
	payload: {id}
})

export const demoteGuide = (user)=>({
	type: DEMOTE_GUIDE,
	payload: user
})