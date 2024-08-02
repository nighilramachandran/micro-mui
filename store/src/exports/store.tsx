import { Provider } from "react-redux";
import { store } from "../redux/store";
import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { GoogleAthenticate } from "../redux/reducers/auth";

export function useStore() {
  //   selectors
  const { status, authenticated } = useAppSelector((state) => state.Auth);

  // dispatchers
  const dispatch = useAppDispatch();

  return {
    status,
    authenticated,
    dispatchGoogleAuthenticate: (accessToken: string) =>
      dispatch(GoogleAthenticate(accessToken)),
  };
}

export function StoreProvider({ children }: any) {
  return <Provider store={store}>{children}</Provider>;
}
