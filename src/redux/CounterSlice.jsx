import { createSlice } from "@reduxjs/toolkit";
const CounterSlice = createSlice({
    name:"CounterSlice",
    initialState : {
        count : 10000
    }
});
export default CounterSlice