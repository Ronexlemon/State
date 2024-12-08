import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface counterState{
    value: number
}
interface multiplicationSate{
    value:number
}

const initialMultiplication:multiplicationSate={
    value:10
}

const initialState:counterState ={
    value:0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState:initialState,
    reducers: {
        increment:(state)=>{
            state.value = state.value + 1
        },
        decrement:(state)=>{
            state.value = state.value - 1
        },
        incrementByAmount:(state,action:PayloadAction<number>)=>{
            state.value = state.value + action.payload
        }
    }
})

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

        }
    }
})

export  const{increment,decrement,incrementByAmount} = counterSlice.actions


export default counterSlice.reducer;