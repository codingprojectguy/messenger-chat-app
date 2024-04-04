import React from "react";
import moment from "moment";
import { FaRegCheckCircle } from "react-icons/fa";

const Friends = (props) => {
  const { findInfo, msgInfo } = props.friend;
  const myId = props.myId;
  const { activeUser } = props;
  // console.log(friend.friend);
  return (
    <div className="friend">
      <div className="friend-image">
        <div className="image">
          <img src={`./image/${findInfo.image}`} alt="" />
          {activeUser &&
          activeUser.length > 0 &&
          activeUser.some((u) => u.userId === findInfo._id) ? (
            <div className="active_icon"></div>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="friend-name-seen">
        <div className="friend-name">
          <h4
            className={
              msgInfo?.senderId !== myId &&
              msgInfo?.status !== undefined &&
              msgInfo.status !== "seen"
                ? "unseen_message "
                : ""
            }
          >
            {findInfo.username}
          </h4>

          <div className="msg-time">
            {msgInfo && msgInfo.senderId === myId ? (
              <span>You </span>
            ) : (
              <span
                className={
                  msgInfo?.senderId !== myId &&
                  msgInfo?.status !== undefined &&
                  msgInfo.status !== "seen"
                    ? "unseen_message "
                    : ""
                }
              >
                {" "}
                {findInfo.username + " "}{" "}
              </span>
            )}
            {msgInfo && msgInfo.message.text ? (
              <span
                className={
                  msgInfo?.senderId !== myId &&
                  msgInfo?.status !== undefined &&
                  msgInfo.status !== "seen"
                    ? "unseen_message "
                    : ""
                }
              >
                {msgInfo.message.text.slice(0, 10)}
              </span>
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
        {myId === msgInfo?.senderId ? (
          <div className="seen-unseen-icon">
            {msgInfo.status === "seen" ? (
              <img src={`./image/${findInfo.image}`} alt="" />
            ) : msgInfo.status === "delivered" ? (
              <div className="delivered">
                <FaRegCheckCircle />
              </div>
            ) : (
              <div className="unseen"> </div>
            )}
          </div>
        ) : (
          <div className="seen-unseen-icon">
            {msgInfo?.status !== undefined && msgInfo?.status !== "seen" ? (
              <div className="seen-icon"> </div>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Friends;
