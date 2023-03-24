import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Chats } from "./Components/Home/Chat/Chats";
import { Gallery } from "./Components/Home/Gallery/Gallery";
import { Home } from "./Components/Home/Home";
import { HomeNavigation } from "./Components/Home/HomeNavigation/HomeNavigation";
import { Posts } from "./Components/Home/Posts/Posts";
import { Profile } from "./Components/Home/Profile/Profile";
import { Todos } from "./Components/Home/Todos/Todos";
import { LandingPage } from "./Components/LandingPage/LandingPage";
import Axios from "./Utils/Axios";

export const UserInfoContext = createContext();

function App() {
  const [userStateData, setUserStateData] = useState([]);
  const [loadingFlag, setLoadingFlag] = useState(false);
  const [storeUserInfo, setStoreUserInfo] = useState(null);
  const [NavSelected, SetNavSelected] = useState("Profile");
  const [logoutFlag, setLogoutFlag] = useState(false)
  const [chatBar, setChatBar] = useState(false)

  useEffect(() => {
    setLoadingFlag(true);
    const getUserInfo = async () => {
      const userData = await Axios("https://panorbit.in/api/users.json");
      setLoadingFlag(false);
      setUserStateData(userData.data.users);
    };
    getUserInfo();
  }, []);

  return (
    <BrowserRouter>
      <UserInfoContext.Provider
        value={{
          userStateData,
          loadingFlag,
          storeUserInfo: [storeUserInfo, setStoreUserInfo],
          NavSelected: [NavSelected, SetNavSelected],
          logoutFlag: [logoutFlag, setLogoutFlag],
          chatBar: [chatBar, setChatBar],
        }}
      >
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/Profile"
            element={
              <Home>
                <HomeNavigation />
                <Profile />
                <Chats/>
              </Home>
            }
          />
          <Route
            path="/Posts"
            element={
              <Home>
                <HomeNavigation />
                <Posts />
                <Chats/>
              </Home>
            }
          />

          <Route
            path="/Gallery"
            element={
              <Home>
                <HomeNavigation />
                <Gallery />
                <Chats/>
              </Home>
            }
          />

          <Route
            path="/Todo"
            element={
              <Home>
                <HomeNavigation />
                <Todos />
                <Chats/>
              </Home>
            }
          />
        </Routes>
      </UserInfoContext.Provider>
    </BrowserRouter>
  );
}

export default App;
