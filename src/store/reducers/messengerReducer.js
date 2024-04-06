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
  MESSAGE_GET_SUCCESS_CLEAR,
  SEEN_ALL,
} from "../types/messengerType";

const messengerState = {
  friend: [],
  message: [],
  messageSendSuccess: false,
  message_get_success: false,
  themeMood: "",
};

export const messengerReducer = (state = messengerState, action) => {
  const { payload, type } = action;

  if (type === "THEME_GET_SUCCESS" || type === "THEME_SET_SUCCESS") {
    return {
      ...state,
      themeMood: payload.theme,
    };
  }

  if (type === FRIEND_GET_SUCCESS) {
    return {
      ...state,
      friends: payload.friends,
    };
  }
  if (type === MESSAGE_GET_SUCCESS) {
    return {
      ...state,
      message_get_success: true,
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

  if (type === MESSAGE_GET_SUCCESS_CLEAR) {
    return {
      ...state,
      message_get_success: false,
    };
  }

  if (type === "SEEN_ALL") {
    const index = state.friends.findIndex(
      (f) => f.findInfo._id === payload.reseverId
    );
    state.friends[index].msgInfo.status = "seen";
    return {
      ...state,
    };
  }
  if (type === "LOGOUT_SUCCESS") {
    return {
      ...state,
      friends: [],
      message: [],
      mesageSendSuccess: false,
      message_get_success: false,
    };
  }
  return state;
};
