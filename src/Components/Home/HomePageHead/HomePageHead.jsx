import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserInfoContext } from "../../../App";

import "./HomePageHead.css";

export function HomePageHead() {
  const userData = useContext(UserInfoContext);
  const navigate = useNavigate();
  const [userName, setUserName] = userData.storeUserInfo;
  const select = userData.NavSelected[0];
  const [flag, setFlag] = userData.logoutFlag;
  const data = userData.userStateData;
  const setChatBar = userData.chatBar[1]

  const handleLogout = () => {
    setFlag(!flag);
    setChatBar(false)
  };

  const otherUsers = (arr) => {
    const filterArray = arr.filter((item) => {
      return item.name !== userName.name;
    });

    return filterArray.map((item, index) => {
      return (
        <div className="other-user-info" key={index}>
          <div className="other-img" onClick={() => handelChangeUser(item)}>
            <img src={item.profilepicture} alt={item.name} />
            <span>{item.name}</span>
          </div>
          <hr />
        </div>
      );
    });
  };

  const handelChangeUser = (arg) => {
    setUserName(arg)
    setChatBar(false)
  }

  const gotoHomePage = () => {
    setChatBar(false)
    navigate("/");
  };

  return (
    <div className="header-container">
      <div className="header-userInfo">
        <div>{select}</div>
        <div className="user-info-header" onClick={handleLogout}>
          <img src={userName.profilepicture} alt={userName.name} />
          <span>{userName.name}</span>
          {flag && (
            <div className="logout">
              <img src={userName.profilepicture} alt={userName.name} />
              <p>{userName.name}</p>
              <p className="p-email">{userName.email}</p>
              <div className="other-users">{otherUsers(data)}</div>
              <button className="sign-out-btn" onClick={gotoHomePage}>
                Sign out
              </button>
            </div>
          )}
        </div>
      </div>
      <hr />
    </div>
  );
}
