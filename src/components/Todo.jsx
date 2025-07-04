import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import todoSlice from '../redux/Todoslice'
const actions = todoSlice.actions
function Todo() {
    const {value,taskArr} = useSelector((store)=>{
        return store.todoStore
    })
    const dispatch = useDispatch()
    function handleChange(e){
        dispatch(actions.setValue(e.target.value))
    }
    function addTask(){
        
         dispatch(actions.addTask())
    }

  return (
    <>
    <input value={value} placeholder='Enter a todo' onChange={handleChange}/>
    <button onClick={addTask}> submit</button>
    <div>
        <ul>
            {taskArr.map((task,id)=>{
               return <li key={id}>{task} </li>
            }
            )}
        </ul>
    </div>
    </>
  )
}

export default Todo