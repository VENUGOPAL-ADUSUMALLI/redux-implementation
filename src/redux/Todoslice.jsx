import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name :"todoSlice",
    initialState :{
        value : "",
        taskArr : []
    },
    reducers : {
        setValue : (state,data)=>{
            state.value = data.payload ;

        },
        addTask : (state)=>{
            const newTask = state.value
            const newTaskArr = [...state.taskArr,newTask]

            state.taskArr = newTaskArr



        }
    }
})
export default todoSlice