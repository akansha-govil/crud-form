import { useState } from "react"
import Registration from "../login/registration";
import Details from "../students/details";

const User = ()=>{

    const [role,setRole] = useState("ADMIN");

    return(
        <>
        
        {role === "ADMIN" &&
            < Details />
        } 
        </>
    )
}
export default User;