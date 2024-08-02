import { Provider } from "react-redux";
import { store } from "../redux/store";
import React from "react";
import { useAppSelector } from "../redux/hooks";

export function useStore() {
  //   selectors
  const { status } = useAppSelector((state) => state.Auth);

  return {
    status,
  };
}

export function StoreProvider({ children }: any) {
  return <Provider store={store}>{children}</Provider>;
}
