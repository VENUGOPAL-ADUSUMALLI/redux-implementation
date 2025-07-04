import { createSlice } from "@reduxjs/toolkit";
const CounterSlice = createSlice({
    name:"CounterSlice",
    initialState : {
        count : 0
    },
    reducers :{
        increment : (state) =>{
            state.count = state.count+1;
        },
        decrement : (state) =>{
            state.count = state.count-1;
        }
    }
});
export default CounterSlice