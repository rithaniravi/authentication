import './App.css';
import Login from './components/Login';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Signup from './components/signup';
import Home from './components/useForm';
import Dashboard from './components/dashboard';

 

function App() {
  return (
    <div class="App">
      <BrowserRouter>
        
         <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/dashboard' element={<Dashboard/>}></Route>
            
         </Routes>
      </BrowserRouter>
      
    
    
    </div>
  );
}

export default App;
