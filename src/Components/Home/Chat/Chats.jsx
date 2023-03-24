import React, { useContext } from "react";
import { BsChatRight } from "react-icons/bs";
import { RxCaretUp, RxCaretDown } from "react-icons/rx";
import { UserInfoContext } from "../../../App";

import "./Chats.css";

export function Chats() {
    const users = useContext(UserInfoContext)
    const info = users.userStateData;
    const singleUser = users.storeUserInfo[0]
    const [chatBar, setChatBar] = users.chatBar

    const displayChats = (arr) => {
        const filterArray = arr.filter((item) => {
            return item.name !== singleUser.name;
          });

        return filterArray.map((item,index) => {
            return <div className="chats-img" key={index} >
            <img src={item.profilepicture} alt={item.name} />
            <span>{item.name}</span>
          </div>
        })
    }
  return (
    <div className="chats-section">
      <div className="chat-header" onClick={() => setChatBar(!chatBar)}>
        <div className="chat-icon">
          <BsChatRight style={{ fontSize: "25px" }} />
          <span>Chats</span>
        </div>

        {chatBar ? <RxCaretDown style={{ fontSize: "25px", cursor: "pointer" }}/>  :  <RxCaretUp style={{ fontSize: "25px", cursor: "pointer" }} />}
      </div>

      {chatBar && <div className="chat-user-info">
            {displayChats(info)}
      </div>}
    </div>
  );
}
