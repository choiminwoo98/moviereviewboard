import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import reducer from "./modules";

const makeStore = () =>
    configureStore({
        reducer,
        devTools: process.env.NODE_ENV === "development",
    });

export type RootState = ReturnType<RootStore["getState"]>;
export type RootStore = ReturnType<typeof makeStore>;
export const store = makeStore();
