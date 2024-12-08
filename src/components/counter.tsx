"use client"
import { decrement, increment, incrementByAmount } from "@/state/counter/counterSlice";
import { RootStore } from "@/state/store";
import { useDispatch, useSelector } from "react-redux";

const Counter =()=>{
    const count = useSelector((state:RootStore) => state.counter.value);
    const dispatch = useDispatch()
    return(
        <div>
            <h2 className="flex justify-center items-center text-blue-400 text-7xl">{count}</h2>
            <div  className="flex justify-between items-center w-full gap-10">
                <button className="w-20 h-10 rounded bg-green-200" onClick={()=> dispatch(increment())} >+ Inc</button>
                <button className="w-20 h-10 rounded bg-red-200" onClick={()=>dispatch(decrement())}>Dec</button>
                <button className="w-20 h-10 rounded bg-red-200" onClick={()=>dispatch(incrementByAmount(100))}> Amount</button>
            </div>

        </div>
    )
}

export default Counter;