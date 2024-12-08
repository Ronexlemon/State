import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice"
import multiplication from "./mul/multiplicationSlice"


export const store = configureStore({
    reducer: {
        counter:counterReducer,
        mul:multiplication

    }
})
export type RootStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch