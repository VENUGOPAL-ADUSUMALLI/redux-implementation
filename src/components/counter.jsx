import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import CounterSlice from '../redux/CounterSlice'
const actions = CounterSlice.actions
 function Counter(){
 
    const count = useSelector((store)=>{
      return store.countStore.count
    })
    const dispatch = useDispatch();
    function OnIncrement(){
       dispatch(actions.increment())
    }
    function OnDrecement(){
        dispatch(actions.decrement())
    }

 
  return (
    <>
    <button onClick={OnIncrement}> +</button>
    <p> {count}</p>
    <button  onClick={OnDrecement}> -</button>
    </>
  )
 }

export default Counter
