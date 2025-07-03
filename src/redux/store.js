import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice";
const bob = configureStore({
    reducer :{
        countStore:CounterSlice.reducer
    }
})
export default bob