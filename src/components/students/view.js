import {Typography,Box, makeStyles, Grid, TableContainer,Table, TableBody, TableCell, TableHead,TableRow, 
    Paper, IconButton, Tooltip, TextField, Button} from '@material-ui/core';
import {orange} from '@material-ui/core/colors';
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

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
    

const View =()=>{
    const classes= useStyles();
    const navigate = useNavigate();
    const {id} = useParams();
    const [student,setStudent] = useState([]);
    
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
    

    return(
        <>
       <Box textAlign="center" p={2} className={classes.stuListColor}>
            <Typography variant="h4">Student Detail</Typography>
            </Box>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow style={{backgroundColor:"#616161"}}>
                            <TableCell align="center" className={classes.tableHeadCell}>ID</TableCell>
                            <TableCell align="center" className={classes.tableHeadCell}>Name</TableCell>
                            <TableCell align="center" className={classes.tableHeadCell}>Email</TableCell>
                            <TableCell align="center" className={classes.tableHeadCell}>Address</TableCell>
                            <TableCell align="center" className={classes.tableHeadCell}>Phone</TableCell>
                           
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align="center">{student.id}</TableCell>
                            <TableCell align="center">{student.stuname}</TableCell>
                            <TableCell align="center">{student.email}</TableCell>
                            <TableCell align="center">{student.address}</TableCell>
                            <TableCell align="center">{student.phone}</TableCell>
                            
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Box m={3} textAlign="center">
                <Button variant="contained" color="primary"  onClick={()=>navigate('/')}>Back to home</Button>
            </Box>
        </>
    );
}
export default View;