
import {useSelector,useDispatch} from 'react-redux';
import {changeBackgroundColor} from './backgroundSlice';

const Backgroundchange = ()=>{
    const bgcolor = useSelector((state)=>state.background.bgcolor)
    const dispatch = useDispatch()
    return(
        <>
        <div>
            {/* <input className="textbox" type="text" onChange={(e)=>setbgColor(e.target.value)}></input> */}
        <button className="button" onClick={()=> (dispatch(changeBackgroundColor(bgcolor)))}>🌞</button>
        </div>
        
        </>
    )
}
export default Backgroundchange;