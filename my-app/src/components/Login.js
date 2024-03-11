import unlock from '../asset/unlock.png'
import aavar from '../asset/aavar.png'
import './login.css'
import axios from 'axios'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Login=()=>{
    
    const navigate=useNavigate() 
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    
    axios.defaults.withCredentials = true;
    const handleSubmit=(e)=>{
        e.preventDefault()
        setEmail(" ")
        setPassword(" ")
        toast("successfully Login")
        axios.post(process.env.REACT_APP_API_URL+"/login",{email,password})
        .then(res=>{
            if (res.data.Login){
                navigate("/dashboard")
                alert("successfully Login")
               
                
            } else{
                navigate("/")
            }
             
        
        })
        .catch(err=> console.log(err))
    }
    
    return(
        <div class="container bg-gradient-to-r from-yellow-300 to-white-500">
            {/* <img src={background} class="fixed hidden lg:block inset-0 h-full" 
            style={{zIndex:-1}}  alt=''/>  */}
            <div class="container-body w-screen h-screen flex flex-col justify-center items-center lg:grid lg:grid-cols-2">
                <img src={unlock} class=" unlock hidden rounded-md lg:block w-2/4 p-2 mx-auto" alt="" />
                <form class="flex flex-col justify-center items-center" onSubmit={handleSubmit}>
                    <img src={aavar} class=" aavar w-32" 
                    alt="" />
                    <h2 class="my-8 font-display font-bold text-3xl text-gray-500 text-center">Welcome You</h2>
                    <div class="relative mt-6">
                        <i class="fa fa-user absolute text-primarycolor text-xl pl-2 mt-2"></i>
                        <input 
                        type='text'
                        class="email pl-9 border-2 rounded-lg p-2 font-display outline-0 text-lg focus:border-primarycolor transition" 
                        placeholder='username'
                        onChange={(e)=> setEmail(e.target.value)}
                         />
                    </div>
                    <div class="relative mt-6">
                        <i class="fa fa-lock absolute text-primarycolor text-xl pl-2 mt-2"></i>
                        <input type="password"
                        class="pass pl-9 border-2 rounded-lg p-2 font-display outline-0 text-lg 
                        focus:border-primarycolor transition" 
                        placeholder='password' 
                        onChange={(e)=> setPassword(e.target.value)}
                         />
                    </div>
                    
                    <a class="mt-3 self-center text-primarycolor" href="/">Forget Password?</a>
                    <button class="mt-3 py-3 px-20 bg-primarycolor rounded-md text-white font-bold text-md" >Login</button>
                    
                    <p class="mt-3">Don't have an account?<Link to='/signup' class="text-primarycolor"> Sign up for free</Link></p>
                </form>
                
                   

            </div>



        </div>
    )
}


export default Login;