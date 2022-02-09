import "./../graphs/graph.css";
import {ResponsiveContainer, Line , LineChart, XAxis, YAxis, CartesianGrid, Legend, Tooltip} from 'recharts';
import axios from 'axios';
import {useState, useEffect} from 'react';

// const courseData = [
//     {
//         course:"javascript",
//         students:10,
//         fees : 10,
//     },
//     {
//         course:"bootstrap",
//         students:5,
//         fees : 20,
//     },
//     {
//         course:"react",
//         students:50,
//         fees : 15,
//     },
//     {
//         course:"c",
//         students:20,
//         fees : 25,
//     },
//     {
//         course:"node js",
//         students:40,
//         fees : 30,
//     },
//     {
//         course:"mongo db",
//         students:45,
//         fees : 35,
//     },

// ]


const Graph = ()=>{
    const [details,setDetails] = useState([]);
    useEffect(()=>{
        async function getAllStudents(){
            try{
                const details = await axios.get("http://localhost:3232/details")
                console.log(details.data);
                setDetails(details.data);
            } catch(error)
                {
                    console.log("something is wrong");
                }
        }
        getAllStudents();
    },[])

    return(
        <>
        <h1 className="chart-heading">Line Chart</h1>
        <ResponsiveContainer width="100%" aspect={3}>
            <LineChart data={details} width={500} height={400} margin={{top:20,right:300,left:200,bottom:20}}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey = "course" interval = {'preserveStartEnd'} tickFormatter={(value)=>value + " programming"} />
                <YAxis />
                <Legend />
                <Tooltip />
                <Line type="monotone" dataKey = "students" stroke ="red" activeDot={{r:10}} />
                <Line type="monotone" dataKey = "fees" stroke ="green" activeDot={{r:10}} />
            </LineChart>
        </ResponsiveContainer>
        </>
    )
}

export default Graph;