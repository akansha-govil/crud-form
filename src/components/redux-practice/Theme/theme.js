import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { changeTextColor } from './themeSlice';
const Theme = ()=>{
    const [color, setColor] = useState("white");
    const dispatch = useDispatch()
    return(
        <>
        <div>
            <input className="textbox" type="text" onChange={(e)=>setColor(e.target.value)}></input>
        <button className="button" onClick={()=> (dispatch(changeTextColor(color)))}>change text color</button>
        </div>
        
        </>
    )
}
export default Theme;