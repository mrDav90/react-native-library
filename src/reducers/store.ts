import { configureStore } from "@reduxjs/toolkit";
import themeReducers from "./theme.reducers";

export const store = configureStore({
    reducer : {
        themeRdx : themeReducers ,
    } ,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})