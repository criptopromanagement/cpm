import { combineReducers } from '@reduxjs/toolkit';
import { reducer as userReducer } from '../slices/user-slice';

export const rootReducer = combineReducers({
    user: userReducer
});
