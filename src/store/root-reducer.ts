import { combineReducers } from "@reduxjs/toolkit";
import { reducer as userReducer } from "../slices/user-slice";
import { reducer as myAccountNotificationReducer } from "../slices/my-account-notificacion-slice";
import { reducer as logoutModalReducer } from "../slices/logout-modal-slice";
import { reducer as notificationReducer } from "../slices/notification-slice";
import { reducer as transactionsReducer } from "../slices/transactions-slice";
import { reducer as isMobileReducer } from "../slices/is-mobile-slice";

export const rootReducer = combineReducers({
  user: userReducer,
  myAccountNotification: myAccountNotificationReducer,
  logoutModal: logoutModalReducer,
  notification: notificationReducer,
  transactions: transactionsReducer,
  isMobile: isMobileReducer
});
