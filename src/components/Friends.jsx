import React from "react";
import moment from "moment";

const Friends = (props) => {
  const { findInfo, msgInfo } = props.friend;
  const myId = props.myId;
  // console.log(friend.friend);
  return (
    <div className="friend">
      <div className="friend-image">
        <div className="image">
          <img src={`./image/${findInfo.image}`} alt="" />
        </div>
      </div>

      <div className="friend-name-seen">
        <div className="friend-name">
          <h4>{findInfo.username}</h4>

          <div className="msg-time">
            {msgInfo && msgInfo.senderId === myId ? (
              <span>You </span>
            ) : (
              <span> {findInfo.username + " "} </span>
            )}
            {msgInfo && msgInfo.message.text ? (
              <span>{msgInfo.message.text.slice(0, 10)}</span>
            ) : msgInfo && msgInfo.message.image ? (
              <span>Send A image </span>
            ) : (
              <span>Connect You </span>
            )}
            <span>
              {msgInfo
                ? moment(msgInfo.createdAt).startOf("mini").fromNow()
                : moment(findInfo.createdAt).startOf("mini").fromNow()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;