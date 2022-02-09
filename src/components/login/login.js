import {Typography,Box, makeStyles, Grid, TableContainer,Table, TableBody, TableCell, TableHead,TableRow, 
    Paper, IconButton, Tooltip, TextField, Button} from '@material-ui/core';
import {deepPurple,orange,green} from '@material-ui/core/colors';

import {useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { userLogin} from "../slice/loginSlice";
import { updateRole } from '../slice/roleSlice';




const useStyles = makeStyles({
    headingColor: {
        backgroundColor: deepPurple[400],
        color:"white"
    },
    addstuColor: {
        backgroundColor: green[400],
        color:"white"
    },
    stuListColor: {
        backgroundColor: orange[400],
        color:"white"
    },
    tableHeadCell : {
        color:"white",
        fontWeight: "bold",
        fontSize: 16

    }
})

const Login = ()=>{
    const classes= useStyles();
   const login = useSelector((state)=>state.LoggedIn.login);
    const dispatch = useDispatch();
    let navigate = useNavigate();

   //  const [students,setStudents] = useState([]);
    
     const [status,setStatus] = useState();

    const [studentDetails,setStudentDetails] = useState({
        email:"",
        password:"",
        role:"",
    });
    

    const onChangeDetails = (e)=>{
      //  e.preventDefault();
        setStudentDetails({
            ...studentDetails,
            [e.target.name]: e.target.value
        }) 
        // console.log(studentDetails);
    }

    const onFormSubmit = (e)=>{
          e.preventDefault();
           
         async function getAllStudents(){
            try{
                const studen = await axios.get("http://localhost:3002/students")
                
                // setStudents(studen.data);
                // console.log(students);
                studen.data.map((student,i)=>{
               // console.log(student.role)
              
                 console.log(studentDetails.email)
                   if(student.email === studentDetails.email && student.password === studentDetails.password){
                    setStatus(true); 
                    console.log(student.role);
                    dispatch((updateRole(student.role)))
                    dispatch(userLogin());
                    
                   // login();  // no used of thiscode 
                    console.log("inside map" );
                    console.log(status );
                    }
                })
            } catch(error)
                {
                    console.log("something is wrong");
                }
            }
          getAllStudents();
      }
    
  

    //   if(status && role=="user"){
    //    // return < Home />
    //      navigate("/user");
    //     }
    //     else if(status && role=="ADMIN"){
    //         navigate("/admin")
    //     }
    //     else
    //     {
    //         navigate("/moderator");
    //     }
    if(status ){

        navigate("/user");
    }

        return(
        <>
        <Grid container justify="center" spacing={4}>
        <Grid item md={6} xs={12}>
        <Box textAlign="center" p={2} className={classes.addstuColor} mb={2}>
            <Typography variant="h4">Login</Typography>
        </Box>
        <form noValidate>
            <Grid container spacing={2}>
                
                <Grid item xs={12}>
                    <TextField autoComplete="email" name="email" variant="outlined" required fullWidth id="email"  label="email address" autoFocus onChange={onChangeDetails} ></TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField autoComplete="password" name="password" variant="outlined" required fullWidth id="password"  label="Password" autoFocus type="password" onChange={onChangeDetails}></TextField>
                </Grid>
               
            </Grid>
            <Box m={3}>
                <Button type="submit" variant="contained" color="primary" fullWidth onClick={e=>onFormSubmit(e)}>Login</Button>
            </Box>
            
        </form>
        </Grid>
        
        </Grid>


    
    </>

    
    )

    

    
}

export default Login;