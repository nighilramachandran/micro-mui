import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import AuthenticateSlice from "./reducers/auth";

export const store = configureStore({
  reducer: {
    [AuthenticateSlice.name]: AuthenticateSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
