import { FRIEND_GET_SUCCESS } from "../types/messengerType";

const messengerState = {
  friend: [],
};

export const messengerReducer = (state = messengerState, action) => {
  const { payload, type } = action;
  if (type === FRIEND_GET_SUCCESS) {
    return {
      ...state,
      friends: payload.friends,
    };
  }
  return state;
};
