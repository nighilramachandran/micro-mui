import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RequestStatus } from "../../interfaces";

interface InitialState {
  status: RequestStatus;
}

const initialState: InitialState = {
  status: "nothing",
};

const AuthenticateSlice = createSlice({
  name: "Auth",
  initialState: { ...initialState },
  reducers: {
    setStatus: (state, { payload }: PayloadAction<RequestStatus>) => {
      state.status = payload;
    },
  },
});

export const { setStatus } = AuthenticateSlice.actions;

// export const FetchPopularArticles =
//   (param: string): AppThunk =>
//   async (dispatch) => {
//     dispatch(setStatus("loading"));
//     try {
//       const { data } = await api.get<ArticleApiResponse>(
//         `svc/mostpopular/v2/viewed/${param}.json`
//       );
//       if (data.status === "OK") {
//         dispatch(setArticles(data?.results));
//         const pageIds = data.results.map((result) => result.id);
//         dispatch(setValidPagesId(pageIds));
//         dispatch(setStatus("data"));
//       } else {
//         dispatch(setStatus("error"));
//       }
//     } catch {
//       dispatch(setStatus("error"));
//     }
//   };

export default AuthenticateSlice;
