import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Data from "./data";
import dashboard from '../asset/dashboard.png'
import './dashboard.css'
import Navbar from "./navbar";

const Dashboard=()=>{
    const [message,setMessage]=useState()
    const navigate=useNavigate()
    axios.defaults.withCredentials = true;
    useEffect(()=>{
        axios.get(process.env.REACT_APP_API_URL+'/dashboard')
        .then(res=> {
            if (res.data.valid){
                setMessage(res.data.message)

            }else{
                navigate('/')
            }
        })

        .catch(err=> console.log(err))
    })
   
    return(
        <div class="body bg-gradient-to-r from-yellow-300 to-white-500 w-screen h-auto">
        <Navbar/>
   
        
        <h6 class="font-bold text-xl justify-center item-center pl-2 pt-2 mx-auto">Dashboard {message}</h6>
        <img src={dashboard} alt="/" class="item-center mx-auto"></img>
        <Data/>

        </div>
    )
}
export default Dashboard;