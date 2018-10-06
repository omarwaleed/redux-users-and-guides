import { 
	ADD_USER, PROMOTE_USER, REMOVE_USER
} from "./actionTypes";

export const addUser = (user)=>({
	type: ADD_USER,
	payload: user
})

export const removeUser = (id)=>({
	type: REMOVE_USER,
	payload: {id}
})

export const promoteUser = (user)=>({
	type: PROMOTE_USER,
	payload: user
})