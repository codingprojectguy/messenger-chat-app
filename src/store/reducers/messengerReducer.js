import {
  FRIEND_GET_SUCCESS,
  MESSAGE_GET_SUCCESS,
} from "../types/messengerType";

const messengerState = {
  friend: [],
  message: [],
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
  return state;
};
