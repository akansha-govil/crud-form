import {Typography,Box, makeStyles, Grid, TableContainer,Table, TableBody, TableCell, TableHead,TableRow, 
    Paper, IconButton, Tooltip, TextField, Button} from '@material-ui/core';
import {deepPurple,green} from '@material-ui/core/colors';
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const useStyles = makeStyles({
    headingColor: {
        backgroundColor: deepPurple[400],
        color:"white"
    },
    addstuColor: {
        backgroundColor: green[400],
        color:"white"
    }
})

const Edit =()=>{
    const classes= useStyles();
    const navigate = useNavigate();
    const {id} = useParams();
    const [student,setStudent] = useState({
        stuname:"",
        email:"",
        address:"",
        phone:""
    });

    useEffect(()=>{
        async function getStudent(){
            try{
                const student = await axios.get(`http://localhost:3002/students/${id}`)
                // console.log(students.data);
                setStudent(student.data);
            } catch(error)
                {
                    console.log("something is wrong");
                }
        }
       
        getStudent();
    },[id])

    const onChangeDetails = (e)=>{
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        }) 
        console.log(student);
    }

    async function onFormSubmit(e){
        e.preventDefault();
        try{
         await axios.put(`http://localhost:3002/students/${id}` ,student)
           
        } catch(error)
            {
                console.log("something is wrong");
            }
    }
    

    return(
        <>
        <Box textAlign="center" className={classes.headingColor} p={2} mb={2}>
            <Typography variant="h2">React Crud with API Calls</Typography>
        </Box>
        <Grid container justify="center" spacing={4}>
            <Grid item md={6} xs={12}>
            <Box textAlign="center" p={2} className={classes.addstuColor} mb={2}>
                <Typography variant="h4">Edit Student</Typography>
            </Box>
            <form>
                <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                        <TextField autoComplete="id" name="id" variant="outlined" required fullWidth id="id" label="ID" autoFocus value={id} disabled></TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField autoComplete="stuname" name="stuname" variant="outlined" required fullWidth id="stuname" label="Name" value={student.stuname} onChange={ onChangeDetails}></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField autoComplete="email" name="email" variant="outlined" required fullWidth id="email" label="email address" value={student.email} onChange={ onChangeDetails}></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField autoComplete="address" name="address" variant="outlined" required fullWidth id="address" label="Address" value={student.address} onChange={ onChangeDetails}></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField autoComplete="phone" name="phone" variant="outlined" required fullWidth id="phone" label="Phone" value={student.phone} onChange={ onChangeDetails}></TextField>
                    </Grid>
                </Grid>
                <Box m={3}>
                    <Button type="submit" variant="contained" color="primary" fullWidth onClick={e=>onFormSubmit(e)}>Update</Button>
                </Box>
            </form>
            <Box m={3} textAlign="center">
                <Button variant="contained" color="primary" onClick={()=>navigate('/')}>Back to home</Button>
            </Box>
            </Grid>
            </Grid>
        </>
    );
}
export default Edit;