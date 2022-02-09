import "./../redux-practice/redux.css";
import {useSelector, useDispatch} from "react-redux";
import {increment,decrement} from "./counterSlice";

function Counter(){
    const count = useSelector((state)=>state.counter.count)
    const themeTextColor = useSelector((state)=>state.Theme.color)
    const dispatch = useDispatch()
    console.log("count")
    return(
        <>
        <div>
        <button className="button" aria-label="Increment value" onClick={()=> {dispatch(increment())}}> + </button>
            <span className="value"  style={{color:themeTextColor}}>Count : {count}</span>
        <button className="button" aria-label="Decrement value" onClick={()=> {dispatch(decrement())}}> - </button>
        </div>
        </>
    )
}
export default Counter;