import { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Axios from './Utils/Axios';

export const UserInfoContext = createContext(); 

function App() {

  const [userStateData, setUserStateData] = useState([])

  useEffect(()=>{
    const getUserInfo = async () => {
      const userData = await Axios('https://panorbit.in/api/users.json');
      setUserStateData(userData.data.users)
      console.log(userData.data.users);
    }
    getUserInfo()
  },[])
  return (
    <BrowserRouter>
      <UserInfoContext.Provider value={{userStateData}} >
        <Routes>
          
        </Routes>
      </UserInfoContext.Provider>
    </BrowserRouter>
  );
}

export default App;
