import { combineReducers } from "redux";

import UserReducer from './userReducer';
import GuideReducer from './guideReducer';

export default combineReducers({
	users: UserReducer,
	guides: GuideReducer
})