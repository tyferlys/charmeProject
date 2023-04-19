import {combineReducers, configureStore} from "@reduxjs/toolkit";
import reducer from "@/state/reducer";

const reducerForStore = combineReducers({
    toolkit: reducer,
})

export const store = configureStore({
    reducer: reducerForStore,
})


