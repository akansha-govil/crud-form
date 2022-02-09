// import {useSelector,useDispatch} from "react-redux";
// import { userLogout} from "../slice/loginSlice";
import { useNavigate } from "react-router-dom";
import Home from "../home"
const Logout = ()=>{
    let navigate = useNavigate();
    // const logout = useSelector((state)=>state.LoggedIn.login);
    // const dispatch = useDispatch();
     
    navigate("/");

    return(
    
       <>
               {

                 (()=>{
                    //console.log("logout")
                    <Home />
                 })()

               }
     
        

        </>
    )
}
export default Logout;