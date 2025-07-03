import React, { useState } from 'react'
import { useSelector } from 'react-redux'
 function Counter(){
    const count = useSelector((store)=>{
      return store.countStore.count
    })
   
    function OnIncrement(){
        // setCount(prev=>prev+1);
    }
    function OnDrecement(){
        // setCount(prev =>prev-1);
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