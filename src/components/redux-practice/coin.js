import {useSelector} from "react-redux";

const Coin = ()=>{
    const coin1 = useSelector((state)=>state.counter.count)
    const themeTextColor = useSelector((state)=>state.Theme.color)
    return(
        <>
        <div>
        <span className="value" style={{color:themeTextColor}}>Coin : {coin1}</span>
        </div>
        </>
    )
}
export default Coin;