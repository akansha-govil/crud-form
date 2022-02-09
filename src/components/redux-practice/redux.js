import "./../redux-practice/redux.css";
import {useState} from 'react';
import Coin from "./coin";
import Counter from "./counter";
import Theme from "./Theme/theme";
import Backgroundchange from "./backgroundChange/backgroundChange";
import {useSelector} from 'react-redux';


const Redux = ()=>{
    const changeBackgroundColor = useSelector((state)=>state.background.bgcolor)
    const [count, setCount] = useState(0);
    return(
        <>
        <div className ="app" style={{backgroundColor : changeBackgroundColor}} >
           <Counter />
           <Coin />
           <Theme />
           <Backgroundchange />
        </div>
        </>
    )
}
export default Redux;