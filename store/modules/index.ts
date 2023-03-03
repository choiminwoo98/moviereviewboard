import {
    AnyAction,
    CombinedState,
    combineReducers,
    Reducer,
} from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import counter from "./counter";
import movieslice from "./movieslice";

const reducer: Reducer<CombinedState<any>, AnyAction> = (state, action) => {
    if (action.type === HYDRATE) {
        return {
            ...state,
            ...action.payload,
        };
    }
    return combineReducers({
        counter,
        movieslice,
    })(state, action);
};

export default reducer;
