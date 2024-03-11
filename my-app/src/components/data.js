import { useState, useEffect } from "react";
import axios from 'axios'
import './data.css'

const Data=()=>{

    // const[column,setColumn]=useState([])
    const[record,setRecord]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:3001/data")
        .then((res)=>{ 
            // setColumn(Object.keys(res.data[0]))
            setRecord(res.data)
          console.log(res)
        })
        .catch(err=>console.log(err))

        },[])
         
    return(
        <div class="container justify-center item-center mt-2"> 
            <h5 class="font-bold text-lg mx-auto justify-center item-center">Users Details</h5>
            <table class="table-auto mx-auto justify-center item-center border-collapse border border-slate-500 md:w-1/2 md:h-1/2">

            <thead class="justify-center item-center">
                    <tr class="hover:bg-white">
                        <th class="border border-slate-600">First Name</th>
                        <th class="border border-slate-600" >Last Name</th>
                        <th class="border border-slate-600">Email ID</th>
                    </tr>
                </thead>
               
                <tbody class="justify-center item-center">
                    {
                        record.map((d,i)=>(
                            <tr key={i}>
                                
                                <td class="border border-slate-700">{d.firstname}</td>
                                <td class="border border-slate-700">{d.lastname}</td>
                                <td class="border border-slate-700">{d.email}</td>

                            </tr>
                        ))
                    }
                </tbody>

            </table>



        </div>
    )
}

export default Data;