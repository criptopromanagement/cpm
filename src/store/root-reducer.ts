import { combineReducers } from "@reduxjs/toolkit";
import { reducer as userReducer } from "../slices/user-slice";
import { reducer as myAccountNotificationReducer } from "../slices/my-account-notificacion-slice";
import { reducer as logoutModalReducer } from "../slices/logout-modal-slice";
import { reducer as notificationReducer } from "../slices/notification-slice";
import { reducer as transactionsReducer } from "../slices/transactions-slice";
import { reducer as mobileReducer } from "../slices/mobile-slice";
import { reducer as performanceReducer } from "../slices/performance-slice";

export const rootReducer = combineReducers({
  user: userReducer,
  myAccountNotification: myAccountNotificationReducer,
  logoutModal: logoutModalReducer,
  notification: notificationReducer,
  transactions: transactionsReducer,
  mobile: mobileReducer,
  performance: performanceReducer
});
