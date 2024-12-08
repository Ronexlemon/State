import { createSlice,PayloadAction } from "@reduxjs/toolkit";interface multiplicationSate{
    value:number
}

const initialMultiplication:multiplicationSate={
    value:10
}
const multiplication = createSlice({
    name: 'multiplication',
    initialState:initialMultiplication,
    reducers: {
        times5:(state)=>{
            state.value = state.value *5
        },
        times10:(state)=>{
            state.value = state.value *10
        },
        timesAmount:(state,action:PayloadAction<number>)=>{
            state.value = state.value * action.payload

        },
        timesIt:(state)=>{
            state.value = state.value * state.value
        }
    }
})
export const{times10,times5,timesAmount,timesIt} = multiplication.actions;

export default multiplication.reducer