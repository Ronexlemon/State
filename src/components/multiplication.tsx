"use client"
import React from "react"
import {useDispatch, useSelector } from "react-redux"
import { RootStore } from "@/state/store"
import { times10,times5,timesAmount ,timesIt} from "@/state/mul/multiplicationSlice"

const Multiplication =()=>{
    const num = useSelector((state:RootStore)=>state.mul.value)
    const dispatch = useDispatch()
    return (
        <div className="flex w-full h-full justify-center items-center">
            <div className="flex flex-col items-center">
                <h1 className="text-7xl text-green-500 font-mono">MULTIPLICATION</h1>
                <h1 className="text-blue-600">{num}</h1>
                <div className="flex flex-col h-full items-center">
                    <button className="w-20 h-20 bg-green-200" onClick={()=>dispatch(times5())}>X5</button>
                    <button className="w-20 h-20 bg-green-300"  onClick={()=>dispatch(times10())}>X10</button>
                    <button className="w-20 h-20 bg-green-400" onClick={()=>dispatch(timesIt())}>X{num}</button>
                    <button className="w-20 h-20 bg-green-500" onClick={()=>dispatch(timesAmount(100))}>X</button>
                </div>
            </div>

        </div>
    )
}

export default Multiplication