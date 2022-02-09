import {Typography,Box, makeStyles, Grid, TableContainer,Table, TableBody, TableCell, TableHead,TableRow, 
    Paper, IconButton, Tooltip, TextField, Button} from '@material-ui/core';
import {orange} from '@material-ui/core/colors';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
//import { userLogin} from "../slice/loginSlice";



const useStyles = makeStyles({
   
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

const Details = ()=>{
    const classes= useStyles();
    let navigate = useNavigate();
    const [students,setStudents] = useState([]);
    const login = useSelector((state)=>state.LoggedIn.login);

     if(!login){
        navigate("/login") 
     }
    
    useEffect(()=>{
        async function getAllStudents(){
            try{
                const studen = await axios.get("http://localhost:3002/students")
                // console.log(students.data);
                setStudents(studen.data);
            } catch(error)
                {
                    console.log("something is wrong");
                }
        }
        getAllStudents();
    },[])





    const handleDelete = async id =>{
        await axios.delete(`http://localhost:3002/students/${id}`);
        var newStudent = students.filter((item)=>{
            return item.id !==id;
        })
        setStudents(newStudent);
    }



    return(
        <>
            <Box textAlign="center" p={2} className={classes.stuListColor}>
            <Typography variant="h4">Student List</Typography>
            </Box>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow style={{backgroundColor:"#616161"}}>
                            <TableCell align="center" className={classes.tableHeadCell}>No</TableCell>
                            <TableCell align="center" className={classes.tableHeadCell}>Name</TableCell>
                            <TableCell align="center" className={classes.tableHeadCell}>Email</TableCell>
                            <TableCell align="center" className={classes.tableHeadCell}>Phone</TableCell>
                            <TableCell align="center" className={classes.tableHeadCell}>Address</TableCell>
                            <TableCell align="center" className={classes.tableHeadCell}>Action</TableCell>
                            
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            students.map((student,i)=>{
                                return(
                                    <TableRow key = {i}>
                            <TableCell align="center">{i + 1}</TableCell>
                            <TableCell align="center">{student.stuname}</TableCell>
                            <TableCell align="center">{student.email}</TableCell>
                            <TableCell align="center">{student.address}</TableCell>
                            <TableCell align="center">{student.phone}</TableCell>
                            <TableCell align="center">
                                <Tooltip title="view">
                                    <IconButton><Link to = {`/view/${student.id}`}><VisibilityIcon color="primary" ></VisibilityIcon ></Link></IconButton>
                                </Tooltip>
                                <Tooltip title="Edit">
                                <IconButton><Link to = {`/edit/${student.id}`}><EditIcon /></Link></IconButton>  
                                </Tooltip>
                                <Tooltip title="Delete">
                                    <IconButton onClick={()=> handleDelete(student.id)}><DeleteIcon color="secondary"></DeleteIcon></IconButton>
                                </Tooltip>
                            </TableCell>
                        </TableRow>
                                )
                            })
                        }
                        
                    </TableBody>
                </Table>
            </TableContainer>
            </>
    )
}

export default Details;