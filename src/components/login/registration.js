import {Typography,Box, makeStyles, Grid, TableContainer,Table, TableBody, TableCell, TableHead,TableRow, 
    Paper, IconButton, Tooltip, TextField, Button} from '@material-ui/core';
import {deepPurple,orange,green} from '@material-ui/core/colors';

import {useState, useEffect} from 'react';
import axios from 'axios';



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



const Registration = ()=>{
    const classes= useStyles();
    const [students,setStudents] = useState([]);
    useEffect(()=>{
        async function getAllStudents(){
            try{
                const students = await axios.get("http://localhost:3002/students")
                // console.log(students.data);
                setStudents(students.data);
            } catch(error)
                {
                    console.log("something is wrong");
                }
        }
        getAllStudents();
    },[])

    const [studentDetails,setStudentDetails] = useState({
        stuname:"",
        email:"",
        password:"",
        address:"",
        phone:"",
    });

    const [status,setStatus] = useState();

    const onChangeDetails = (e)=>{
        setStudentDetails({
            ...studentDetails,
            [e.target.name]: e.target.value
        }) 
        console.log(studentDetails);
    }

    async function onFormSubmit(e){
        e.preventDefault();
        try{
         await axios.post(`http://localhost:3002/students` ,studentDetails)
         setStatus(true);   
        } catch(error)
            {
                console.log("something is wrong");
            }
    }
    if(status){
        return <Registration />
    }

    const handleDelete = async id =>{
        await axios.delete(`http://localhost:3002/students/${id}`);
        var newStudent = students.filter((item)=>{
            return item.id !==id;
        })
        setStudents(newStudent);
    }

    return(
        <>
        {/* <Box textAlign="center" className={classes.headingColor} p={2} mb={2}>
            <Typography variant="h2">React Crud with API Calls</Typography>
        </Box> */}
        <Grid container justify="center" spacing={4}>
            <Grid item md={6} xs={12}>
            <Box textAlign="center" p={2} className={classes.addstuColor} mb={2}>
                <Typography variant="h4">Add Student</Typography>
            </Box>
            <form noValidate>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField autoComplete="stuname" name="stuname" variant="outlined" required fullWidth id="stuname" label="Name" autoFocus onChange={ onChangeDetails}></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField autoComplete="email" name="email" variant="outlined" required fullWidth id="email" label="email address" autoFocus onChange={ onChangeDetails}></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField type="password" autoComplete="password" name="password" variant="outlined" required fullWidth id="password" label="Password" autoFocus onChange={ onChangeDetails}></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField autoComplete="address" name="address" variant="outlined" required fullWidth id="address" label="Address" autoFocus onChange={ onChangeDetails}></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField autoComplete="phone" name="phone" variant="outlined" required fullWidth id="phone" label="Phone Number" autoFocus onChange={ onChangeDetails}></TextField>
                    </Grid>
                </Grid>
                <Box m={3}>
                    <Button type="submit" variant="contained" color="primary" fullWidth onClick={e=>onFormSubmit(e)}>Submit</Button>
                </Box>
            </form>
            </Grid>
            
            </Grid>
        
        </>
    )
}

export default Registration;