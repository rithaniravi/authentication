import {FaBars, FaSearch, FaUserCircle,FaBell} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Navbar=()=>{
    const navigate=useNavigate()

    const onSubmit=()=>{
        navigate('/login')
    }
    return(
        <nav class="px-4 py-3 flex justify-between">
            <div class="flex items-center text-xl">
                <FaBars class="text-gray-500 me-4 cursor-pointer"/>
                <span class="text-gray-500 font-semibold ml-2">Dashboard</span>
            </div>
            <div class="flex items-center gap-x-5">
                <div class="relative md:w-65">
                    <span class="relative md:absolute inset-y-0 left-0 flex items-center pl-2">
                      <button class="p-1 focus:outline-none text-gray-500 md:text-black"><FaSearch/></button></span>
                    <input type='text' class="w-full px-4 py-1 pl-12 rounded shadow outline-none hidden md:block"/>
                </div>
                <div class="text-primarycolor"><FaBell class="w-6 h-6"/></div>
                <div class="relative">
                    <button class="text-primarycolor group">
                        <FaUserCircle class="w-6 h-6 mt-1"/>
                        <div class="z-10 hidden absolute  bg-white rounded-lg shadow w-32 group-focus:block top-full right-0">
                            <ul class="py-2 text-sm text-primarycolor">
                                <li><a href='/'>Profile</a></li>
                                <li><a href='/'>Setting</a></li>
                                <li onClick={onSubmit}>Logout</li>
                            </ul>

                        </div>

                    </button>

                </div>
            </div>

        </nav>

    )
}
export default Navbar;

