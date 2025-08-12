import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Player from "./Pages/Player/Player";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";


function App(){


  const navigate = useNavigate();
  useEffect( () => {
    onAuthStateChanged(auth, async(user) => {
      if(user){
        navigate('/')
        console.log("Logged In");
      }else{
        console.log("Logged Out");
        navigate('/login')
      }
    })
  },[])

  return(
    <div>
    <ToastContainer />
    <Routes>
      <Route path= "/" element={<Home />}/>
      <Route path= "/login" element={<Login />}/>
      <Route path = "/player/:movieId" element={<Player/>}/>
    </Routes>
    </div>
  )
}

export default App;
