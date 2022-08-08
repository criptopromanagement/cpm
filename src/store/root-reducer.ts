import { combineReducers } from "@reduxjs/toolkit";
import { reducer as userReducer } from "../slices/user-slice";
import { reducer as myAccountNotificationReducer } from "../slices/my-account-notificacion-slice";

export const rootReducer = combineReducers({
  user: userReducer,
  myAccountNotification: myAccountNotificationReducer,
});
