import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RequestStatus } from "../../interfaces";
import { AppThunk } from "../store";

interface InitialState {
  status: RequestStatus;
  authenticated: boolean;
}

const initialState: InitialState = {
  status: "nothing",
  authenticated: false,
};

const AuthenticateSlice = createSlice({
  name: "Auth",
  initialState: { ...initialState },
  reducers: {
    setStatus: (state, { payload }: PayloadAction<RequestStatus>) => {
      state.status = payload;
    },
    setAuthenticate: (state, { payload }: PayloadAction<string>) => {
      state.authenticated = payload.length > 0 ? true : false;
    },
  },
});

export const { setStatus, setAuthenticate } = AuthenticateSlice.actions;

export const GoogleAthenticate =
  (token: string): AppThunk =>
  (dispatch) => {
    dispatch(setStatus("loading"));
    dispatch(setAuthenticate(token));
    dispatch(setStatus("data"));
    console.log("token in google auth", token);
  };

export default AuthenticateSlice;
