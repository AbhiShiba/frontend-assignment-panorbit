import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserInfoContext } from "../../App";
import { Loading } from "../Loading/Loading";

import "./LandingPage.css";

export function LandingPage() {
  const userData = useContext(UserInfoContext);
  const navigate = useNavigate()

  const arrayOfUserData = userData.userStateData;
  const loading = userData.loadingFlag;
  const setStoreUserInfo = userData.storeUserInfo[1];

  const contentOfTheUserData = (arr) => {
    return arr.map((userItem) => {
      return (
        <div className="user-info-card" key={userItem.id} onClick={() => handleUserInfo(userItem)}>
          <div className="image-userName">
            <img src={userItem.profilepicture} alt={userItem.name} />
            <span>{userItem.name}</span>
          </div>
          <hr />
        </div>
      );
    });
  };

  const handleUserInfo = (user) => {
    setStoreUserInfo(user)
    navigate('/Profile')
  }
  return (
    <div className="landing-page-container">
      <div className="landing-page-main">
        {loading ? (
          <Loading />
        ) : (
          <>
            <section className="landing-page-heading">
              <h3>Select an account</h3>
            </section>
            <section className="landing-page-content">
              {contentOfTheUserData(arrayOfUserData)}
            </section>
          </>
        )}
      </div>
    </div>
  );
}
