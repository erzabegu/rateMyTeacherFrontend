import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { setAutoFreeze } from 'immer';
import { useDispatch } from "react-redux";
import userSlice from "./slices/user.slice";

setAutoFreeze(false);

const store = configureStore({
    reducer: {
        user: userSlice,
    },
    devTools: { name: "Rate my teacher" },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

