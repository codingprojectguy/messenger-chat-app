import {
  FRIEND_GET_SUCCESS,
  MESSAGE_GET_SUCCESS,
  MESSAGE_SEND_SUCCESS,
  SOCKET_MESSAGE,
  UPDATE_FRIEND_MESSAGE,
  MESSAGE_SEND_SUCCESS_CLEAR,
  SEEN_MESSAGE,
  DELIVERED_MESSAGE,
  UPDATE,
} from "../types/messengerType";

const messengerState = {
  friend: [],
  message: [],
  messageSendSuccess: false,
};

export const messengerReducer = (state = messengerState, action) => {
  const { payload, type } = action;
  if (type === FRIEND_GET_SUCCESS) {
    return {
      ...state,
      friends: payload.friends,
    };
  }
  if (type === MESSAGE_GET_SUCCESS) {
    return {
      ...state,
      message: payload.message,
    };
  }

  if (type === MESSAGE_SEND_SUCCESS) {
    return {
      ...state,
      messageSendSuccess: true,
      message: [...state.message, payload.message],
    };
  }

  if (type === SOCKET_MESSAGE) {
    return {
      ...state,
      message: [...state.message, payload.message],
    };
  }

  if (type === UPDATE_FRIEND_MESSAGE) {
    const index = state.friends.findIndex(
      (f) =>
        f.findInfo._id === payload.msgInfo.reseverId ||
        f.findInfo._id === payload.msgInfo.senderId
    );

    state.friends[index].msgInfo = payload.msgInfo;
    state.friends[index].msgInfo.status = payload.status;
    return state;
  }

  if (type === MESSAGE_SEND_SUCCESS_CLEAR) {
    return {
      ...state,
      messageSendSuccess: false,
    };
  }

  if (type === SEEN_MESSAGE) {
    const index = state.friends.findIndex(
      (f) =>
        f.findInfo._id === payload.msgInfo.reseverId ||
        f.findInfo._id === payload.msgInfo.senderId
    );
    state.friends[index].msgInfo.status = "seen";
    return {
      ...state,
    };
  }

  if (type === DELIVERED_MESSAGE) {
    const index = state.friends.findIndex(
      (f) =>
        f.findInfo._id === payload.msgInfo.reseverId ||
        f.findInfo._id === payload.msgInfo.senderId
    );
    state.friends[index].msgInfo.status = "delivered";
    return {
      ...state,
    };
  }
  if (type === UPDATE) {
    const index = state.friends.findIndex((f) => f.findInfo._id === payload.id);
    if (state.friends[index].msgInfo) {
      state.friends[index].msgInfo.status = "seen";
    }
    return {
      ...state,
    };
  }

  return state;
};
