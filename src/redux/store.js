import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice";
import todoSlice from "./Todoslice";
const bob = configureStore({
    reducer :{
        countStore:CounterSlice.reducer,
        todoStore : todoSlice.reducer
    }
})
export default bob