import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserInfoContext } from "../../../App";
import "./HomeNavigation.css";

export function HomeNavigation() {
  const userInfo = useContext(UserInfoContext);
  const navigate = useNavigate()

  const [select, setSelect] = userInfo.NavSelected;
  const setChatBar = userInfo.chatBar[1];

  const handleNavigationBar = (e) => {
    const text = e.target.innerText;

    if (text === "Profile") {
      setSelect("Profile");
      navigate("/Profile");
    }

    if (text === "Posts") {
      setSelect("Posts");
      navigate("/Posts");
    }

    if (text === "Gallery") {
      setSelect("Gallery");
      navigate("/Gallery");
    }

    if (text === "ToDo") {
      setSelect("ToDo");
      navigate("/Todo");
    }

    setChatBar(false)
  };
  return (
    <div className="home-navigation-container">
      <div className="nav-container">
        <div className="profile-nav">
          <h3
            className={select === "Profile" ? "item-text" : ""}
            onClick={handleNavigationBar}
          >
            Profile
          </h3>
          <hr />
        </div>
        <div className="profile-nav">
          <h3
            className={select === "Posts" ? "item-text" : ""}
            onClick={handleNavigationBar}
          >
            Posts
          </h3>
          <hr />
        </div>
        <div className="profile-nav">
          <h3
            className={select === "Gallery" ? "item-text" : ""}
            onClick={handleNavigationBar}
          >
            Gallery
          </h3>
          <hr />
        </div>
        <div className="profile-nav">
          <h3
            className={select === "ToDo" ? "item-text" : ""}
            onClick={handleNavigationBar}
          >
            ToDo
          </h3>
          <hr />
        </div>
      </div>
    </div>
  );
}
